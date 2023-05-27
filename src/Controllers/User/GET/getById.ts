import { RequestHandler } from "express";
import { UserDao } from "../../../Persistence/DAO/userDAO";

const userDao = new UserDao();

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userDao.getById(id);
    res.status(200).json({ status: "Success", payload: user });
  } catch (error: any) {
    res.status(400).json({ status: "Rejected", payload: error.message });
  }
};
