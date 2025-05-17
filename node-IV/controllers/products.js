const products = [];

const addProductGET = (req, res, next) => {
    res.render('admin', {pageTitle: "MyDrugs💊: Admin", path: "/admin/add-product"});
}

const addProductPOST = (req, res, next) => {
    products.push({
        title: req.body.name, 
        price: req.body.price, 
        description: req.body.description, 
        image: req.body.image,
        link: req.body.link
    });
    res.redirect("/");
}

const productsGET = (req, res, next) => {
    console.log(products, products.length > 0);
    res.render('user', {products: products, pageTitle: "MyDrugs💊", path: "/", hasProducts: products.length > 0});
};

export {addProductGET, addProductPOST, productsGET, products as data};