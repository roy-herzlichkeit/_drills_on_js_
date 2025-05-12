import express from "express";
import bodyParser from "body-parser";
import admin from "./routes/admin.js";
import user from "./routes/user.js";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', admin);
app.use(user);

app.listen(3000);