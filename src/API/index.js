import axios from 'axios'
import {API_KEY} from "../config";

const API = axios.create({baseURL:'https://api.nasa.gov/neo/rest/v1/neo/'})

export const getRandomData = async () => {
    return await API.get(`browse?api_key=${API_KEY}`)
}

export const getAsteroidData = async (id) => {
    return await API.get(`${id}?api_key=${API_KEY}`)
}