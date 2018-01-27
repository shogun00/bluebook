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
        <RadioButton value="sunny">Sunny</RadioButton>
        <RadioButton value="cloudy">Cloudy</RadioButton>
        <RadioButton value="rainy">Rainy</RadioButton>
      </RadioGroup>
    )}
  </FormItem>
)

export default Weather
