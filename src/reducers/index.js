import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import alert from './alert'

const rootReducer = combineReducers({
  user,
  alert,
  router: routerReducer
})

export default rootReducer
