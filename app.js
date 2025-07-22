const connectDb = require("./db/db");
const express = require("express");
const app = express();
const routes = require("./routes/empRoute");

connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/", routes);

app.listen(4000, () => {
  console.log("running");
});
