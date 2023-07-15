import { Category } from "../../Models";
import { Product } from "../../Models/product";
import { MapProduct } from "../DTO/productDTO";
import { Op } from "sequelize";
import XLSX from "xlsx";

export class ProductDao {
  constructor() { }

  async getProduct(
    limit?: number,
    search?: string | any,
    page?: number,
    filter?: string | any
  ) {
    try {
      if (typeof page != "number" || page < 1) {
        throw new Error("Page must be a number and greater than 0");
      }

      if (!search && !limit && !page && !filter) {
        const getProduct: Product[] = await Product.findAll({
          offset: 0,
          limit: 10,
          order: [["name", "ASC"]],
          attributes: [
            "id",
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
      }

      if (filter) {
        const getProduct: Product[] = await Product.findAll({
          offset: 0,
          limit: 10,
          order: [["name", "ASC"]],
          attributes: [
            "id",
            "name",
            "price",
            "image",
            "description",
            "discount",
            "active",
            "stock",
          ],
          include: {
            model: Category,
            where: {
              name: {
                [Op.like]: "%" + filter + "%",
              },
            },
          },
        });

        return getProduct;
      }

      if (search) {
        const upperSearch: string =
          search.charAt(0).toUpperCase() + search.slice(1);
        const getProduct: Product[] = await Product.findAll({
          attributes: [
            "id",
            "name",
            "price",
            "image",
            "description",
            "discount",
            "active",
            "stock",
          ],
          include: [Category],
          where: {
            name: {
              [Op.like]: "%" + upperSearch + "%",
            },
          },
        });

        return getProduct;
      }

      if (page && limit) {
        const getProduct = await Product.findAll({
          offset: (page - 1) * limit,
          limit: limit,
          order: [["name", "ASC"]],
          attributes: [
            "id",
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
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getProductById(id: number) {
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
      throw new Error(error.message);
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
        categoryId,
      } = body;

      const product = await Product.create({
        name,
        price,
        image,
        description,
        discount,
        active,
        stock,
        idCategory: categoryId,
      });

      return product;
    } catch (error: any) {
      return error.message;
    }
  }

  async loadList(list: Express.Multer.File) {
    try {
      if (await Product.count()) {
        await Product.destroy({ where: {} });
      }

      const dataList = XLSX.readFile(list.path);

      const nameList = dataList.SheetNames;
      if (dataList) {
        const products: any[] = XLSX.utils.sheet_to_json(
          dataList.Sheets[nameList[0]]
        );
        await Product.bulkCreate(products);
      }
    } catch (error: any) {
      return error;
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
        categoryId,
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
          idCategory: categoryId,
        },
        { where: { id } }
      );

      return product;
    } catch (error: any) {
      return error.message;
    }
  }
}
