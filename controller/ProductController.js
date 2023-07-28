const productSchema = require('../model/ProductModel');

exports.createProduct = (req, res) => {
    const product = new productSchema({
        name: req.body.name,
        price: req.body.price
    });
    product.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.findAllProduct = (req, res) => {
    productSchema.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}