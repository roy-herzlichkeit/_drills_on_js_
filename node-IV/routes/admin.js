import express from "express";
import { addProductGET, addProductPOST } from "../controllers/products.js";

const router = express.Router();

router.get("/add-product", addProductGET);
    
router.post("/add-product", addProductPOST);

export default router;