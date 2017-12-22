import * as Alert from '../constants/Alert'

const initialState = {}

const alert = (state = initialState, action) => {
  switch (action.type) {
    case Alert.SUCCESS:
      return Object.assign({}, state, { type: 'success', messages: action.messages })
    case Alert.ERROR:
      return Object.assign({}, state, { type: 'error', messages: action.messages })
    case Alert.CLEAR:
      return initialState
    default:
      return state
  }
}

export default alert
