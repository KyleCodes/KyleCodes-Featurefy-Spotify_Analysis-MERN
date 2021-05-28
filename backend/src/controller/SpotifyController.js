/*
  API FLOW: 
    - user searches an artist name, server return list of artists
    - user confirms the artist selection, server returns a list of albums
    - user selects a list of albums, server returns each track from those albums.
*/

///////////////////////////////////////////////////////////////
//                      Controller                           //
///////////////////////////////////////////////////////////////


const SpotifyService = require('../service/SpotifyService');
SpotifyService.authorize()

const express = require('express')
const router = express.Router()


// Not really used yet because no static routing
router.get("/", (req, res) => {
  res.send("This is from express.js");
});

// For displaying if dev servers are successfully connected
router.get('/connStatus', (req, res) => {
  res.send("Frontend is now connected to backend.")
})

// Sends all tracks by ASAP rocky
router.get('/exdata', async (req, res) => {
  let exData = await SpotifyService.example_pipeline()
  res.send(exData)
})

// Returns list of artists for a given artist query string 
router.get('/artistSearch', async (req, res) => {
  let artistList = await SpotifyService.get_artist_list(req.query.artist)
  res.send(artistList)
})

//
router.get('/artistAlbums', async (req, res) => {
  let artistInfo = await SpotifyService.get_album_list(req.query.artistId)
  res.send(artistInfo)
})

module.exports = router