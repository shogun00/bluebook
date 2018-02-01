import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const Instructor = ({ getFieldDecorator, value = null }) => (
  <FormItem>
    {getFieldDecorator('instructor', {
      initialValue: value ? value : null,
    })(<Input placeholder="インストラクター" style={{ width: '90%' }} />)}
  </FormItem>
)

export default Instructor
