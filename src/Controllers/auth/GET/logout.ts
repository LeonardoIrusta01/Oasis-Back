import { RequestHandler } from "express";

export const logout: RequestHandler = (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ status: "Rejected", payload: 'Fail to close session' });
        }
        return res.status(200).json({ status: "Success", payload: "Session closed successfully" })
    })

}