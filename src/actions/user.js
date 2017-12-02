import client from '../utils/client'

import * as User from '../constants/User'
import * as authModule from '../modules/auth'
import * as alertActions from './alert'

export const fetchUser = params => dispatch => {
  dispatch(requestFetchUser)
  console.log(params)
  client.post('/auth/sign_in', params).then(
    response => {
      const { headers, data } = response
      const user = data
      storeAuth(headers)
      dispatch(signIn(user))
    }
  ).catch(
    error => {
      console.log(error)
      console.log(error.message)
      dispatch(failSignIn('fail signin'))
      dispatch(alertActions.error('fail signin'))
    }
  )
}

export const signout = () =>{
  authModule.clearAuth()
  return {
    type: User.SIGN_OUT
  }
}

export const loadUserData = () => dispatch => {
  dispatch(requestFetchUser)
  client.get('/api/auth/user').then(
    response => {
      dispatch(updateUser(response.data))
    }
  ).catch(
    error => {
      console.log(error.message)
      dispatch(failLoadUser())
    }
  )
}

const requestFetchUser = () => ({
  type: User.REQUEST_FETCH_USER
})

const signIn = data => ({
  type: User.SIGN_IN,
  data
})

const failSignIn = errors => ({
  type: User.FAIL_SIGNIN,
  errors
})

const storeAuth = params => {
  authModule.storeAuth({
    uid: params['uid'],
    client: params['client'],
    accessToken: params['access-token'],
  })
}

const updateUser = data => ({
  type: User.UPDATE_USER,
  data
})

const failLoadUser = () => ({
  type: User.FAIL_LOAD_USER
})
