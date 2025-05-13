import express from "express";
import path from 'path';
import root from '../utils/path.js'

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(root, '../', 'views', 'admin.html'));
});
    
router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

export default router;