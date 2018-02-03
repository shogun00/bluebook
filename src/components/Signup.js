import React from 'react'
import { compose, withProps, withHandlers } from 'recompose'
import { Redirect, Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'

const FormItem = Form.Item

const Signup = ({ isSignedIn, getFieldDecorator, handleSubmit }) => {
  return isSignedIn ? (
    <Redirect to="/" />
  ) : (
    <Form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: 'auto' }}>
      <FormItem>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input your name!' }],
        })(<Input placeholder="Name" />)}
      </FormItem>
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
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Sign up
        </Button>
        Or <Link to="/sign_in">back</Link>
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
        name: values['name'],
        email: values['email'],
        password: values['password'],
      }
      props.signup(params)
    }
  })
}

const enhance = compose(
  Form.create(),
  withProps(({ form }) => ({
    getFieldDecorator: form.getFieldDecorator,
  })),
  withProps(({ user }) => ({
    isSignedIn: user.isSignedIn,
  })),
  withHandlers({
    handleSubmit,
  })
)
export default enhance(Signup)
