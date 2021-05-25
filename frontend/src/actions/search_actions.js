import {exDataRetreiveTool} from './../util/search_api_util'

export const RECEIVE_TEST_DATA = 'RECEIVE_TEST_DATA'

export const getExampleData = (exampleData) => ({
    type: RECEIVE_TEST_DATA,
    payload: exampleData
})

export const retrieveExampleData = () => dispatch => exDataRetreiveTool()
.then( response => dispatch(getExampleData(response.data)) )