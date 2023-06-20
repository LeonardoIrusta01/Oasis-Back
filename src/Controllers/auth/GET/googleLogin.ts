import { RequestHandler } from "express"

export const googleLogin: RequestHandler = (req, res) => {
    res.redirect("http://localhost:3000/profile")
}