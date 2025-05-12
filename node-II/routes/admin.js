import express from "express";

const router = express.Router();

router.get("/add-name", (req, res, next) => {
    res.send(`
        <form action="/admin/add-name" method="POST">
        <input type="text" name="name">
        <button type="submit">Submit</button>
        </form>
    `);
});
    
router.post("/add-name", (req, res, next) => {
    console.log(req.body.name);
    res.redirect("/");
});

export default router;