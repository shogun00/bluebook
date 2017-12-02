import * as Alert from '../constants/Alert'

const initialState = {}

const alert = (state = initialState, action) => {
  switch (action.type) {
    case Alert.SUCCESS:
      return Object.assign({}, state, { type: 'success', message: action.message })
    case Alert.ERROR:
      return Object.assign({}, state, { type: 'error', message: action.message })
    case Alert.CLEAR:
      return initialState
    default:
      return state
  }
}

export default alert
