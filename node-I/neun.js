import express from "express";

const app = express();


app.use("/", (req, res, next) => {
    console.log("I RUN");
    next();
});

app.use("/leaf1", (req, res, next) => {
    console.log("MID-II");
    res.send("<h1>LEAF-I<h1>")
});

app.use("/leaf2", (req, res, next) => {
    console.log("MID-III");
    res.send("<h1>LEAF-II<h1>")
});

app.use("/", (req, res, next) => {
    console.log("MID-I");
    res.send("<h1>ROOT<h1>")
});

app.listen(3000);