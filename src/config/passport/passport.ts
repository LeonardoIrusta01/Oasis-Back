import { sequelize } from "../../Persistence/db";
import LocalStrategy from 'passport-local';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'
import bcrypt from 'bcrypt';
import connectSessionSequelize from 'connect-session-sequelize';
import session from 'express-session';
import passport from "passport";
import { UserDao } from "../../Persistence/DAO/userDAO";

const { CLIENT_ID, CLIENT_SECRET } = process.env

const userDao = new UserDao()

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: any, done) => {
  const user = await userDao.getById(id)
  if (user) {
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

passport.use("google", new GoogleStrategy({
  clientID: "612958931413-l8aik4vp3me4rr428kgqghakugdoadl2.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:3001/api/auth/google",
  authorizationURL: "https://accounts.google.com/o/oauth2/auth",
  tokenURL: "https://oauth2.googleapis.com/token",
},
  async function (_accessToken: any, _refreshToken: any, profile: any, done: any) {

    const user = await userDao.getByEmail(profile.emails[0].value)
    if (user) {
      done(null, profile)

    } else {
      await userDao.createUser({ firstName: profile.name.givenName, lastName: profile.name.familyName, email: profile.emails[0].value, admin: false })
      done(null, profile)
    }
  }
))

const SessionStore = connectSessionSequelize(session.Store);

export const sessionStore = new SessionStore({
  db: sequelize,
});