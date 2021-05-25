import axios from 'axios'

export const exDataRetreiveTool = () => {
    return axios.get('http://localhost:8080/exdata')
}