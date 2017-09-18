import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item

class SigninForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: 300 }}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!'}],
          })(
            <Input prefix={<Icon type='user' style={{ fontSize: 13 }} />} placeholder='Username' />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!'}],
          })(
            <Input prefix={<Icon type='lock' style={{ fontSize: 13 }} />} placeholder='password' />
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

const Signin = Form.create()(SigninForm)

export default Signin
