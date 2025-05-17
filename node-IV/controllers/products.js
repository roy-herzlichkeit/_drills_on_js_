import Product from '../models/product.js'

const addProductGET = (req, res, next) => {
    res.render('admin', {pageTitle: "MyDrugs💊: Admin", path: "/admin/add-product"});
}

const addProductPOST = (req, res, next) => {
    let product = new Product(req.body.title, req.body.price, req.body.description, req.body.image, req.body.link);
    product.save();
    res.redirect("/");
}

const productsGET = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('user', {products: products, pageTitle: "MyDrugs💊", path: "/", hasProducts: products.length > 0});
};

export {addProductGET, addProductPOST, productsGET};