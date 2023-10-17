const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { START_CONFIG } = require("./src/settings/start");
require("ejs");

const app = express();

//settings
app.set("port", process.env.PORT || START_CONFIG.PORT);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

//middleware
app.use(morgan("dev"));

//paths
app.use("/public", express.static(path.join(__dirname, "src/public")));
//node modules
app.use("/node", express.static(path.join(__dirname, "node_modules")));

//routes
const routes = require("./src/routes/principals");
app.use(routes);

//running
app.listen(app.get("port"), "0.0.0.0");
console.log(`Server in port ${app.get("port")}`);
