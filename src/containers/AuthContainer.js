import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as authModule from '../modules/auth'

class AuthContainer extends React.Component {

  componentWillMount() {
    this.userWillTransfer(this.props)
  }

  componentWillUpdate(nextProps) {
    this.userWillTransfer(nextProps)
  }

  userWillTransfer = props => {
    if (!authModule.exsitsAuth()) {
      props.authActions.signout()
    } else {
      const { isLoadedData } = props.auth
      const { loadUserData } = props.authActions
      if (!isLoadedData) {
        loadUserData()
      }
    }
  }

  render() {
    const { isSignedIn } = this.props.auth
    return (
      isSignedIn ? (
        <Route children={this.props.children} />
      ) : (
        <Redirect to='/sign_in' />
      )
    )
  }
}

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
)(AuthContainer)
