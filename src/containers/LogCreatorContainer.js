import React from 'react'
import { connect } from 'react-redux'
import { compose, withProps, withHandlers, lifecycle } from 'recompose'
import { Form } from 'antd'
import { requestFetchLogs, requestCreateLog } from '../actions/divelog'
import LogCreator from '../components/LogCreator'
import { logParams } from '../utils/paramsConverter'

const LogCreatorContainer = ({
  getFieldDecorator,
  handleSubmit,
  nextDiveCount,
}) => (
  <LogCreator
    getFieldDecorator={getFieldDecorator}
    handleSubmit={handleSubmit}
    nextDiveCount={nextDiveCount}
  />
)

const handleSubmit = props => e => {
  e.preventDefault()
  props.form.validateFields((error, values) => {
    if (!error) {
      console.log('Received values of form: ', values)
      const params = logParams(values)
      console.log(params)
      props.postLog(params)
    }
  })
}

const mapStateToProps = state => ({
  divelogs: state.divelog,
})

const mapDispatchToProps = dispatch => ({
  postLog: params => dispatch(requestCreateLog(params)),
  fetchLogs: () => dispatch(requestFetchLogs()),
})

const newDiveCount = logs => {
  if (logs.length <= 0) {
    return 1
  } else {
    const sortedLogs = logs.slice().sort((a, b) => {
      return b.dive_count - a.dive_count
    })
    return sortedLogs[0].dive_count + 1
  }
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create(),
  withProps(({ form }) => ({
    getFieldDecorator: form.getFieldDecorator,
  })),
  withProps(({ divelogs }) => ({
    logs: divelogs.logs,
  })),
  withProps(({ logs }) => ({
    nextDiveCount: newDiveCount(logs),
  })),
  withHandlers({
    handleSubmit,
  }),
  lifecycle({
    componentWillMount() {
      this.props.fetchLogs()
    },
  })
)

export default enhance(LogCreatorContainer)
