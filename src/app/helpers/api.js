import axios from 'axios'
import {
    API_KEY,
    API_BASE_URL
} from '../config/constants/api'

export default axios.create({
  baseURL: API_BASE_URL,
  timeout: 3600000,
  params: {apikey: API_KEY}
});