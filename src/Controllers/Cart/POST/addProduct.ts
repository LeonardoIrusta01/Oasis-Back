import { RequestHandler } from "express";

import { CartDao } from "../../../Persistence/DAO/cartDao";

const cartDao = new CartDao();

export const addProduct: RequestHandler = async (req, res, next) => {
    try {
        const { quantity } = req.body
        const { idCart, idProduct } = req.params

        const cart = await cartDao.addProduct(Number(idCart), Number(idProduct), quantity);
        if (typeof cart === "string") {
            return res.status(400).send({ status: "Rejected", payload: cart })
        }
        return res
            .status(201)
            .send({ status: "Success", payload: cart });
    } catch (error: any) {
        return res.status(400).send({ status: "Rejected", payload: error.message });
    }
};
