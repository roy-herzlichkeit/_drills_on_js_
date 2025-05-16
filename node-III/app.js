import express from "express";
import bodyParser from "body-parser";
import { routes, data } from "./routes/admin.js";
import user from "./routes/user.js";
import { fileURLToPath } from 'url';
import { dirname } from "path";
import path from "path";
import expressHbs from "express-handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.engine('hbs', expressHbs.engine({ extname: 'hbs', layoutsDir: 'views/layouts/' , defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', routes);
app.use(user);

app.listen(3000);