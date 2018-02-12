import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const Publication = ({ getFieldDecorator, value = null }) => (
  <FormItem label="公開">
    {getFieldDecorator('publication', {
      initialValue: value ? value : 'published',
    })(
      <RadioGroup>
        <RadioButton value="published">公開</RadioButton>
        <RadioButton value="unpublished">非公開</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default Publication
