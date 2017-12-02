import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { clear } from './actions/alert'
import RootContainer from './containers/RootContainer'

class App extends React.Component {

  constructor(props) {
    super(props)
    const { history, dispatch } = this.props
    history.listen((location, action) => {
      dispatch(clear())
    })
  }

  render() {
    return (
      <RootContainer />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  clearAlert: dispatch(clear())
})

export default withRouter(connect(
  mapStateToProps
)(App))
