require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const adminRouter = require("./router/admin-router");
const connectDb = require("./utils/db");
const port = 5000;
const errorMiddleware = require("./middleware/error-middleware");
const serviceRouter = require("./router/service-router");
const helmet = require("helmet");
const ExpressMongoSanitize = require("express-mongo-sanitize");

// let's track cors
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(helmet());
app.use(ExpressMongoSanitize());

app.use("/", authRouter);

app.use("/Contact", contactRouter);

app.use("/form", serviceRouter);

app.use("/admin", adminRouter);

app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running: ${port}`);
  });
});
