const User = require("../models/user-model");

// -----------------------
// Get All the Data from Database
//-------------------------

const userAdmin = async (req, res ,next) => {
  try {
    const users = await User.find({}, { password: 0 });

    if (!users || users === 0) {
      return res.status(404).json({ message: "No User Found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// ----------------------
// get User Id - Logic
// ---------------------

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

// ----------------------
// Update User Id - Logic
// ---------------------

const updateUserById = async (req, res ,next) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );

    res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// ----------------------
// Delete User Id - Logic
// ---------------------

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json({ message: "User Delete SuccessFully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userAdmin, deleteUserById, getUserById, updateUserById };
