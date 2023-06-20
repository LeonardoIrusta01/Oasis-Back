import { Router } from "express";
import { register, googleLogin, logout } from "../Controllers/auth/authController";
import passport from "passport";
import isAuthenticated from "../Middleware/isAuthenticated";

const router: Router = Router();

router.post("/register", register);

router.post("/login", passport.authenticate('local'), (req, res) => {
    res.status(200).json({ status: "Success", payload: { sessionId: req.sessionID, user: req.user } })
})

router.get('/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email', "https://www.googleapis.com/auth/userinfo.profile"] }), googleLogin);

router.get("/logout", isAuthenticated, logout)

export default router;