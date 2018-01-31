import React from 'react'
import { connect } from 'react-redux'
import { compose, withProps, withHandlers } from 'recompose'
import { Form } from 'antd'
import { requestUpdateLog } from '../actions/divelog'
import LogEditor from '../components/LogEditor'

const LogEditorContainer = ({ getFieldDecorator, handleSubmit, log }) => (
  <LogEditor
    getFieldDecorator={getFieldDecorator}
    handleSubmit={handleSubmit}
    log={log}
  />
)

const handleSubmit = props => e => {
  e.preventDefault()
  const { id } = props.log
  props.form.validateFields((error, values) => {
    if (!error) {
      console.log('Received values of form: ', values)
      const params = {
        dive_purpose: values['divePurpose'],
        dive_count: values['diveCount'],
        date: values['date'].format('YYYY-MM-DD'),
        entry_time: values['entryTime'].format('HH:mm'),
        location: values['location'],
        entry_type: values['entryType'],
        max_depth: values['maxDepth'],
        duration: values['duration'],
        note: values['note'],
        publication: values['publication'],
      }
      console.log(params)
      props.updateLog(id, params)
    }
  })
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  updateLog: (id, params) => dispatch(requestUpdateLog(id, params)),
  // fetchLogs: () => dispatch(requestFetchLogs()),
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create(),
  withProps(({ form }) => ({
    getFieldDecorator: form.getFieldDecorator,
  })),
  withProps(({ location: { state } }) => ({
    log: state.log,
  })),
  withHandlers({
    handleSubmit,
  })
)

export default enhance(LogEditorContainer)
