import { RequestHandler } from "express";

import { CategoryDao } from "../../../Persistence/DAO/categoryDAO";

const categoryDao = new CategoryDao();

export const getAllCategories: RequestHandler = async (req, res, next) => {
  try {
    const category: [] = await categoryDao.getCategory();

    return res.status(200).send({ status: "Succes", payload: category });
  } catch (error) {
    return res.status(404).send({ status: "Rejected", payload: error });
  }
};
