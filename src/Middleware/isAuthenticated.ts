import { RequestHandler } from "express";

const isAuthenticated: RequestHandler = (req, res, next) => {
    if(req.isAuthenticated()){
        next()
    }
    return res.status(400).json({status: "Rejected", payload:"Session expired"})
}

export default isAuthenticated