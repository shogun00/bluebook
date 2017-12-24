import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Form } from 'antd'
import { requestSignin } from '../actions/user'

import Signin from '../components/Signin'

const SigninContainer = props => (
  <Signin {...props} />
)

const SigninForm = Form.create()(SigninContainer)

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {
  requestSignin
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export default enhance(SigninForm)
