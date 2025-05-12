import express from "express";
import path from 'path';
import root from '../utils/path.js'

const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(root, '../', 'views', 'user.html'));
});

router.use((req, res, next) => {
    res.status(404);
    res.sendFile(path.join(root, '../', 'views', '404.html'));
});

export default router;