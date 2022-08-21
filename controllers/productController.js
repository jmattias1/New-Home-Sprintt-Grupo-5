const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


/*/falta codigo */
controller = {
    cart : (req,res) => {
        return res.render('productCart',{
            title : 'Carrito'
        })   
    },
    update : (req,res) => {
        return res.render('productAdd',{
            title : 'Actualizar'
        })   
    },
    edit: (req,res) => {
        return res.render('productEdition',{
            title : 'Edición'
        })   
    }, 

    create : (req,res) => {
        return res.render('productCreateform')
    },

    store : (req,res) => {
        return res.redirect('')
    },

    detail : (req,res) => {
        return res.render('productDetail')
    },

    edit : (req,res) =>{
        return res.render('edition')
    },

    update: (req,res) =>{
        return res.redirect('')
    },

    destroy : (req,res) => {
        return res.redirect('/')
    }
}

module.exports = controller;