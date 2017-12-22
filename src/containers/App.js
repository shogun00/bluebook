import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Icon, Alert, Spin } from 'antd'

import { requestFetch } from '../actions/user'
import { existsAuth } from '../modules/auth'
import { clear } from '../actions/alert'
import PrivateRoute from './PrivateRoute'
import DiveLogContainer from './DiveLogContainer'
import ProfileContainer from './ProfileContainer'
import SigninContainer from './SigninContainer'
import SignoutContainer from './SignoutContainer'

const { Header, Sider, Content, Footer } = Layout

const routes = [
  {
    path: '/',
    icon: 'home',
    exact: true,
    label: 'Home',
    main: DiveLogContainer
  },
  {
    path: '/profile',
    icon: 'user',
    exact: true,
    label: 'Profile',
    main: ProfileContainer
  },
]

const renderHeadbar = user => {
  const { isSignedIn } = user
  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['0']} style={{ lineHeight: '50px' }} >
      { isSignedIn && routes.map((route, index) => (
        <Menu.Item key={index}>
          <Link to={route.path}>
            <Icon type={route.icon} style={{ fontSize: 24 }} />
            <span className="nav-text" style={{ fontSize: 16 }} >{route.label}</span>
          </Link>
        </Menu.Item>
        ))
      }
      { isSignedIn &&
        <Menu.Item>
          <Link to='/sign_out'>
            <span className="nav-text" style={{ fontSize: 16 }} >Sign Out</span>
          </Link>
        </Menu.Item>
      }
    </Menu>
  )
}

const renderAlert = alert => {
  console.log(alert.messages)
  if (alert.messages && alert.messages.length > 0) {
    return (
      <div style={{ padding: 5 }}>
        {alert.messages.map((message, i) => (
          <Alert key={i} message={message} type={alert.type} showIcon />
        ))}
      </div>
    )
  }
}

class App extends React.Component {

  componentWillMount() {
    console.log('before APP mount')
    this.props.requestFetch()
  }

  componentWillUpdate(nextProps, nextState) {
    nextProps.history.listen((location, action) => {
      nextProps.clear()
    })
  }

  render() {
    const { alert, user } = this.props
    return (
      user.isPrepared ? (
        <Layout>
          <Header className="header" style={{ height: 50, background: '#fff', padding: '0 120px' }} >
            { renderHeadbar(user) }
          </Header>
          <Content style={{ background: '#87ceeb', padding: '10px 120px', margin: 0, minHeight: '100%' }}>
            <div style={{ padding: 10, background: '#fff' }}>
              { renderAlert(alert) }

              <Switch>
                <PrivateRoute exact path='/' component={DiveLogContainer} />
                <PrivateRoute exact path='/profile' component={ProfileContainer} />
                <PrivateRoute path='/sign_out' component={SignoutContainer} />
                <Route path='/sign_in' component={SigninContainer} />
              </Switch>

            </div>
          </Content>

          <Footer style={{ textAlign: 'center', background: '#87ceeb' }}>
            DIVE LOG Created by Ant design
          </Footer>
        </Layout>
      ) : (
        <Spin />
      )
    )
  }
}

const mapStateToProps = state => ({
  alert: state.alert,
  user: state.user
})

const mapDispatchToProps = {
  clear,
  requestFetch
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
