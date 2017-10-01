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
  localStorage.setItem('uid', res.headers.get('uid'))
  localStorage.setItem('client', res.headers.get('client'))
  localStorage.setItem('access-token', res.headers.get('access-token'))
  return res.json()
}
