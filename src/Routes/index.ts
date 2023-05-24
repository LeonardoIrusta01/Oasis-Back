import { Router } from "express";
import Produts from "./products";
import userRouter from "./user";
import Types from "./type";

const router = Router();

router.use("/products", Produts);
router.use("/user", userRouter);
router.use("/types", Types);

export default router;
