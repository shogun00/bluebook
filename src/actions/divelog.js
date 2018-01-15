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

const fetchLogs = data => ({
  type: Divelog.FETCH_LOGS,
  payload: { divelogs: data },
})
