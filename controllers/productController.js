const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

controller = {
    all : (req, res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json')));
        let selectType = req.params.nombre;
        let type = products.filter(product => product.type === selectType);
        const product = products.find(product => product.id === +req.params.id);
        return res.render('allproducts', {
             title: 'Products',
             toThousand,
             selectType,
             products,
             product,
             type
    });
  },
    detail : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json')));
        const product = products.find(product => product.id === +req.params.id);
        let loMejor = products.filter(product => product.section === "lo mejor" && product.discount <= 20 );

        return res.render('productDetail',{
            title : 'Detalle',
            toThousand,
            product,
            loMejor
        })
    },
    edit : (req,res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json')));
        const {id} = req.params;
        let product = products.find(product => product.id === +id)

        return res.render('edition',{
            product
        })
    },
    update : (req,res) => {

        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json')));

        const {id} = req.params;
        let {title, price,discount, description,section} = req.body;


        const productModify = products.map(product => {
            if(product.id === +id){
                return {
                    ...product,
                    title : title.trim(),
                    description : description.trim(),
                    price : +price,
                    discount : +discount,
                    section
                }
            }else{
                return product
            }
        })

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'),JSON.stringify(productModify,null,3),'utf-8');    
        return res.redirect('/products/detail/' + id);

    },
    create: (req, res) => {
		return res.render('productAdd')
	},
	store: (req, res) => {
		const {price,section,discount,description,title} = req.body;
		const newProduct = {
			id : (products[products.length - 1].id + 1),
			title : title.trim(),
			description : description.trim(),
			price : +price,
			discount : +discount,
			image : 'default-img.png',
			section
		}
		let productModify = {...products, newProduct}
		fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'),JSON.stringify(productModify,null,3),'utf-8');    
		return res.redirect('/products/detail/' + productModify.id);
	}, 
    cart : (req,res) => {
        return res.render('productCart',{
            title : 'Carrito'
        })   
    },

    productEdition: (req,res) => {
        return res.render('productEdition',{
            title : 'Edición'
        })   
    },
}

module.exports = controller;
.............