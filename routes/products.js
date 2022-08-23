var express = require('express');
/* const productController = require('../controllers/productController'); */
var router = express.Router();
const {detail,all,edit,update,cart,store,create} = require('../controllers/productController')

/*/products */
router 
   
     /*/con estos 3 nose q hacer si borralos o no */     

    .get('/all/:nombre', all)
    .get('/detail/:id',detail) 
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .post('/store',store)
    .get('/create',create) 
    .get('/cart',cart) 
/* Cuando las usemos, las descomentamos. */
/* router
    
    .delete('/delete/:id',destroy) */
    

module.exports = router;