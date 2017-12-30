import client from '../utils/client'

import * as User from '../constants/User'
import * as authModule from '../modules/auth'
import * as alertActions from './alert'

export const requestSignin = params => dispatch => {
  client
    .post('/auth/sign_in', params)
    .then(response => {
      const { headers, data } = response
      storeAuth(headers)
      dispatch(signin(data))
    })
    .catch(error => {
      console.log(error.message)
      dispatch(failSignin())
      const messages = ['fail signin']
      dispatch(alertActions.error(messages))
    })
}

export const requestSignout = () => {
  authModule.clearAuth()
  return {
    type: User.SIGN_OUT,
  }
}

export const requestFetch = () => dispatch => {
  if (authModule.existsAuth()) {
    client
      .get('/api/auth/user')
      .then(response => {
        dispatch(fetch(response.data))
      })
      .catch(error => {
        console.log(error.message)
        dispatch(failFetch())
      })
  } else {
    dispatch(failFetch())
  }
}

const signin = data => ({
  type: User.SIGN_IN,
  data,
})

const failSignin = () => ({
  type: User.FAIL_SIGNIN,
})

const storeAuth = params => {
  authModule.storeAuth({
    uid: params['uid'],
    client: params['client'],
    accessToken: params['access-token'],
  })
}

const fetch = data => ({
  type: User.FETCH,
  data,
})

const failFetch = () => ({
  type: User.FAIL_FETCH,
})
