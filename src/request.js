import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8088'
})
export default request
