import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const Wave = ({ getFieldDecorator, value = null }) => (
  <FormItem label="波">
    {getFieldDecorator('wave', {
      initialValue: value ? value : null,
    })(
      <RadioGroup>
        <RadioButton value="big">高波</RadioButton>
        <RadioButton value="middle">中波</RadioButton>
        <RadioButton value="small">低波</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default Wave
