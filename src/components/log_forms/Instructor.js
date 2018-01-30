import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const Instructor = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('instructor')(
      <Input placeholder="インストラクター" style={{ width: '90%' }} />
    )}
  </FormItem>
)

export default Instructor
