var express = require('express');
/* const productController = require('../controllers/productController'); */
var router = express.Router();
const {detail,all,edit,update,cart,store,create,destroy} = require('../controllers/productController')

/*/products */
router    

    .get('/all/:nombre', all)
    .get('/detail/:id',detail) 
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .post('/store',store)
    .get('/create',create) 
    .get('/cart',cart)     
    .delete('/delete/:id',destroy)

module.exports = router;