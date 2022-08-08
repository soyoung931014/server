/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// Add Express
const express = require("express");
const hotels = require("./api/hotels");
const reserved = require("./api/reservation");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel 🚀");
});
app.use("/hotels", hotels);
app.use("/reserved", reserved);

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;
