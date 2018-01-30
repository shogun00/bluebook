import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const Buddy = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('buddy')(
      <Input placeholder="バディ" style={{ width: '90%' }} />
    )}
  </FormItem>
)

export default Buddy
