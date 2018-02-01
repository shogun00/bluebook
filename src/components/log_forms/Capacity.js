import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const Capacity = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('capacity', {
      initialValue: value ? value : null,
    })(<InputNumber min={0} placeholder="capacity" style={{ width: '90%' }} />)}
    L
  </FormItem>
)

export default Capacity
