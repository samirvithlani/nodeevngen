const express = require('express');
const router = express.Router();

const cartController = require('../controller/CartController');
router.post('/', cartController.createCart);
router.get('/', cartController.findAllCart);
router.put('/removeproduct/:cartId', cartController.removeProductFromCart);
module.exports = router;
