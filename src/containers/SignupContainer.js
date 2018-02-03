import React from 'react'
import { connect } from 'react-redux'
import { requestSignup } from '../actions/user'
import Signup from '../components/Signup'

const SignupContainer = props => <Signup {...props} />

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  signup: params => dispatch(requestSignup(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
