/*
  TODO: 
    - learn how to synchronously process certain requests (like getting authentication code)
    - learn middlewares (how to minimize junk code and reuse segments)
*/


const express = require("express")
const SpotifyWebApi = require('spotify-web-api-node')
const app = express() // create express app
const port = 8080


const spotifyAPI = new SpotifyWebApi({
  clientId: '7d4e98d5926f47fd887b33c0db094c72',
  clientSecret: '5274969d76bb4006964b92076acc6194',
})


authorize_credentials()
async function authorize_credentials() {
  try {
    let res = await spotifyAPI.clientCredentialsGrant()
    let token = res.body.access_token
    spotifyAPI.setAccessToken(token)
    console.log("New Access Token: " + token)
  } catch {
    console.error("Failed to authorize app")
  }
}

let artist = 'rocky'
search_artists(artist)
async function search_artists(artist) {
  try {
    await authorize_credentials()
    let res = await spotifyAPI.searchArtists(artist)
    console.log(res.body.artists.items)
  } catch {
    console.error("Failed to search for artists")
  }
}

app.get("/", (req, res) => {
  res.send("This is from express.js");
});

app.get('/testing', (req, res) => {
    res.send("Frontend is now connected to backend.")
})


// start express server on port 5000
app.listen(port, () => {
  console.log("server started on port 8080");
});