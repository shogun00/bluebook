import React from 'react'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { requestSignout } from '../actions/user'

const SignoutContainer = () => (
  <Redirect to='/sign_in' />
)

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  requestSignout
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentWillMount() {
      this.props.requestSignout()
    }
  })
)

export default enhance(SignoutContainer)
