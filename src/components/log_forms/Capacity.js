import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const Capacity = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('capacity')(
      <InputNumber min={0} placeholder="capacity" style={{ width: '90%' }} />
    )}
    L
  </FormItem>
)

export default Capacity
