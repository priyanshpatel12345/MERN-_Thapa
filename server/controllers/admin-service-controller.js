const Contact = require("../models/contact-model");

const serviceAdmin = async (req, res ,next) => {
  try {
    const Contacts = await Contact.find();

    if (!Contacts || Contacts === 0) {
      return res.status(404).json({ message: "Contact Not Found" });
    }

    return res.status(200).json(Contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = serviceAdmin;
