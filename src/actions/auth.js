import * as authModule from '../modules/auth'

export const fetchUser = params => dispatch => {
  dispatch(requestFetchUser)
  const body = JSON.stringify(params)
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body
  }
  fetch(`http://localhost:3000/auth/sign_in`, options).then(
    handleResponse
  ).then(
    prepareSignIn
  ).then(
    data => { dispatch(signIn(data.data)) }
  ).catch(
    error => { dispatch(failSignIn(error.message)) }
  )
}

export const signout = () =>{
  authModule.clearAuth()
  return {
    type: 'SIGN_OUT'
  }
}

export const loadUserData = () => dispatch => {
  dispatch(requestFetchUser)
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'client': authModule.getClient(),
      'uid': authModule.getUid(),
      'access-token': authModule.getAccessToken()
    }
  }
  fetch(`http://localhost:3000/api/auth/user`, options).then(
    res => {
      return res.json()
    }
  ).then(
    data => { dispatch(updateUser(data)) }
  ).catch(
    error => {
      console.log(error.message)
      failLoadUser()
    }
  )
}

const requestFetchUser = () => ({
  type: 'REQUEST_FETCH_USER'
})

const signIn = data => ({
  type: 'SIGN_IN',
  data
})

const failSignIn = errors => ({
  type: 'FAIL_SIGNIN',
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

const prepareSignIn = res => {
  authModule.storeAuth({
    uid: res.headers.get('uid'),
    client: res.headers.get('client'),
    accessToken: res.headers.get('access-token'),
  })
  return res.json()
}

const updateUser = data => ({
  type: 'UPDATE_USER',
  data
})

const failLoadUser = () => ({
  type: 'FAIL_LOAD_USER'
})
