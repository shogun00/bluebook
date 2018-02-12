import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const Visibility = ({ getFieldDecorator, value = null }) => (
  <FormItem label="透明度">
    {getFieldDecorator('visibility', {
      initialValue: value ? value : null,
    })(
      <InputNumber
        min={0}
        step={0.1}
        placeholder="透明度"
        style={{ width: '90%' }}
      />
    )}
    m
  </FormItem>
)

export default Visibility
