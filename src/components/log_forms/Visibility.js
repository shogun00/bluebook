import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const Visibility = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('visibility')(
      <InputNumber
        min={0}
        step={0.1}
        placeholder="visibility"
        style={{ width: '90%' }}
      />
    )}
    m
  </FormItem>
)

export default Visibility
