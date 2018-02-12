import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const Weight = ({ getFieldDecorator, value = null }) => (
  <FormItem label="ウェイト">
    {getFieldDecorator('weight', {
      initialValue: value ? value : null,
    })(
      <InputNumber min={0} placeholder="ウェイト" style={{ width: '80%' }} />
    )}kg
  </FormItem>
)

export default Weight
