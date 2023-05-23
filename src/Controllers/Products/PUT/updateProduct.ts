import { RequestHandler } from "express";

import { ProductDao } from "../../../Persistence/DAO/productDAO";

const productDao = new ProductDao();

export const UpdateProduct: RequestHandler = async (req, res, next) => {
  try {
    const product = await productDao.updateProduct(req.params.id, req.body);

    return res
      .status(200)
      .send({
        status: "Succes",
        payload: `Updated Product where ID is ${req.params.id}`,
      });
  } catch (error) {
    return res.status(404).send({ status: "Rejected", payload: error });
  }
};
