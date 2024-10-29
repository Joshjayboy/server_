const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./Router/TaskRouter");

// use cors
const cors = require("cors");

// use express
const app = express();

const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use(cors());

// home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// connect mongodb database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MONGODB CONNECTED..."))
  .catch((err) => console.log(err));

// connect to routes
app.use("/api", routes);

// port listen
app.listen(PORT, () =>
  console.log(`Server is running in http://localhost:${PORT}`)
);
