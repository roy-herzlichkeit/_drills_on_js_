import express from "express";
import path from 'path';
import root from '../utils/path.js'

const router = express.Router();

router.get("/add-name", (req, res, next) => {
    res.sendFile(path.join(root, '../', 'views', 'admin.html'));
});
    
router.post("/add-name", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

export default router;