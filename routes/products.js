var express = require('express');
/* const productController = require('../controllers/productController'); */
var router = express.Router();
const {detail, productCart,productAdd,all} = require('../controllers/productController')

/*/products */
router 
   
     /*/con estos 3 nose q hacer si borralos o no */     

    .get('/productCart', productCart)
    .get('/all/:nombre', all)
    .get('/productAdd',productAdd)
    .get('/detail/:id',detail) 

/* Cuando las usemos, las descomentamos. */
/* router
    .get('/cart',cart)
    .get('/all/:nombre', all)
    .get('/create',create)
    .post('/store',store)
    .get('/detail/:id',detail)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .delete('/delete/:id',destroy) */
    

module.exports = router;