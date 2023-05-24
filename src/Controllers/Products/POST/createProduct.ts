import { RequestHandler } from "express";

import { ProductDao } from "../../../Persistence/DAO/productDAO";

const productDao = new ProductDao();

export const createProduct: RequestHandler = async (req, res, next) => {
  try {
    const product = await productDao.createProduct(req.body);

    return res
      .status(201)
      .send({ status: "Succes", payload: product.dataValues });
  } catch (error) {
    return res.status(404).send({ status: "Rejected", payload: error });
  }
};
