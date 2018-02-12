import React from 'react'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import Divelog from '../components/Divelog'
import { requestFetchLogs } from '../actions/divelog'

const DiveLogContainer = props => {
  const { logs } = props.divelog
  if (logs.length > 0) {
    return (
      <div className="divelogs">
        {logs.map((log, i) => (
          <div key={i} className="log-card">
            <Divelog log={log} />
          </div>
        ))}
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
