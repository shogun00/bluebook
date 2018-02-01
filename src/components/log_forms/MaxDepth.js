import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const MaxDepth = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('maxDepth', {
      initialValue: value ? value : null,
      rules: [{ required: true, message: 'Please input max depth!' }],
    })(
      <InputNumber
        min={0}
        step={0.1}
        placeholder="最大深度"
        style={{ width: '90%' }}
      />
    )}
    m
  </FormItem>
)

export default MaxDepth
