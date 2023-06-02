import { sequelize } from "../../Persistence/db";
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';
import connectSessionSequelize from 'connect-session-sequelize';
import session from 'express-session';
import passport from "passport";
import { UserDao } from "../../Persistence/DAO/userDAO";

const userDao = new UserDao()

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: any, done) => {
  const user = await userDao.getById(id)
  if(user){
    done(null, user)
  }
});

passport.use("local",
  new LocalStrategy.Strategy({
    usernameField: "email",
    passwordField: "password",
  }, async (email, password, done) => {
    
    const user = await userDao.getByEmail(email)
    if (!user) {
      return done(null, false, { message: 'Usuario no encontrado' });
    }
    
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return done(err);
      }
      
      if (!result) {
        return done(null, false, { message: 'Contraseña incorrecta' });
      }
      
      return done(null, user);
    });
  })
  );

const SessionStore = connectSessionSequelize(session.Store);

export const sessionStore = new SessionStore({
  db: sequelize,
});