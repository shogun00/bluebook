import React from 'react'
import { compose, withHandlers } from 'recompose'
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

const Signin = props => {
  const { isSignedIn } = props.user
  const { getFieldDecorator } = props.form

  return isSignedIn ? (
    <Redirect to="/" />
  ) : (
    <Form
      onSubmit={props.handleSubmit}
      style={{ maxWidth: 300, margin: 'auto' }}
    >
      <FormItem>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your email!' }],
        })(<Input placeholder="Email" />)}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your password!' }],
        })(<Input type="password" placeholder="password" />)}
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)}
        <a href="" style={{ float: 'right' }}>
          Forgot password
        </a>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Log in
        </Button>
        Or <a href="">register now!</a>
      </FormItem>
    </Form>
  )
}

const handleSubmit = props => e => {
  e.preventDefault()
  props.form.validateFields((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values)
      const params = {
        email: values['email'],
        password: values['password'],
      }
      props.requestSignin(params)
    }
  })
}

const enhance = compose(withHandlers({ handleSubmit }))

export default enhance(Signin)
