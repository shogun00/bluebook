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


  // const body = JSON.stringify(params)
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: body
  // }
  // fetch(`http://localhost:3000/auth/sign_in`, options).then(
  //   handleResponse
  // ).then(
  //   prepareSignIn
  // ).then(
  //   data => { dispatch(signIn(data.data)) }
  // ).catch(
  //   error => { dispatch(failSignIn(error.message)) }
  // )
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
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'client': authModule.getClient(),
  //     'uid': authModule.getUid(),
  //     'access-token': authModule.getAccessToken()
  //   }
  // }
  // fetch(`http://localhost:3000/api/auth/user`, options).then(
  //   res => {
  //     return res.json()
  //   }
  // ).then(
  //   data => { dispatch(updateUser(data)) }
  // ).catch(
  //   error => {
  //     console.log(error)
  //     failLoadUser()
  //     // dispatch(alertActions.error(error.message))
  //   }
  // )
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

const handleResponse = res => {
  if (!res.ok) {
    return res.json().then(
      error => { throw Error(error)}
    )
  } else {
    return res
  }
}

const storeAuth = params => {
  authModule.storeAuth({
    uid: params['uid'],
    client: params['client'],
    accessToken: params['access-token'],
  })
}

const prepareSignIn = res => {
  authModule.storeAuth({
    uid: res.headers.get('uid'),
    client: res.headers.get('client'),
    accessToken: res.headers.get('access-token'),
  })
  return res.json()
}

const updateUser = data => ({
  type: User.UPDATE_USER,
  data
})

const failLoadUser = () => ({
  type: User.FAIL_LOAD_USER
})
