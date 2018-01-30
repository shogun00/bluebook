import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const Location = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('location', {
      rules: [{ required: true, message: 'Please input location!' }],
    })(<Input placeholder="場所" style={{ width: '100%' }} />)}
  </FormItem>
)

export default Location
