const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.send("This is really new Home page");
  } catch (error) {
    res.send("Home Page not Found :: Error");
  }
};

// * ---------------------------
// Register - User Logic
// * --------------------------

const register = async (req, res) => {
  try {
    // console.log(req.body);

    const { username, email, password, phone } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "email already Exist" });
    }

    const userCreated = await User.create({ username, email, password, phone });

    res.status(201).json({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(400).json("Register Page not Found :: Error");
  }
};

// * ---------------------------
// login Logic
// * --------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      res.status(400).json({ message: "Email is not a valid" });
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }
  } catch (error) {
    res.send("Login Page not Found :: Error");
  }
};

// * ---------------------------
// to send user Data - User Logic
// * --------------------------

const user = async (req, res) => {
  try {
    const userData = await req.user;
    // console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from user Router ${error}`);
  }
};

module.exports = { home, register, login, user };
