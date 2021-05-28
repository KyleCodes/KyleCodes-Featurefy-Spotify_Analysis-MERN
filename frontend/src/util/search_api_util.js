import axios from 'axios'

export const exDataRetreiveTool = () => {
    return axios.get('http://localhost:8080/api/exdata')
}

export const artistNameQueryTool = (artistNameInput) => {
    return axios.get(`http://localhost:8080/api/artistSearch?artist=${artistNameInput}`)
}

export const artistSelectionAlbumGatheringTool = (artistId) => {
    return axios.get(`http://localhost:8080/api/artistAlbums?artistId=${artistId}`)
}