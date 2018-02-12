import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const EntryStyle = ({ getFieldDecorator, value = null }) => (
  <FormItem label="エントリー">
    {getFieldDecorator('entryStyle', {
      initialValue: value ? value : 'boat',
      rules: [{ required: true, message: 'Please input entry style!' }],
    })(
      <RadioGroup>
        <RadioButton value="boat">ボートエントリー</RadioButton>
        <RadioButton value="beach">ビーチエントリー</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default EntryStyle
