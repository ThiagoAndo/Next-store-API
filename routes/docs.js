const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html");
});

router.get("/prt", (req, res) => {
  res.render("products.html");
});

module.exports = router;
