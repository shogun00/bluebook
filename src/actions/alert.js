import * as Alert from '../constants/Alert'

export const success = messages => ({
  type: Alert.SUCCESS,
  messages,
})

export const error = messages => ({
  type: Alert.ERROR,
  messages,
})

export const clear = () => ({
  type: Alert.CLEAR,
})
