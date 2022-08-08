const express = require("express");
const router = express.Router();
const data = require("./reservation.json");

router.get("/", async (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
