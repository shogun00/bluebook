import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const SuitThickness = ({ getFieldDecorator, value = null }) => (
  <FormItem label="スーツ厚さ">
    {getFieldDecorator('suitThickness', {
      initialValue: value ? value : null,
    })(
      <InputNumber
        min={0}
        step={1}
        placeholder="スーツ厚さ"
        style={{ width: '80%' }}
      />
    )}mm
  </FormItem>
)

export default SuitThickness
