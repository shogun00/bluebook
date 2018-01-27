import React from 'react'
import { Form, DatePicker } from 'antd'

const FormItem = Form.Item

const DiveDate = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('date', {
      rules: [{ required: true, message: 'Please input date!' }],
    })(<DatePicker placeholder="ダイビング日付" style={{ width: '100%' }} />)}
  </FormItem>
)

export default DiveDate
