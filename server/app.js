require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connectDB } = require("./db/connectDB");
const { router } = require("./router/items");
const rfs = require("rotating-file-stream");
const morgan = require("morgan");

const app = express();
app.use(express.json());

const accessLogStream = rfs.createStream("application.log", {
  interval: "1d", // rotate daily
  path: "./logs",
});

app.use(morgan("combined", { stream: accessLogStream }));

app.use(cors());
app.use(morgan("dev"));
app.use("/", router);

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
