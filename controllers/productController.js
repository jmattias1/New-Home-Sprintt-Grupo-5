const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


/*/falta codigo */
controller = {
    allproducts : (req, res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json')));
        let type = products.filter(product =>  product.type === "tv");
        return res.render('allproducts', {
             title: 'Products',
             toThousand,
             type             
    });
  },
    detail : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json')));
        const product = products.find(product => product.id === +req.params.id);

        return res.render('productDetail',{
            title : 'Detalle',
            product
        })
    },
    productCart : (req,res) => {
        return res.render('productCart',{
            title : 'Carrito'
        })   
    },
    productAdd : (req,res) => {
        return res.render('productAdd',{
            title : 'Actualizar'
        })   
    },
    productEdition: (req,res) => {
        return res.render('productEdition',{
            title : 'Edición'
        })   
    },



    index : (req,res) =>{
        return res.render('')
    },
 
    create : (req,res) => {
        return res.render('')
    },

    store : (req,res) => {
        return res.redirect('')
    },

    detail : (req,res) => {
        return res.render('productDetail')
    },

    edit : (req,res) =>{
        return res.render('/productEdition')
    },

    update: (req,res) =>{
        return res.redirect('')
    },

    destroy : (req,res) => {
        return res.redirect('/')
    }
}

module.exports = controller;