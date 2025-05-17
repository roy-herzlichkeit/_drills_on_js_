import express from "express";
import path from 'path';
import root from '../utils/path.js'
import { data } from "./admin.js"; 

const router = express.Router();

router.get("/", (req, res, next) => {
    console.log(data, data.length > 0);
    res.render('user', {products: data, pageTitle: "MyDrugs💊", path: "/", hasProducts: data.length > 0});
});

router.use((req, res, next) => {
    res.status(404);
    res.render('404', {pageTitle: "404: Cannot reach MyDrugs💊, Chooms!"})
});

export default router;