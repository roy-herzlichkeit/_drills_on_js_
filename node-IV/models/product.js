import root from "../utils/path.js";
import path from "path";
import fs from "fs";

class Product {
    constructor(title, price, description, image, link) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.link = link;
    }

    save() {
        const p = path.join(root, '../data', 'products.json');
        fs.readFile(p, (err, data) => {
            console.log(err);
            let products = [];
            if (!err) {
                products = JSON.parse(data);
            }
            products.push(this);
            console.log(products);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
                
            })
        });
    }

    static fetchAll() {
        return products;
    }
}

export default Product;