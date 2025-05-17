import express from "express";
import bodyParser from "body-parser";
import router from "./routes/admin.js";
import user from "./routes/user.js";
import { vierNullVier } from "./controllers/errors.js";
import { fileURLToPath } from 'url';
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', router);
app.use(user);
app.use(vierNullVier);

app.listen(3000);