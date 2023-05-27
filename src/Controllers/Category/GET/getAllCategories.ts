import { RequestHandler } from "express";

import { CategoryDao } from "../../../Persistence/DAO/categoryDAO";
import { Category } from "../../../Models";

const categoryDao = new CategoryDao();

export const getAllCategories: RequestHandler = async (req, res, next) => {
  try {
    const category: Category[] | null = await categoryDao.getCategory();

    return res.status(200).send({ status: "Success", payload: category });
  } catch (error: any) {
    return res.status(400).send({ status: "Rejected", payload: error.message });
  }
};
