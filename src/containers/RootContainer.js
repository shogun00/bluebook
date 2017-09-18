import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import Profile from '../components/Profile'
import DiveLogs from '../components/DiveLogs'
import Signin from './SigninContainer'

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
    main: DiveLogs
  },
  {
    path: '/profile',
    icon: 'user',
    exact: true,
    label: 'Profile',
    main: Profile
  },
  {
    path: '/signin',
    icon: 'user',
    exact: true,
    label: 'signin',
    main: Signin
  }
]

class RootContainer extends React.Component {

  render() {
    return (
      <Router>
        <Layout>
          <Header className="header" style={{ height: 50, background: '#fff', padding: '0 120px' }} >
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['0']} style={{ lineHeight: '50px' }} >
              { routes.map((route, index) => (
                <Menu.Item key={index}>
                  <Link to={route.path}>
                    <Icon type={route.icon} style={{ fontSize: 24 }} />
                    <span className="nav-text" style={{ fontSize: 16 }} >{route.label}</span>
                  </Link>
                </Menu.Item>
              )) }
            </Menu>
          </Header>
          <Layout style={{ padding: '10px 120px', background: '#87ceeb' }} >
            <Sider width={300} style={ { background: '#fff', height: 300 }} >
            </Sider>
            <Layout style={{ padding: '0 10px 10px', background: '#87ceeb' }}>
              <Content style={{ background: '#fff', padding: 10, margin: 0 }}>
                <div style={{ background: '#fff', minHeight: '100%' }}>
                  { routes.map((route, i) => (
                    <Route
                      key={i}
                      exact={route.exact}
                      path={route.path}
                      component={route.main}
                    />
                  )) }
                </div>
              </Content>

              <Footer style={{ textAlign: 'center' }}>
                DIVE LOG Created by Ant design
              </Footer>
            </Layout>
            <Sider width={300} style={ { background: '#fff', height: 300 }} >
            </Sider>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default RootContainer
