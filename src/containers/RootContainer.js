import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import * as authActions from '../actions/auth'
import DiveLogContainer from '../containers/DiveLogContainer'
import ProfileContainer from '../containers/ProfileContainer'
import AuthContainer from './AuthContainer'
import SigninContainer from './SigninContainer'
import SignoutContainer from './SignoutContainer'

const { Header, Sider, Content, Footer } = Layout

const sidebarStyle = {
  height: '32px',
  background: '#333',
  borderRadius: '6px',
  margin: '16px'
}

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
  {
    path: '/sign_out',
    exact: true,
    label: 'Signout',
    main: SignoutContainer
  }
]

const renderHeadbar = auth => {
  const { isSignedIn } = auth
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
    </Menu>
  )
}

const renderRoutes = () => (
  <Switch>
    <Route exact path='/sign_in' component={SigninContainer} />
    <AuthContainer>
      <Switch>
        { routes.map((route, i) => (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            component={route.main}
          />
        )) }
      </Switch>
    </AuthContainer>
  </Switch>
)

class RootContainer extends React.Component {

  render() {
    return (
      <Router>
        <Layout>
          <Header className="header" style={{ height: 50, background: '#fff', padding: '0 120px' }} >
            { renderHeadbar(this.props.auth) }
          </Header>
          <Content style={{ background: '#87ceeb', padding: '10px 120px', margin: 0, minHeight: '100%' }}>
            <div style={{ padding: 10, background: '#fff' }}>
              { renderRoutes() }
            </div>
          </Content>

          <Footer style={{ textAlign: 'center', background: '#87ceeb' }}>
            DIVE LOG Created by Ant design
          </Footer>
        </Layout>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer)
