/*
  TODO: 
    - learn how to synchronously process certain requests (like getting authentication code)
    - learn middlewares (how to minimize junk code and reuse segments)

  API FLOW: 
    - user searches an artist name, server return list of artists
    - user confirms the artist selection, server returns a list of albums
    - user selects a list of albums, server returns each track from those albums.

  API SPECS
    - # Enter an artist in a string to get a list of possible results
      # Returns a list of artist objects
          function retrieve_artists(artist_name_string) => list of artists

    - # Enter an artist ID to get a list of possible results
      # Returns a list of album objects
          function retrieve_albums_by_artist(artist_id_string) => list of albums belonging to artist

    - # Enter a list of album IDs and get all of their songs + features
      # Returns a data frame of feature objects representing all songs by an artist
          function retrieve_songs_and_features(album_id_strings) => datastructure of songs and their track analysis

      
*/


const express = require("express")
const SpotifyWebApi = require('spotify-web-api-node')
const app = express() // create express app
const port = 8080


const spotifyAPI = new SpotifyWebApi({
  clientId: '7d4e98d5926f47fd887b33c0db094c72',
  clientSecret: '5274969d76bb4006964b92076acc6194',
})

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
let artist_list = search_artists(artist)
async function search_artists(artist) {
  try {
    console.log("Searching Artist: " + artist)
    await authorize_credentials()
    let res = await spotifyAPI.searchArtists(artist)
    console.log(res.body.artists)
    return res.body.artists.items
  } catch {
    console.error("Failed to search for artists")
    return null
  }
}

let x = 0

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