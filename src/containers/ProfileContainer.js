import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)

    console.log('PROFILE_CONTAINER')
  }
  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        <h1>Profile</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(ProfileContainer)
