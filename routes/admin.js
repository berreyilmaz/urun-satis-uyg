const express = require('express');
const router = express.Router();


const products = [
    {name:'İphone 6', price: 10000, image:'1.jpg', description:'iyi telefon'},
    {name:'İphone 11', price: 20000, image:'2.jpeg', description:'eh işte'},
    {name:'İphone 14 pro', price: 50000, image:'3.jpeg', description:'harika'},
    {name:'Samsung A52', price: 30000, image:'4.jpeg', description:'müthiş'}
]

// /admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    res.render('add-product', 
        {
            title:'Add a new Product',
            path:'/admin/add-product'
        });
});

// /admin/add-product => POST
router.post('/add-product', (req,res,next)=>{
    products.push({name: req.body.name, price: req.body.price, image: req.body.image, description: req.body.description});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;