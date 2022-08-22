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
/*     .get('/', productController.index)
    .get('/create',productController.create)
    .post('/store',productController.store)
    .get('/edit/:id', productController.edit)
    .put('/update/:id', productController.update)
    .delete('/delete/:id', productController.destroy) */

module.exports = router;