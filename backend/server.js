const express = require("express")
const app = express() // create express app
const port = 8080


app.get("/", (req, res) => {
  res.send("This is from express.js");
});

app.get('/testing', (req, res) => {
    res.send("React is communicating with Express now")
})

// start express server on port 5000
app.listen(port, () => {
  console.log("server started on port 8080");
});