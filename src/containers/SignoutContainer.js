import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signout } from '../actions/user'
import { clearAuth } from '../modules/auth'

class SignoutContainer extends React.Component {

  componentWillMount() {
    clearAuth()
  }

  render() {
    return (
      <Redirect to='/sign_in' />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
)(SignoutContainer)
