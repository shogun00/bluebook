import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'

const ProfileContainer = () => (
  <div style={{ width: '80%', margin: '0 auto' }}>
    <h1>Profile</h1>
  </div>
)

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps
)(ProfileContainer)

