import {RECEIVE_TEST_DATA, QUERY_ARTISTS_NAMES, GET_ARTIST_ALBUMS} from './../actions/search_actions'


const initialState = {
    exampleData: {},
    queriedArtistList: [],
    selectedArtist: {
        albums: []
    }

}

const searchReducer = (prevState = initialState, action) => {
    Object.freeze(prevState)
    const nextState = {...prevState}

    switch (action.type) {
        case RECEIVE_TEST_DATA:
            nextState.exampleData = action.payload
            return nextState

        case QUERY_ARTISTS_NAMES:
            nextState.queriedArtistList = action.payload
            return nextState


        case GET_ARTIST_ALBUMS:
            nextState.selectedArtist.albums = action.payload
            return nextState

        default:
            return nextState
    }
}

export default searchReducer