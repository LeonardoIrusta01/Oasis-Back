import { RequestHandler } from "express";

import { CartDao } from "../../../Persistence/DAO/cartDao";

const cartDao = new CartDao();

export const updateProductCart: RequestHandler = async (req, res, next) => {
    try {
        const { quantity } = req.body
        const { idCart, idProduct } = req.params

        const cart = await cartDao.updateProductCart(Number(idCart), Number(idProduct), quantity);
        return res
            .status(200)
            .send({ status: "Success", payload: cart });
    } catch (error: any) {
        return res.status(400).send({ status: "Rejected", payload: error.message });
    }
};
