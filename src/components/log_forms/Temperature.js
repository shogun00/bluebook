import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const Temperature = ({ getFieldDecorator, value = null }) => (
  <FormItem label="気温">
    {getFieldDecorator('temperature', {
      initialValue: value ? value : null,
    })(<InputNumber placeholder="気温" style={{ width: '80%' }} />)}℃
  </FormItem>
)

export default Temperature
