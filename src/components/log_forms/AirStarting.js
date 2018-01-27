import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const AirStarting = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('starting')(
      <InputNumber min={0} placeholder="starting" style={{ width: '80%' }} />
    )}
    bar
  </FormItem>
)

export default AirStarting
