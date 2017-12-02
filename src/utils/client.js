import axios from 'axios'
import config from '../config'
import * as auth from '../modules/auth'

const client = axios.create({
  baseURL: config.backendURL,
  headers: {
    'Content-Type': 'Application/json',
    'X-requested-with': 'XMLHttpRequest',
  },
  timeout: 10000,
  'responseType': 'json'
})

client.interceptors.request.use(config => {
  let newConfig = Object.assign({}, config)
  const authClient = auth.getClient()
  const authUid = auth.getUid()
  const authAccessToken = auth.getAccessToken()

  if (authClient && authUid && authAccessToken) {
    newConfig.headers['client'] = authClient
    newConfig.headers['uid'] = authUid
    newConfig.headers['access-token'] = authAccessToken
  }
  return newConfig
}, error => {
  return Promise.reject(error)
})

export default client
