import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const Publication = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('publication', {
      initialValue: 'public',
    })(
      <RadioGroup>
        <RadioButton value="public">Public</RadioButton>
        <RadioButton value="private">Private</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default Publication
