import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const DiveStyle = ({ getFieldDecorator, value = null }) => (
  <FormItem label="ダイブスタイル">
    {getFieldDecorator('diveStyle', {
      initialValue: value ? value : 'scuba',
      rules: [{ required: true, message: 'Please input dive style!' }],
    })(
      <RadioGroup>
        <RadioButton value="scuba">スクーバダイビング</RadioButton>
        <RadioButton value="free">フリーダイビング</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default DiveStyle
