const express = require("express");
const router = express.Router();

const invController = require("../controllers/inventoryController");
router.get("/type/:type", invController.buildByType);
router.get("/detail/:inv_id", invController.buildVehicleDetail);

module.exports = router;