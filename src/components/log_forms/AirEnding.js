import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const AirEnding = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('ending', {
      initialValue: value ? value : null,
    })(<InputNumber min={0} placeholder="最終残圧" style={{ width: '80%' }} />)}
    bar
  </FormItem>
)

export default AirEnding
