import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const AirStarting = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('starting', {
      initialValue: value ? value : null,
    })(<InputNumber min={0} placeholder="初期残圧" style={{ width: '80%' }} />)}
    bar
  </FormItem>
)

export default AirStarting
