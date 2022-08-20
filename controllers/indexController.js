const fs = require('fs');
const path = require('path');

module.exports = {
    index : (req, res) => {
        const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json')));
        let loMejor = products.filter(product => product.section === "lo mejor" && product.discount <= 20 );
        let oferta = products.filter(product =>  product.section === "oferta");
        return res.render('index', {
             title: 'New Home',
             loMejor,
             oferta
    });
  },
  search : (req,res) => {
    return res.render('result',{
         
    })
  }
};