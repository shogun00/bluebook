import * as Alert from '../constants/Alert'

export const success = message => ({
  type: Alert.SUCCESS,
  message
})

export const error = message => ({
  type: Alert.ERROR,
  message
})

export const clear = () => ({
  type: Alert.CLEAR
})
