import { RequestHandler } from "express";

import { CategoryDao } from "../../../Persistence/DAO/categoryDAO";

const categoryDao = new CategoryDao();

export const createCategory: RequestHandler = async (req, res, next) => {
  try {
    const category = await categoryDao.createCategory(req.body);

    return res
      .status(201)
      .send({ status: "Succes", payload: category.dataValues });
  } catch (error) {
    return res.status(404).send({ status: "Rejected", payload: error });
  }
};
