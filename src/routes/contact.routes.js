import { Router } from "express";
import { create } from "../controller/contact/create.js";
const router = Router();

router.post("/", create);

export default router;