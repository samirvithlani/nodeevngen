const router = require('express').Router();
const productController = require('../controller/ProductController');
router.post('/', productController.createProduct);
router.get('/', productController.findAllProduct);
module.exports = router;