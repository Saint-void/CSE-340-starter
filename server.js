/* ******************************************
 * server.js - Main application file
 ******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const env = require("dotenv").config();
const app = express();
const staticRoutes = require("./routes/static");
const expressLayouts = require("express-ejs-layouts");
const inventoryRoutes = require("./routes/inventoryRoute");

/* ***********************
 * Middleware
 *************************/
app.use(express.static("public"));
app.use(staticRoutes);

/* ***********************
 * View Engine Setup
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

/* ***********************
 * Routes
 *************************/

// Home route
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// Inventory routes (ALL handled in route file)
app.use("/inventory", inventoryRoutes);

// Error test route (500 test)
app.get("/error-test", (req, res, next) => {
  next(new Error("Intentional 500 error"));
});

/* ***********************
 * 404 ERROR HANDLER
 *************************/
app.use(async (req, res, next) => {
  res.status(404).render("errors/error", {
    title: "404 Error",
    message: "Page not found"
  });
});

/* ***********************
 * 500 ERROR HANDLER
 *************************/
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).render("errors/error", {
    title: "Server Error",
    message: err.message
  });
});

/* ***********************
 * Server Info
 *************************/
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});