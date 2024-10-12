const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("testApi.html");
});

module.exports = router;
