import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const Wave = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('wave')(
      <RadioGroup>
        <RadioButton value="hard">高波</RadioButton>
        <RadioButton value="middle">中波</RadioButton>
        <RadioButton value="low">低波</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default Wave
