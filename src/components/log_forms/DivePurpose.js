import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const DivePurpose = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('divePurpose', {
      initialValue: 'fun',
    })(
      <RadioGroup>
        <RadioButton value="fun">Fun Diving</RadioButton>
        <RadioButton value="free">Free Diving</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default DivePurpose
