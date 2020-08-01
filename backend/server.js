/*
  TODO: 
    - learn how to synchronously process certain requests (like getting authentication code)
    - learn middlewares (how to minimize junk code and reuse segments)

  API FLOW: 
    - user searches an artist name, server return list of artists
    - user confirms the artist selection, server returns a list of albums
    - user selects a list of albums, server returns each track from those albums.
*/

///////////////////////////////////////////////////////////////
//                   SERVER VARS                             //
///////////////////////////////////////////////////////////////

const express = require("express")
const SpotifyWebApi = require('spotify-web-api-node')
const app = express() // create express app
const port = 8080

const spotifyAPI = new SpotifyWebApi({
  clientId: '7d4e98d5926f47fd887b33c0db094c72',
  clientSecret: '5274969d76bb4006964b92076acc6194',
})

const curr_sesh = {}

///////////////////////////////////////////////////////////////
//               SPOTIFY API WRAPPERS                        //
///////////////////////////////////////////////////////////////

// Authorization allows usage of Spotify's API
async function authorize() {
  try {

    let res = await spotifyAPI.clientCredentialsGrant()
    let token = res.body['access_token']
    spotifyAPI.setAccessToken(token)
    console.log("New Token: " + token)

  } catch {

    console.error("Error in authorization")

  }
}

// Given a search string, returns a list of artists that 
async function get_artist_list(artist_name) {

  try {

    let res = await spotifyAPI.searchArtists(artist_name)
    return res.body.artists.items

  } catch {
    
    console.error("Error getting artist list")

  }
}

// Given an artist id, returns a list of albums they have recorded
async function get_album_list(artist_id) {


  try {

    let res = await spotifyAPI.getArtistAlbums(artist_id)
    return res.body.items

  } catch {
    
    console.error("Error getting artist albums")

  }
}

// Get all of the tracks that were on the specified album
async function get_album_tracks(album_id_list) {

  try {

    let res = await spotifyAPI.getAlbumTracks(album_id_list)
    return res.body

  } catch {
    
    console.error("Error getting album tracks")

  }
}

// Given a list of track ids, returns the audio features for each track
async function get_features_for_tracks(track_ids) {

  try {

    let res = await spotifyAPI.getAudioFeaturesForTracks(track_ids)
    return res.body

  } catch {
    
    console.error("error getting track features")

  }
}

async function ex_pipeline() {

  try {
    // Authorize communication with Spotify
    await authorize()

    // Make a search request for ASAP Rocky
    curr_sesh.search_query = "asap"
    curr_sesh.artist_list = await get_artist_list(curr_sesh.search_query)


    curr_sesh.artist = curr_sesh.artist_list[0]
    curr_sesh.artist_albums = await get_album_list(curr_sesh.artist.id)
    curr_sesh.album_id_list = curr_sesh.artist_albums.map((album) => {return album.id})

    curr_sesh.album_tracks = await get_album_tracks(curr_sesh.album_id_list)

    console.log("end of pipeline")
  
  } catch {
    console.error("Pipeline Failed.")
  }
}

///////////////////////////////////////////////////////////////
//                     TEST BED                              //
///////////////////////////////////////////////////////////////



ex_pipeline()
console.log("done")







///////////////////////////////////////////////////////////////
//                      ROUTING                              //
///////////////////////////////////////////////////////////////
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
