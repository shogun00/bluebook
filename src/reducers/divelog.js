import * as Divelog from '../constants/Divelog'

const initialState = {
  logs: [],
}

const divelogs = (state = initialState, action) => {
  switch (action.type) {
    case Divelog.FETCH_LOGS:
      return Object.assign({}, state, { logs: action.payload.divelogs })
    case Divelog.SUCCESS_CREATE_LOG:
      return { ...state }
    default:
      return state
  }
}

export default divelogs
