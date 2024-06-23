const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    // if you access expired token then it give this 401 Unauthorized
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP , Token not Provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  //   console.log("TOken", jwtToken);

  //   Assuming token is in the format "Bearer" <jwtToken>, removing the Bearer Prefix

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = jwtToken;
    req.userId = userData._id;

    console.log(userData);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized , Invalid Token. " });
  }
};

module.exports = authMiddleware;
