import { RequestHandler } from "express";
import { UserDao } from "../../../Persistence/DAO/userDAO";

const userDao = new UserDao();

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const updatedUser = await userDao.updateUser(id, body);
    res.status(200).json({ status: "Success", payload: `user ${id} updated` });
  } catch (error: any) {
    res.status(400).json({ status: "Rejected", payload: error.message });
  }
};
