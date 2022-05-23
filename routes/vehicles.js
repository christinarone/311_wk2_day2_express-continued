const express = require("express");
const vehiclesController = require('../controller/vehicles')

const router = express.Router()

router.get("/", vehiclesController.getAllVehicles)

router.get("/:id", vehiclesController.getVehiclesById)

router.post("/vehicles",vehiclesController.postVehicle)

module.exports = router