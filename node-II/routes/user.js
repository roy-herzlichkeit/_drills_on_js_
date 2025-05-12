import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("WELCOME TO NAMES!");
});

router.use((req, res, next) => {
    res.status(404);
    res.send("<h1>PAGE DOTH NOT EXIST YET, CHOOMS!<h1>");
})

export default router;