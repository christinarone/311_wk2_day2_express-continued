const products = require('../data/products')

const getAllProducts = (req, res)=>{
    res.json(products)
}

const getProductsById = (req, res)=>{
    console.log('Inside /GET products route')
    console.log(req.params.id)
    let foundProducts = products.find((products) => {
        return products._id == req.params.id
    }) 
    res.json(foundProducts)
}

const postProduct = (req,res)=>{
    //copy and paste this function; do this 1st
    //refer to products controller
    //create function in controllers file then export to routes
    console.log(req.body)
    const newId = products.length + 1 
    const body = {
        _id: newId,
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        imgUrl: req.body.imgUrl,
        price: req.body.price,
        category: req.body.category,
        reviews: req.body.reviews
    }
    products.push(body)
    res.json(products)
    }

module.exports = {getAllProducts, getProductsById, postProduct}