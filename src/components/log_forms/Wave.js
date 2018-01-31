import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const Wave = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('wave', {
      initialValue: value ? value : null,
    })(
      <RadioGroup>
        <RadioButton value="hard">高波</RadioButton>
        <RadioButton value="middle">中波</RadioButton>
        <RadioButton value="low">低波</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default Wave
