import express from "express";
import bodyParser from "body-parser";
import admin from "./routes/admin.js";
import user from "./routes/user.js";
import { fileURLToPath } from 'url';
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', admin);
app.use(user);

app.listen(3000);