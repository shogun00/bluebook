import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const Weather = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('weather', {
      initialValue: 'sunny',
    })(
      <RadioGroup>
        <RadioButton value="sunny">晴れ</RadioButton>
        <RadioButton value="cloudy">曇り</RadioButton>
        <RadioButton value="rainy">雨</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default Weather
