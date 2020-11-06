import axios from 'axios'

export default ({ requiresAuth = false } = {}) => {
  const options = {}
  options.baseURL = 'https://api.punkapi.com/v2'

  const instance = axios.create(options)
  return instance
}
