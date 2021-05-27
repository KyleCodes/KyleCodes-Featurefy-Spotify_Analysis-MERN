///////////////////////////////////////////////////////////////
//                   SERVER VARS                             //
///////////////////////////////////////////////////////////////

const Config = require('./src/config/serverConfig')
const express = require("express")
const cors = require('cors')

const SpotifyService = require('./src/service/SpotifyService');
const { response } = require('express');

SpotifyService.authorize()

const app = express() // create express app

app.use(cors())


///////////////////////////////////////////////////////////////
//                      Controller                           //
///////////////////////////////////////////////////////////////

// Not really used yet because no static routing
app.get("/", (req, res) => {
  res.send("This is from express.js");
});

// For displaying if dev servers are successfully connected
app.get('/connStatus', (req, res) => {
  res.send("Frontend is now connected to backend.")
})

// Sends all tracks by ASAP rocky
app.get("/exdata", async (req, res) => {
  let exData = await SpotifyService.example_pipeline()
  res.send(exData)

})

// Returns list of 5 artists for a given artist query string 
app.get("/artistSearch", async (req, res) => {
    let artistList = await SpotifyService.get_artist_list(req.query.artist)
    res.send(artistList)
})

// start express server on port 
app.listen(Config.PORT_NUMBER, () => {
  console.log("server started on port 8080");
});
