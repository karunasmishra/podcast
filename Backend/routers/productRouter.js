const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  res.send("add product request");
});

router.get("/delete", (req, res) => {
  res.send("delete product request");
});

router.get("/update", (req, res) => {
  res.send("update product request");
});

module.exports = router;