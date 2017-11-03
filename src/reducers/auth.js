const initialState = {
  isPrepared: false,
  isSignedIn: false,
  id: undefined,
  name: undefined,
  email: undefined,
  isFetching: false,
  isLoadedData: false,
  error: undefined
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_FETCH_USER':
      return Object.assign({}, state, {
        isFetching: true,
        error: undefined
      })
    case 'SIGN_IN':
      const user = action.data
      return Object.assign({}, state, {
        isPrepared: true,
        isSignedIn: true,
        id: user.id,
        name: user.name,
        email: user.email,
        isFetching: false,
        isLoadedData: true,
        error: undefined
      })
    case 'FAIL_SIGNIN':
      return Object.assign({}, state, {
        isFetching: false,
        error: action.errors
      })
    case 'UPDATE_USER':
      return updateUser(state, action)
    case 'FAIL_LOAD_USER':
      return initialState
    case 'SIGN_OUT':
      return initialState
    default:
      return state
  }
}

const updateUser = (state, action) => {
  const user = action.data
  const newState = {
    isPrepared: true,
    isSignedIn: true,
    id: user.id,
    name: user.name,
    email: user.email,
    isFetching: false,
    isLoadedData: true,
    error: undefined
  }
  return Object.assign({}, state, newState)
}

export default auth
