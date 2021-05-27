const SpotifyWebApi = require('spotify-web-api-node')
const Config = require('../config/spotifyConfig')

const spotifyAPI = new SpotifyWebApi({
    clientId: Config.SPOTIFY_ID,
    clientSecret: Config.SPOTIFY_CLIENT_SECRET
})


///////////////////////////////////////////////////////////////
//               SPOTIFY API WRAPPERS                        //
///////////////////////////////////////////////////////////////

// Authorization allows usage of Spotify's API
module.exports.authorize = async () => {
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
module.exports.get_artist_list = async (artist_name) => {
    

    try {
        console.log("searching Artist: " + artist_name)
        let res = await spotifyAPI.searchArtists(artist_name)
        return res.body.artists.items
    } catch {
        console.error("Error getting artist list")
    }
}

// Given an artist id, returns a list of albums they have recorded
module.exports.get_album_list = async (artist_id) => {
    try {
        let res = await spotifyAPI.getArtistAlbums(artist_id)
        return res.body.items
    } catch {
        console.error("Error getting artist albums")
    }
}

// Get all of the tracks that were on the specified album
module.exports.get_album_tracks = async (album_id_list) => {
    try {
        let res = await spotifyAPI.getAlbumTracks(album_id_list)
        return res.body
    } catch {
        console.error("Error getting album tracks")
    }
}

// Given a list of track ids, returns the audio features for each track
module.exports.get_features_for_tracks = async (track_ids) => {
    try {
        let res = await spotifyAPI.getAudioFeaturesForTracks(track_ids)
        return res.body
    } catch {
        console.error("error getting track features")
    }
}

///////////////////////////////////////////////////////////////
//               EXAMPLE PIPELINE                            //
///////////////////////////////////////////////////////////////

module.exports.example_pipeline = async () => {
    const search_session = {}

    try {
        // Authorize communication with Spotify
        await this.authorize()

        // Make a search request for ASAP Rocky
        search_session.search_query = "Asap Rocky"
        search_session.artist_list = await this.get_artist_list(search_session.search_query)

        // Select A$ap Rocky from the group of returned artists
        search_session.artist = search_session.artist_list[0]

        // Get all albums recorded by ASAP, and isolate their album IDs
        search_session.artist_albums = await this.get_album_list(search_session.artist.id)
        search_session.album_id_list = search_session.artist_albums.map((album) => { return album.id })

        // Get evry song belonging to each album on the list, and get the id of each song
        search_session.album_tracks = await Promise.all(search_session.album_id_list.map(async (album_id) => {
            return (await this.get_album_tracks(album_id))
        }))

        // Finally, get the analysis features for each song
        search_session.album_tracks_ids = search_session.album_tracks.map((album) => {
            return album.items.map((track) => {
                return track.id
            })
        })

        search_session.album_track_features = await Promise.all(search_session.album_tracks_ids.map(async (album) => {
            return (await this.get_features_for_tracks(album))
        }))

        console.log(JSON.stringify(search_session.album_id_list, null, 2))
        console.log("end of pipeline")
        return search_session

    } catch(err) {
        console.error("Pipeline Failed.")
        console.error(err)
    }
}