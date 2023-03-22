import express from "express";
import { create } from "../controllers/product";
const router = express.Router ();
router.post("/products",create);
export default router;