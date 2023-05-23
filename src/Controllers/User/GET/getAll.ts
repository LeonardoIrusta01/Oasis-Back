import { RequestHandler } from "express";
import { UserDao } from "../../../Persistence/DAO/userDAO";

const userDao = new UserDao()

export const getAll : RequestHandler = async (req, res, next) => {
    try {
        const allUsers = await userDao.getAll()
        res.status(200).json({status: "Success", allUsers})
    } catch (error) {
        res.status(200).json({status: "Rejected", error})
    }
}