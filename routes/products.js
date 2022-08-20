var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();
const {productDetail, productCart,productAdd,productEdition} = require('../controllers/productController')

/*/products */
router 
   
     /*/con estos 3 nose q hacer si borralos o no */     

    .get('/productCart', productCart)
    .get('/productAdd',productAdd)
    .get('/productEdition',productEdition)
    .get('/productDetail',productDetail) 
    .get('/', productController.index)
    .get('/create',productController.create)
    .post('/store',productController.store)
    .get('/detail/:id', productController.detail)
    .get('/edit/:id', productController.edit)
    .put('/update/:id', productController.update)
    .delete('/delete/:id', productController.destroy)

module.exports = router;