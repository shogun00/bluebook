import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const SuitType = ({ getFieldDecorator, value = null }) => (
  <FormItem label="スーツタイプ">
    {getFieldDecorator('suitType', {
      initialValue: value ? value : 'swim',
    })(
      <RadioGroup>
        <RadioButton value="swim">水着</RadioButton>
        <RadioButton value="wet">ウェットスーツ</RadioButton>
        <RadioButton value="dry">ドライスーツ</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default SuitType
