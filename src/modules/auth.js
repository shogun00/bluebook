export const getClient = () => {
  return localStorage.getItem('client')
}

export const getUid = () => {
  return localStorage.getItem('uid')
}

export const getAccessToken = () => {
  return localStorage.getItem('access-token')
}

export const existsAuth = () => {
  return getClient() && getUid() && getAccessToken()
}

export const storeAuth = params => {
  localStorage.setItem('uid', params.uid)
  localStorage.setItem('client', params.client)
  localStorage.setItem('access-token', params.accessToken)
}

export const clearAuth = () => {
  localStorage.removeItem('uid')
  localStorage.removeItem('client')
  localStorage.removeItem('access-token')
}
