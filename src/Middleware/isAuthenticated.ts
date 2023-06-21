import { RequestHandler } from "express";

const isAuthenticated: RequestHandler = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    }
    return res.status(401).json({ status: "Rejected", payload: "Session expired" })
}

export default isAuthenticated