import React from 'react'
import { connect } from 'react-redux'
import { requestSignin } from '../actions/user'
import Signin from '../components/Signin'

const SigninContainer = props => <Signin {...props} />

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  signin: params => dispatch(requestSignin(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer)
