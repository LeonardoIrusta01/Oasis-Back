import { RequestHandler } from "express";

import { ProductDao } from "../../../Persistence/DAO/productDAO";
import { Product } from "../../../Models";

const productDao = new ProductDao();

export const getAllProduct: RequestHandler = async (req, res, next) => {
  try {
    const { limit, search, page, filter } = req.query;
    const parsedLimit: number = Number(limit);
    const parsedPage: number = Number(page);

    const product: Product[] | undefined = await productDao.getProduct(
      parsedLimit,
      search,
      parsedPage,
      filter
    );

    return res.status(200).send({ status: "Success", payload: product });
  } catch (error: any) {
    return res.status(400).send({ status: "Rejected", payload: error.message });
  }
};
