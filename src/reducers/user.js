import * as User from '../constants/User'

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

const user = (state = initialState, action) => {
  switch (action.type) {
    case User.REQUEST_FETCH_USER:
      return Object.assign({}, state, {
        isFetching: true,
        error: undefined
      })
    case User.SIGN_IN:
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
    case User.FAIL_SIGNIN:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.errors
      })
    case User.UPDATE_USER:
      return updateUser(state, action)
    case User.FAIL_LOAD_USER:
      return initialState
    case User.SIGN_OUT:
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

export default user
