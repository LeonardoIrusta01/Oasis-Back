import { RequestHandler } from "express";

import { ProductDao } from "../../../Persistence/DAO/productDAO";
import { Product } from "../../../Models";

const productDao = new ProductDao();

export const getProductById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const product: Product | null = await productDao.getProductById(id);

      return res.status(200).send({ status: "Success", payload: product });
    }
  } catch (error: any) {
    return res.status(400).send({ status: "Rejected", payload: error.message });
  }
};
