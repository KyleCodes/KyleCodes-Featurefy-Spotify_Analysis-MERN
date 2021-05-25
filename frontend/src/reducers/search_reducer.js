import {RECEIVE_TEST_DATA} from './../actions/search_actions'


const initialState = {
    exampleData: {}
}

const searchReducer = (prevState = initialState, action) => {
    Object.freeze(prevState)
    const nextState = {...prevState}

    switch (action.type) {
        case RECEIVE_TEST_DATA:
            nextState.exampleData = action.payload
            return nextState

        default:
            return nextState
    }
}

export default searchReducer