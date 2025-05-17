const products = [];

class Product {
    constructor(title, price, description, image, link) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.link = link;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}

export default Product;