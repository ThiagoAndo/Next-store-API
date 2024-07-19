const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html");
});

router.get("/prt", (req, res) => {
  res.render("products.html");
});
router.get("/user", (req, res) => {
  res.render("products.html");
});

router.get("/cart", (req, res) => {
  res.render("products.html");
});

router.get("/address", (req, res) => {
  res.render("products.html");
});

router.get("/order", (req, res) => {
  res.render("products.html");
});

router.get("/c", (req, res) => {
  res.render("exp.html");
});

module.exports = router;
