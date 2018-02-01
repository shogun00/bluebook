import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const TankMaterial = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('tankMaterial', {
      initialValue: value ? value : 'steel',
    })(
      <RadioGroup>
        <RadioButton value="steel">スチール</RadioButton>
        <RadioButton value="aluminum">アルミニウム</RadioButton>
        <RadioButton value="another">その他</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default TankMaterial
