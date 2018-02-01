import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const Publication = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('publication', {
      initialValue: value ? value : 'open',
    })(
      <RadioGroup>
        <RadioButton value="open">公開</RadioButton>
        <RadioButton value="close">非公開</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default Publication
