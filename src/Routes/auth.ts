import { Router } from "express";
import { register } from "../Controllers/auth/authController";
import passport from "passport";

const router: Router = Router();

router.post("/register", register);

router.post("/login", passport.authenticate('local'), (req, res) => {
    res.status(200).json({status: "Success", payload: req.sessionID})
})

export default router;