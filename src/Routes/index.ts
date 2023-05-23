import { Router } from "express";
import Produts from "./products";
import userRouter from './user'

const router = Router();

router.use("/products", Produts);
router.use("/user", userRouter);

export default router;
