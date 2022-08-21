const express = require('express');
const router = express.Router();
const {cart,update,destroy,detail,create,edit,store} = require('../controllers/productController')

/*/products */
router 
     /*/con estos 3 nose q hacer si borralos o no */     
    .get('/cart',cart)
    .get('/create',create)
    .post('/store',store)
    .get('/detail/:id',detail)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .delete('/delete/:id',destroy)

module.exports = router;