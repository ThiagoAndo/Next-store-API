const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html");
});

router.get("/prt", (req, res) => {
  res.render("products.html");
});

router.get("/c", (req, res) => {
  res.render("products copy.html");
});

module.exports = router;
