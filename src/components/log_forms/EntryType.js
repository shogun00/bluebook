import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const EntryType = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('entryType', {
      initialValue: value ? value : 'boat',
    })(
      <RadioGroup>
        <RadioButton value="boat">ボートエントリー</RadioButton>
        <RadioButton value="beach">ビーチエントリー</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default EntryType
