import express from "express";
import path from 'path';
import root from '../utils/path.js'

const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(root, '../', 'views', 'admin.html'));
});
    
router.post("/add-product", (req, res, next) => {
    products.push({title: req.body.name, price: req.body.price, description: req.body.description, link: req.body.link})
    res.redirect("/");
});

export { router as routes, products as data};