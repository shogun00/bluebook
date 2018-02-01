import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const DiveCount = ({ getFieldDecorator, nextDiveCount, value }) => (
  <FormItem>
    {getFieldDecorator('diveCount', {
      initialValue: nextDiveCount ? nextDiveCount : value,
      rules: [{ required: true, message: 'Please input dive count!' }],
    })(
      <InputNumber
        min={0}
        step={1}
        placeholder="ダイビング本数"
        style={{ width: '50%' }}
      />
    )}
    本目
  </FormItem>
)

export default DiveCount
