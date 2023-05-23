import { Router } from "express";

import {
  getAll,
  getById,
  updateUser,
} from "../Controllers/User/userController";

const router = Router();

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", updateUser);

export default router;
