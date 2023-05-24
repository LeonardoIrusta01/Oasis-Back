import { RequestHandler } from "express";

import { TypeDao } from "../../../Persistence/DAO/typeDAO";

const typeDao = new TypeDao();

export const getAllTypes: RequestHandler = async (req, res, next) => {
  try {
    const type: [] = await typeDao.getType();

    return res.status(200).send({ status: "Succes", payload: type });
  } catch (error) {
    return res.status(404).send({ status: "Rejected", payload: error });
  }
};
