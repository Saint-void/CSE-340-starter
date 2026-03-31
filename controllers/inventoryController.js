const invModel = require("../models/inventoryModel");
const utilities = require("../utilities");

async function buildVehicleDetail(req, res, next) {
  try {
    const inv_id = req.params.inv_id;

    const data = await invModel.getVehicleById(inv_id);

    if (!data) {
      throw new Error("Vehicle not found");
    }

    const nav = await utilities.getNav();
    const vehicleDetail = utilities.buildVehicleDetail(data);

    res.render("inventory/detail", {
      title: `${data.inv_make} ${data.inv_model}`,
      nav,
      vehicleDetail
    });

  } catch (error) {
    next(error);
  }
}

module.exports = { buildVehicleDetail };