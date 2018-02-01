import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const Spot = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('spot', {
      initialValue: value ? value : null,
      rules: [{ required: true, message: 'Please input spot!' }],
    })(<Input placeholder="スポット" style={{ width: '100%' }} />)}
  </FormItem>
)

export default Spot
