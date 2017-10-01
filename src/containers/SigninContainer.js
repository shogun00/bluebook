import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

class SigninContainer extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const params = {
          email: values['email'],
          password: values['password']
        }
        this.props.onSubmit(params)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: 300, margin: 'auto' }}>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!'}],
          })(
            <Input placeholder='Email' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!'}],
          })(
            <Input placeholder='password' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a href='' style={{ float: 'right' }}>Forgot password</a>
          <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
            Log in
          </Button>
          Or <a href=''>register now!</a>
        </FormItem>
      </Form>
    )
  }
}

const Signin = Form.create()(SigninContainer)

export default Signin
