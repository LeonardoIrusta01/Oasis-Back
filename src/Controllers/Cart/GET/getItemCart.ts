import { RequestHandler } from "express";

import { CartDao } from "../../../Persistence/DAO/cartDao";

const cartDao = new CartDao();

export const getItemCart: RequestHandler = async (req, res, next) => {
    try {
        const { idCart } = req.params
        const itemsCart = await cartDao.getItemCart(Number(idCart));

        return res.status(200).send({ status: "Success", payload: itemsCart });
    } catch (error: any) {
        return res.status(400).send({ status: "Rejected", payload: error.message });
    }
};
