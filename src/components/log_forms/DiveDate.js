import React from 'react'
import moment from 'moment'
import { Form, DatePicker } from 'antd'

const FormItem = Form.Item

const DiveDate = ({ getFieldDecorator, value = null }) => (
  <FormItem label="ダイビング日付">
    {getFieldDecorator('date', {
      initialValue: value ? moment(value) : null,
      rules: [{ required: true, message: 'Please input date!' }],
    })(<DatePicker placeholder="ダイビング日付" style={{ width: '100%' }} />)}
  </FormItem>
)

export default DiveDate
