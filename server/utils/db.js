const mongoose = require("mongoose");

const URI = process.env.MONGOOSE_URI;
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection SuccessFully to Db");
    } catch (error) {
        console.error("Database Connection :: Failed",error);
        process.exit(0);
    }
}

module.exports = connectDb;
