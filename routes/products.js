var express = require('express');
var router = express.Router();
const {productDetail, productCart} = require('../controllers/productController')

/*/products */
router.get('/productDetail', productDetail);
router.get('/productCart', productCart);


module.exports = router;