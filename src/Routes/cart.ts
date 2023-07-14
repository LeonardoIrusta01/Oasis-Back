import { Router } from "express";
import { addProduct } from "../Controllers/Cart/POST/addProduct";
import { deleteCart } from "../Controllers/Cart/DELETE/deleteCart";
import { updateProductCart } from "../Controllers/Cart/PUT/updateProductCart";
import { updateCart } from "../Controllers/Cart/PUT/updateCart";
import { getItemCart } from "../Controllers/Cart/GET/getItemCart";

const router: Router = Router()

router.get("/:idCart", getItemCart)

router.post("/", addProduct)

router.put("/:idCart/product/:idProduct", updateProductCart)

router.put("/:idCart", updateCart)

router.delete("/:idCart", deleteCart)

export default router