import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const AirEnding = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('ending')(
      <InputNumber min={0} placeholder="最終残圧" style={{ width: '80%' }} />
    )}
    bar
  </FormItem>
)

export default AirEnding
