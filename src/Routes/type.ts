import { Router } from "express";

import { getAllTypes, createType } from "../Controllers/Type/typeController";

const router: Router = Router();

router.get("/", getAllTypes);

router.post("/", createType);

export default router;
