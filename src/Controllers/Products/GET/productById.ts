import { RequestHandler } from "express";

import { ProductDao } from "../../../Persistence/DAO/productDAO";

const productDao = new ProductDao();

export const GetProductById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const product: [] = await productDao.getProductById(id);

      return res.status(200).send({ status: "Succes", payload: product });
    }
  } catch (error) {
    return res.status(404).send({ status: "Rejected", payload: error });
  }
};
