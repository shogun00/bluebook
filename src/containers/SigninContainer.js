import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import * as authActions from '../actions/auth'
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
        this.props.authActions.fetchUser(params)
      }
    })
  }

  render() {
    const { isSignedIn } = this.props.auth
    const { getFieldDecorator } = this.props.form
    return (
      isSignedIn ? (
        <Redirect to='/' />
      ) : (
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
    )
  }
}

const Signin = Form.create()(SigninContainer)

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  authActions: bindActionCreators(authActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin)
