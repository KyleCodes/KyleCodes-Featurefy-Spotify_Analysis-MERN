const express = require("express");
const app = express(); // create express app


app.get("/", (req, res) => {
  res.send("This is from express.js");
});

// start express server on port 5000
app.listen(8080, () => {
  console.log("server started on port 8080");
});