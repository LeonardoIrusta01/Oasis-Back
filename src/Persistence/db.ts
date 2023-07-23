import { Sequelize } from "sequelize-typescript";
import {
  User,
  Product,
  Category,
  Cart,
  CartItem,
  Order,
} from "../Models/index";
import { generate } from "../scripts/chargeProductDB";

const { DB_PASSWORD, DB_USERNAME, DB_HOST, DB_NAME } = process.env;

export const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: "mysql",
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  models: [User, Product, Category, Cart, CartItem, Order],
});

Category.hasMany(Product, { foreignKey: "idCategory" });
Product.belongsTo(Category, { foreignKey: "idCategory" });

Cart.hasOne(User, { foreignKey: "idCart" });
User.belongsTo(Cart, { foreignKey: "idCart" });

Product.hasMany(CartItem, { foreignKey: "idProduct" });
CartItem.belongsTo(Product, { foreignKey: "idProduct" });

Cart.hasMany(CartItem, { foreignKey: "idCart" });
CartItem.belongsTo(Cart, { foreignKey: "idCart" });

User.hasMany(Order, { foreignKey: "idUser" });
Order.belongsTo(User, { foreignKey: "idUser" });

export const connection = async () => {
  try {
    await sequelize.sync({ force: false });
    await generate();
  } catch (error) {
    console.log(error);
  }
};
