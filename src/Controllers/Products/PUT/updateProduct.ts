import { RequestHandler } from "express";

import { ProductDao } from "../../../Persistence/DAO/productDAO";

const productDao = new ProductDao();

export const updateProduct: RequestHandler = async (req, res, next) => {
  try {
    const product = await productDao.updateProduct(req.params.id, req.body);

    return res.status(200).send({
      status: "Success",
      payload: `Updated Product where ID is ${req.params.id}`,
    });
  } catch (error: any) {
    return res.status(400).send({ status: "Rejected", payload: error.message });
  }
};
