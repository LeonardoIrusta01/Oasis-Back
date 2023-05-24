import { RequestHandler } from "express";

import { TypeDao } from "../../../Persistence/DAO/typeDAO";

const typeDao = new TypeDao();

export const createType: RequestHandler = async (req, res, next) => {
  try {
    const type = await typeDao.createType(req.body);

    return res.status(201).send({ status: "Succes", payload: type.dataValues });
  } catch (error) {
    return res.status(404).send({ status: "Rejected", payload: error });
  }
};
