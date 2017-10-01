const initialState = {
  auth: {
    isPrepared: false,
    isSignedIn: false,
    user: {
      id: undefined,
      name: undefined,
      email: undefined
    },
    isFetching: false,
    error: undefined
  }
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_FETCH_USER':
      return Object.assign({}, state, {
        auth: {
          isFetching: true,
          error: undefined
        }
      })
    case 'SIGN_IN':
      const data = action.data
      return Object.assign({}, state, {
        auth: {
          isPrepared: true,
          isSignedIn: true,
          user: {
            id: data.id,
            name: data.name,
            email: data.email
          },
          isFetching: false,
          error: undefined
        }
      })
    case 'FAIL_SIGNIN':
      return Object.assign({}, state, {
        auth: {
          isFetching: false,
          error: action.errors
        }
      })
    default:
      return state
  }
}

export default auth
