const vehicles = require('../data/vehicles')

const getAllVehicles = (req, res)=>{
    res.json(vehicles)
}

const getVehiclesById = (req, res)=>{
    console.log('Inside /GET vehicles route')
    console.log(req.params.id)
    let foundVehicles = vehicles.find((vehicles) => {
        return vehicles._id == req.params.id
    }) 
    res.json(foundVehicles)
}

//create a const variable
const postVehicle = (req,res) => {
console.log(req.body)
const newId = vehicles.length + 1 
const body = {
    _id: newId,
    // imgUrl:./featured-img-1.jpg,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: req.body.isNew
}
vehicles.push(body)
res.json(vehicles)
}

module.exports = {getAllVehicles, getVehiclesById, postVehicle}