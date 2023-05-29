import { Router } from "express";
import { sendMail } from "../Controllers/Mail/POST/sendMail";

const router = Router();

router.post("/", sendMail)

export default router;