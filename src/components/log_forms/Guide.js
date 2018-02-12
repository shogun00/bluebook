import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item

const Guide = ({ getFieldDecorator, value = null }) => (
  <FormItem label="ガイド">
    {getFieldDecorator('guide', {
      initialValue: value ? value : null,
    })(<Input placeholder="ガイド" style={{ width: '90%' }} />)}
  </FormItem>
)

export default Guide
