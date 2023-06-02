import { Router } from "express";
import Produts from "./products";
import userRouter from "./user";
import Category from "./category";
import mailRouter from "./mail"
import authRouter from "./auth"

const router = Router();

router.use("/products", Produts);
router.use("/user", userRouter);
router.use("/categories", Category);
router.use("/contact", mailRouter)
router.use("/auth", authRouter)

export default router;
