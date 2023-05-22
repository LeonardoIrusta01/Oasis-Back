import { Sequelize } from "sequelize-typescript";
import { User, Product } from "../Models/index";

const { DB_PASSWORD, DB_USERNAME, DB_HOST, DB_NAME } = process.env;

export const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: "mysql",
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  models: [User, Product],
});

export const connection = async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
};
