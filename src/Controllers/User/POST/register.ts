import { RequestHandler } from "express";

import { UserDao } from "../../../Persistence/DAO/userDAO";

const userDao = new UserDao();

export const register: RequestHandler = async (req, res, next) => {
    try {
        const user = await userDao.createUser(req.body);
        return res
            .status(201)
            .send({ status: "Success", payload: user.dataValues });
    } catch (error: any) {
        return res.status(400).send({ status: "Rejected", payload: error.message });
    }
};
