import { Category } from "../../Models";
import { Product } from "../../Models/product";
import { MapProduct } from "../DTO/productDTO";

export class ProductDao {
  constructor() {}

  async getProduct() {
    try {
      const getProduct: Product[] = await Product.findAll({
        attributes: [
          "name",
          "price",
          "image",
          "description",
          "discount",
          "active",
          "stock",
        ],
        include: [Category],
      });

      return getProduct;
    } catch (error: any) {
      return error.message;
    }
  }

  async getProductById(id: string) {
    try {
      const getProductById: Product | null = await Product.findByPk(id, {
        attributes: [
          "name",
          "price",
          "image",
          "description",
          "discount",
          "active",
          "stock",
        ],
        include: [Category],
      });

      return getProductById;
    } catch (error: any) {
      return error.message;
    }
  }

  async createProduct(body: MapProduct) {
    try {
      const {
        name,
        price,
        image,
        description,
        discount,
        active,
        stock,
        category,
      } = body;

      const product = await Product.create({
        name,
        price,
        image,
        description,
        discount,
        active,
        stock,
        idCategory: category.id,
      });

      return product;
    } catch (error: any) {
      return error.message;
    }
  }

  async updateProduct(id: string, body: MapProduct) {
    try {
      const {
        name,
        price,
        image,
        description,
        discount,
        active,
        stock,
        category,
      } = body;

      const product = await Product.update(
        {
          name,
          price,
          image,
          description,
          discount,
          active,
          stock,
          idCategory: category.id,
        },
        { where: { id } }
      );

      return product;
    } catch (error: any) {
      return error.message;
    }
  }
}
