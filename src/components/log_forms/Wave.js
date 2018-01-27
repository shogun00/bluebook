import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const Wave = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('wave')(
      <RadioGroup>
        <RadioButton value="hard">Hard</RadioButton>
        <RadioButton value="middle">Middle</RadioButton>
        <RadioButton value="low">Low</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default Wave
