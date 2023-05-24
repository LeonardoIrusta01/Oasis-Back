import { Type } from "../../Models";
import { MapType } from "../DTO/typeDTO";

export class TypeDao {
  constructor() {}

  async getType() {
    try {
      const getType: Type[] = await Type.findAll();

      return getType;
    } catch (error: any) {
      return error.message;
    }
  }

  async createType(body: MapType) {
    try {
      const { name, image } = body;

      const type = await Type.create({ name, image });

      return type;
    } catch (error: any) {
      return error.message;
    }
  }
}
