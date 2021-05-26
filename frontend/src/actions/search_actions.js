import {exDataRetreiveTool, artistNameQueryTool} from './../util/search_api_util'

export const RECEIVE_TEST_DATA = 'RECEIVE_TEST_DATA'
export const QUERY_ARTISTS_NAMES = 'QUERY_ARTISTS_NAMES'

export const getExampleData = (exampleData) => ({
    type: RECEIVE_TEST_DATA,
    payload: exampleData
})


export const getArtistNames = (artistNames) => ({
    type: QUERY_ARTISTS_NAMES,
    payload: artistNames
})



export const retrieveExampleData = () => dispatch => exDataRetreiveTool()
    .then( response => dispatch(getExampleData(response.data)) )


export const queryArtistNames = (artistNameInput) => dispatch => artistNameQueryTool(artistNameInput)
    .then( response => dispatch(getArtistNames(response.data)) )