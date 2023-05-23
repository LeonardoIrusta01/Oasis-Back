import { Router } from "express";

import {
  GetAllProduct,
  GetProductById,
  CreateProduct,
  UpdateProduct,
} from "../Controllers/Products/productController";

const router: Router = Router();

router.get("/", GetAllProduct);

router.get("/:id", GetProductById);

router.post("/", CreateProduct);

router.put("/:id", UpdateProduct);

export default router;
