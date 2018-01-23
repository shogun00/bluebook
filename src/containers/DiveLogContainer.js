import React from 'react'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import Divelog from '../components/Divelog'
import { requestFetchLogs } from '../actions/divelog'

// const Url = 'http://localhost:3001/divelogs'

const DiveLogContainer = props => {
  const { logs } = props.divelog
  if (logs.length > 0) {
    return (
      <div style={{ width: '100%', margin: '0 auto' }}>
        <ul style={{ listStyle: 'none' }}>
          {logs.map((log, i) => (
            <li key={i} style={{ padding: '10px' }}>
              <Divelog log={log} />
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    return <p>No log</p>
  }
}

const mapStateToProps = state => ({
  divelog: state.divelog,
})

const mapDispatchToProps = dispatch => ({
  requestFetchLogs: () => dispatch(requestFetchLogs()),
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      console.log('DIVELOG CONTAINER')
      this.props.requestFetchLogs()
    },
  })
)

export default enhance(DiveLogContainer)
