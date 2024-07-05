require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const adminRouter = require("./router/admin-router");
const connectDb = require("./utils/db");
const port = process.env.PORT || 5000;
const errorMiddleware = require("./middleware/error-middleware");
const serviceRouter = require("./router/service-router");
const courseRouter = require("./router/course-router");

// let's track cors
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
};
app.options("", cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json());

app.use("/", authRouter);

app.use("/Contact", contactRouter);

app.use("/form", serviceRouter);

app.use("/admin", adminRouter);

app.use("/study", courseRouter);

app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running: ${port}`);
  });
});
