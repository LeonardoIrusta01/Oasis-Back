import { RequestHandler } from "express";

import { CartDao } from "../../../Persistence/DAO/cartDao";

const cartDao = new CartDao();

export const deleteCart: RequestHandler = async (req, res, next) => {
    try {
        const { idCart } = req.params

        const cart = await cartDao.deleteCart(Number(idCart));
        return res
            .status(201)
            .send({ status: "Success", payload: cart });
    } catch (error: any) {
        return res.status(400).send({ status: "Rejected", payload: error.message });
    }
};
