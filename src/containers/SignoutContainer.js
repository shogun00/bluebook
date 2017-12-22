import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { requestSignout } from '../actions/user'

class SignoutContainer extends React.Component {

  componentWillMount() {
    this.props.requestSignout()
  }

  render() {
    return (
      <Redirect to='/sign_in' />
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  requestSignout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignoutContainer)
