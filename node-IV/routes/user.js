import express from "express";
import { productsGET } from "../controllers/products.js";

const router = express.Router();

router.get("/", productsGET);

export default router;