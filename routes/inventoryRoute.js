const express = require("express");
const router = new express.Router();
const invController = require("../controllers/inventoryController");

// Vehicle detail route
router.get("/detail/:inv_id", invController.buildVehicleDetail);

module.exports = router;