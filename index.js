const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({ readOnly: false });

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.use(router);

server.listen(5000, () => {
  console.log(`JSON Server is running, port(${5000})`);
});
// /* eslint-disable @typescript-eslint/no-var-requires */
// /* eslint-disable no-undef */
// // Add Express
// const express = require("express");
// const hotels = require("./api/hotels");
// const reserved = require("./api/reservation");

// const cors = require("cors");

// // Initialize Express
// const app = express();

// // Create GET request
// app.get("/", (req, res) => {
//   res.send("Express on Vercel 🚀");
// });
// app.use("/hotels", hotels);
// app.use("/reserved", reserved);

// app.use(cors());

// // Initialize server
// app.listen(5000, () => {
//   console.log("Running on port 5000.");
// });

// module.exports = app;
