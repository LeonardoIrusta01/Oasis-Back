import { Sequelize } from "sequelize-typescript";
import { User, Product, Category } from "../Models/index";
import { generate } from "../scripts/chargeProductDB";
import { Cart } from "../Models/cart";

const { DB_PASSWORD, DB_USERNAME, DB_HOST, DB_NAME } = process.env;

export const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: "mysql",
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  models: [User, Product, Category, Cart],
});

Category.hasMany(Product, { foreignKey: "idCategory" });
Product.belongsTo(Category, { foreignKey: "idCategory" });

Cart.hasOne(User)

Cart.hasMany(Product)

export const connection = async () => {
  try {
    await sequelize.sync();
    await generate()
  } catch (error) {
    console.log(error);
  }
};
