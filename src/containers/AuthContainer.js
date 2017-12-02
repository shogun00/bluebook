import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Spin } from 'antd'

import * as userActions from '../actions/user'
import * as authModule from '../modules/auth'

class AuthContainer extends React.Component {

  state = {
    loading: true
  }

  componentWillMount() {
    this.userWillTransfer(this.props, this.state)
  }

  componentWillUpdate(nextProps, nextState) {
    this.userWillTransfer(nextProps, nextState)
  }

  userWillTransfer = (props, state) => {
    if (!authModule.exsitsAuth()) {
      this.setState({ loading: false })
      props.userActions.signout()
    } else {
      const { isLoadedData } = props.user
      const { loadUserData } = props.userActions
      if (!isLoadedData) {
        if (!state.loading) {
          this.setState({ loading: true })
        }
        loadUserData()
      } else {
        if (state.loading) {
          this.setState({ loading: false})
        }
      }
    }
  }

  render() {
    const { isSignedIn } = this.props.user
    return (
      this.state.loading ? (
        <Spin />
      ) : (
        isSignedIn ? (
          <Route children={this.props.children} />
        ) : (
          <Redirect to='/sign_in' />
        )
      )
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer)
