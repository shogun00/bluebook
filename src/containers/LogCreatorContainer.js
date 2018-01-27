import React from 'react'
import { connect } from 'react-redux'
import { compose, withProps, withHandlers } from 'recompose'
import { Form } from 'antd'
import { requestCreateLog } from '../actions/divelog'
import LogCreator from '../components/LogCreator'

const LogCreatorContainer = ({ getFieldDecorator, handleSubmit }) => (
  <LogCreator
    getFieldDecorator={getFieldDecorator}
    handleSubmit={handleSubmit}
  />
)
const handleSubmit = props => e => {
  e.preventDefault()
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
      props.postLog(params)
    }
  })
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  postLog: params => dispatch(requestCreateLog(params)),
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create(),
  withProps(({ form }) => ({
    getFieldDecorator: form.getFieldDecorator,
  })),
  withHandlers({
    handleSubmit,
  })
)

export default enhance(LogCreatorContainer)
