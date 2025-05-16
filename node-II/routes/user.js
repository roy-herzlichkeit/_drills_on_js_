import express from "express";
import path from 'path';
import root from '../utils/path.js'
import { data } from "./admin.js"; 

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render('user');
});

router.use((req, res, next) => {
    res.status(404);
    res.sendFile(path.join(root, '../', 'views', '404.html'));
});

export default router;