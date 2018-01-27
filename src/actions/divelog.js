import { push } from 'react-router-redux'
import client from '../utils/client'

import * as Divelog from '../constants/Divelog'

export const requestFetchLogs = params => dispatch => {
  client
    .get(`/api/v1/user/logs`)
    .then(response => dispatch(fetchLogs(response.data)))
    .catch(error => {
      console.log('Fail fetch divelogs')
      console.log(error.message)
    })
}

export const requestCreateLog = params => dispatch => {
  client
    .post('/api/v1/user/logs', params)
    .then(response => {
      dispatch(successCreateLog())
      dispatch(push('/'))
    })
    .catch(error => {
      console.log('Fail create log')
      console.log(error.message)
      console.log(error.response)
      dispatch(failCreateLog)
    })
}

const fetchLogs = data => ({
  type: Divelog.FETCH_LOGS,
  payload: { divelogs: data },
})

const successCreateLog = () => ({
  type: Divelog.SUCCESS_CREATE_LOG,
})

const failCreateLog = () => ({
  type: Divelog.FAIL_CREATE_LOG,
})
