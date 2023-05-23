import { RequestHandler } from "express";

import { ProductDao } from "../../../Persistence/DAO/productDAO";

const productDao = new ProductDao();

export const GetAllProduct: RequestHandler = async (req, res, next) => {
  try {
    const { limit } = req.query;
    const product: [] = await productDao.getProduct();
    if (limit) {
      const parsedLimit: number = Number(limit);

      return res
        .status(200)
        .send({ status: "Succes", payload: product.slice(0, parsedLimit) });
    }

    return res.status(200).send({ status: "Succes", payload: product });
  } catch (error) {
    return res.status(404).send({ status: "Rejected", payload: error });
  }
};
