import express from "express";
import path from 'path';
import root from '../utils/path.js'
import { data } from "./admin.js"; 

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render('user', {products: data});
});

router.use((req, res, next) => {
    res.status(404);
    res.render('404')
});

export default router;