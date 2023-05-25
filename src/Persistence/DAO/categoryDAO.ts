import { Category } from "../../Models";
import { MapCategory } from "../DTO/categoryDTO";

export class CategoryDao {
  constructor() {}

  async getCategory() {
    try {
      const category: Category[] = await Category.findAll();

      return category;
    } catch (error: any) {
      return error.message;
    }
  }

  async createCategory(body: MapCategory) {
    try {
      const { name, image } = body;

      const category = await Category.create({ name, image });

      return category;
    } catch (error: any) {
      return error.message;
    }
  }
}
