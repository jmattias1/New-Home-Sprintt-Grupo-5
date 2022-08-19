const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

controller = {
    productDetail : (req,res) => {
        return res.render('productDetail')   
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