import { RequestHandler } from "express";

import { ProductDao } from "../../../Persistence/DAO/productDAO";

const productDao = new ProductDao();

export const loadList: RequestHandler = async (req, res, next) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .send({ status: "Rejected", payload: "No file to read" });
    }
    await productDao.loadList(req.file);

    return res
      .status(201)
      .send({ status: "Success", payload: "Data upload successful" });
  } catch (error: any) {
    return res.status(400).send({ status: "Rejected", payload: error.message });
  }
};
