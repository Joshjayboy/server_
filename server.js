const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./Router/TaskRouter");

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MONGODB CONNECTED..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () =>
  console.log(`Server is running in http://localhost:${PORT}`)
);
