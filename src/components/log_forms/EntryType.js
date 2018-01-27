import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const EntryType = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('entryType', {
      initialValue: 'boat',
    })(
      <RadioGroup>
        <RadioButton value="boat">Boat</RadioButton>
        <RadioButton value="beach">Beach</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default EntryType
