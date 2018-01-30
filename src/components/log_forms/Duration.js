import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const Duration = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('duration', {
      rules: [{ required: true, message: 'Please input duration time!' }],
    })(<InputNumber min={0} placeholder="潜水時間" style={{ width: '90%' }} />)}
    min
  </FormItem>
)

export default Duration
