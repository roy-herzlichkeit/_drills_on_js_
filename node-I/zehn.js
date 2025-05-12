import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/name", (req, res, next) => {
    console.log(req.body.name);
    res.redirect("/");
});

app.post("/add-name", (req, res, next) => {
    res.send(`
        <form action="/name" method="POST">
            <input type="text" name="name">
            <button type="submit">Submit</button>
        </form>
    `);
});

app.use("/", (req, res, next) => {
    res.send("GO TO http://127.0.0.1:3000/add-name/");
});

app.listen(3000);