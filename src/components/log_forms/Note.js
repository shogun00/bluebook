import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const { TextArea } = Input

const Note = ({ getFieldDecorator }) => (
  <FormItem>
    {getFieldDecorator('note')(<TextArea rows={4} placeholder="note" />)}
  </FormItem>
)

export default Note
