import { Router } from "express";
import Produts from "./products";

const router = Router();

router.use("/products", Produts);

export default router;
