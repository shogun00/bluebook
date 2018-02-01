import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const DivePurpose = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('divePurpose', {
      initialValue: value ? value : 'scuba',
    })(
      <RadioGroup>
        <RadioButton value="scuba">スクーバダイビング</RadioButton>
        <RadioButton value="free">フリーダイビング</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default DivePurpose
