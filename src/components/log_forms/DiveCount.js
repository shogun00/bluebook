import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const DiveCount = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('diveCount', {
      rules: [{ required: true, message: 'Please input dive count!' }],
    })(
      <InputNumber
        min={0}
        step={1}
        placeholder="dive count"
        style={{ width: '100%' }}
      />
    )}
  </FormItem>
)

export default DiveCount