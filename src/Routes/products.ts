import { Router } from "express";

import {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
} from "../Controllers/Products/productController";

const router: Router = Router();

router.get("/", getAllProduct);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.put("/:id", updateProduct);

export default router;
