const express = require('express');
const router = express.Router();
const {cart,update,destroy,detail,create,edit,store, all} = require('../controllers/productController')

router
    .get('/cart',cart)
    .get('/all/:nombre', all)
    .get('/create',create)
    .post('/store',store)
    .get('/detail/:id',detail)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .delete('/delete/:id',destroy)
    

module.exports = router;