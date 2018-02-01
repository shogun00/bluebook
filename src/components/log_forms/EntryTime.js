import React from 'react'
import moment from 'moment'
import { Form, TimePicker } from 'antd'

const FormItem = Form.Item

const EntryTime = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('entryTime', {
      initialValue: value ? moment(value) : null,
      rules: [{ required: true, message: 'Please input start time!' }],
    })(
      <TimePicker
        format="HH:mm"
        style={{ padding: '0 5px', width: '100%' }}
        placeholder="エントリー開始"
      />
    )}
  </FormItem>
)

export default EntryTime
