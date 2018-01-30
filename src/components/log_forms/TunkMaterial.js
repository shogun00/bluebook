import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const TunkMaterial = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('tunkMaterial', {
      initialValue: 'steel',
    })(
      <RadioGroup>
        <RadioButton value="steel">スチール</RadioButton>
        <RadioButton value="alminium">アルミニウム</RadioButton>
        <RadioButton value="another">その他</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default TunkMaterial
