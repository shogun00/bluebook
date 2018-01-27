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
        <RadioButton value="steel">Steel</RadioButton>
        <RadioButton value="alminium">Alminium</RadioButton>
        <RadioButton value="another">Another</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default TunkMaterial
