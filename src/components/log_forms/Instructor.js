import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const Instructor = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('instructor')(
      <Input placeholder="Instructor name" style={{ width: '90%' }} />
    )}
  </FormItem>
)

export default Instructor
