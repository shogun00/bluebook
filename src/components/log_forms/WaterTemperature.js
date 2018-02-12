import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const WaterTemperature = ({ getFieldDecorator, value = null }) => (
  <FormItem label="水温">
    {getFieldDecorator('WaterTemperature', {
      initialValue: value ? value : null,
    })(<InputNumber placeholder="水温" style={{ width: '80%' }} />)}℃
  </FormItem>
)

export default WaterTemperature
