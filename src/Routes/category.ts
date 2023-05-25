import { Router } from "express";

import {
  getAllCategories,
  createCategory,
} from "../Controllers/Category/categoryController";

const router: Router = Router();

router.get("/", getAllCategories);

router.post("/", createCategory);

export default router;
