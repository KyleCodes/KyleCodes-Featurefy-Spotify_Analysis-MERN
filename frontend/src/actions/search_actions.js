import {exDataRetreiveTool, artistNameQueryTool, artistSelectionAlbumGatheringTool} from './../util/search_api_util'

export const RECEIVE_TEST_DATA = 'RECEIVE_TEST_DATA'
export const QUERY_ARTISTS_NAMES = 'QUERY_ARTISTS_NAMES'
export const GET_ARTIST_ALBUMS = 'GET_ARTIST_ALBUMS'

export const getExampleData = (exampleData) => ({
    type: RECEIVE_TEST_DATA,
    payload: exampleData
})


export const getArtistNames = (artistNames) => ({
    type: QUERY_ARTISTS_NAMES,
    payload: artistNames
})


export const getArtistAlbums = (artistAlbums) => ({
    type: GET_ARTIST_ALBUMS,
    payload: artistAlbums
})


export const retrieveExampleData = () => dispatch => exDataRetreiveTool()
    .then( response => dispatch(getExampleData(response.data)) )


export const queryArtistNames = (artistNameInput) => dispatch => artistNameQueryTool(artistNameInput)
    .then( response => dispatch(getArtistNames(response.data)) )


export const selectArtist = (artistId) => dispatch => artistSelectionAlbumGatheringTool(artistId)
    .then( response => dispatch(getArtistAlbums(response.data)))