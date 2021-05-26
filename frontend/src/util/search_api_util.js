import axios from 'axios'

export const exDataRetreiveTool = () => {
    return axios.get('http://localhost:8080/exdata')
}

export const artistNameQueryTool = (artistNameInput) => {
    return axios.get(`http://localhost:8080/artistSearch?artist=${artistNameInput}`)
}

export const artistSelectionDataGatheringTool = (artistSelection) => {
    return 
}