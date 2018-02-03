import * as User from '../constants/User'

const initialState = {
  isPrepared: false,
  isSignedIn: false,
  isFetched: false,
  id: undefined,
  name: undefined,
}

const signin = (state, action) => {
  const user = action.data
  const newState = {
    isPrepared: true,
    isSignedIn: true,
    isFetched: true,
    id: user.id,
    name: user.name,
  }
  return Object.assign({}, state, newState)
}

const signout = state => {
  const newState = {
    isPrepared: true,
    isSignedIn: false,
    isFetched: false,
    id: undefined,
    name: undefined,
  }
  return Object.assign({}, state, newState)
}

const signup = (state, action) => {
  const user = action.data
  const newState = {
    isPrepared: true,
    isSignedIn: true,
    isFetched: true,
    id: user.id,
    name: user.name,
  }
  return Object.assign({}, state, newState)
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case User.SIGN_UP:
      return signup(state, action)
    case User.SIGN_IN:
      console.log('LOGED IN')
      return signin(state, action)
    case User.FAIL_SIGNIN:
      console.log('REDUCER_FAIL_SIGNIN')
      return signout()
    case User.FETCH:
      return signin(state, action)
    case User.FAIL_FETCH:
      return signout()
    case User.SIGN_OUT:
      return signout()
    default:
      return state
  }
}

export default user
