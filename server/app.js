require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./db/connectDB");
const rfs = require("rotating-file-stream");
const morgan = require("morgan");

const { router } = require("./router/items");
const authRouter = require("./router/authRoute");

const app = express();
app.use(express.json());

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const accessLogStream = rfs.createStream("application.log", {
  interval: "1d", // rotate daily
  path: "./logs",
});

app.use(morgan("combined", { stream: accessLogStream }));
app.use(cookieParser(process.env.JWT_SECRET)); // access to cookies in req.signedCookies (for more security in production)

app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use("/", router);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("server connected to PORT 5000 and DB");
    });
  } catch (error) {
    console.log("error occurred : ", error);
  }
};
start();
