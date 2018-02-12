import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const { TextArea } = Input

const Note = ({ getFieldDecorator, value = null }) => (
  <FormItem label="メモ">
    {getFieldDecorator('note', {
      initialValue: value ? value : null,
    })(<TextArea rows={4} placeholder="メモ" />)}
  </FormItem>
)

export default Note
