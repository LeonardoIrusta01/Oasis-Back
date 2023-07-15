import { RequestHandler } from "express";

import { UserDao } from "../../../Persistence/DAO/userDAO";
import { CartDao } from "../../../Persistence/DAO/cartDao";

const userDao = new UserDao();
const cartDao = new CartDao()

export const register: RequestHandler = async (req, res, next) => {
    try {
        const cart = await cartDao.createCart()
        const user = await userDao.createUser(req.body);
        await user.setCart(cart.id)
        return res
            .status(201)
            .send({ status: "Success", payload: user.dataValues });
    } catch (error: any) {
        return res.status(400).send({ status: "Rejected", payload: error.message });
    }
};
