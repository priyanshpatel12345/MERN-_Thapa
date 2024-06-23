const Service = require("../models/service-model");

// * ---------------------------
// Service Logic
// * --------------------------

const serviceController = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ msg: "No service found" });
    }

    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ msg: "error from service logic" });
  }
};

module.exports = serviceController;
