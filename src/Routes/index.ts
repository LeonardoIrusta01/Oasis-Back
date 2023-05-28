import { Router } from "express";
import Produts from "./products";
import userRouter from "./user";
import Category from "./category";
import mailRouter from "./mail"

const router = Router();

router.use("/products", Produts);
router.use("/user", userRouter);
router.use("/categories", Category);
router.use("/contact", mailRouter)

export default router;
