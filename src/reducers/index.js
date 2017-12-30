import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import divelog from './divelog'
import alert from './alert'

const rootReducer = combineReducers({
  user,
  divelog,
  alert,
  router: routerReducer,
})

export default rootReducer
