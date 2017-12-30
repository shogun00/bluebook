import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { existsAuth } from '../modules/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      existsAuth() && rest.user.isSignedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/sign_in', state: { from: props.location } }}
        />
      )
    }
  />
)

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(PrivateRoute)
