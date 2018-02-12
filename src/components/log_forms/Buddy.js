import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const Buddy = ({ getFieldDecorator, value = null }) => (
  <FormItem label="バディ">
    {getFieldDecorator('buddy', {
      initialValue: value ? value : null,
    })(<Input placeholder="バディ" style={{ width: '90%' }} />)}
  </FormItem>
)

export default Buddy
