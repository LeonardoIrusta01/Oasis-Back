import { RequestHandler } from "express";
import { UserDao } from "../../../Persistence/DAO/userDAO";

const userDao = new UserDao();

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const { email } = req.query
    if (email) {
      const user = await userDao.getByEmail(email.toString())
      if (typeof user === "string") return res.status(404).json({ status: "Rejected", payload: user });
      return res.status(200).json({ status: "Success", payload: user });
    } else {
      const allUsers = await userDao.getAll();
      return res.status(200).json({ status: "Success", payload: allUsers });
    }
  } catch (error: any) {
    return res.status(400).json({ status: "Rejected", payload: error.message });
  }
};
