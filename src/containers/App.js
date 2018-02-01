import React from 'react'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { withRouter, Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Icon, Alert, Spin } from 'antd'

import { requestFetch } from '../actions/user'
import { clear } from '../actions/alert'
import PrivateRoute from './PrivateRoute'
import DiveLogContainer from './DiveLogContainer'
import DivelogDetail from '../components/DivelogDetail'
import ProfileContainer from './ProfileContainer'
import LogCreatorContainer from './LogCreatorContainer'
import LogEditorContainer from './LogEditorContainer'
import SigninContainer from './SigninContainer'
import SignoutContainer from './SignoutContainer'

const { Header, Content, Footer } = Layout

const routes = [
  {
    path: '/',
    icon: 'home',
    exact: true,
    label: 'Home',
    main: DiveLogContainer,
  },
  {
    path: '/profile',
    icon: 'user',
    exact: true,
    label: 'Profile',
    main: ProfileContainer,
  },
  {
    path: '/new',
    icon: 'form',
    exact: true,
    label: 'Create',
    main: LogCreatorContainer,
  },
]

const renderHeadbar = user => {
  const { isSignedIn } = user
  return (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={['0']}
      style={{ lineHeight: '50px' }}
    >
      {isSignedIn &&
        routes.map((route, index) => (
          <Menu.Item key={index}>
            <Link to={route.path}>
              <Icon type={route.icon} style={{ fontSize: 24 }} />
              <span className="nav-text" style={{ fontSize: 16 }}>
                {route.label}
              </span>
            </Link>
          </Menu.Item>
        ))}
      {isSignedIn && (
        <Menu.Item>
          <Link to="/sign_out">
            <span className="nav-text" style={{ fontSize: 16 }}>
              Sign Out
            </span>
          </Link>
        </Menu.Item>
      )}
    </Menu>
  )
}

const renderAlert = alert => {
  if (alert.messages && alert.messages.length > 0) {
    return (
      <div>
        {alert.messages.map((message, i) => (
          <div key={i} style={{ padding: 5 }}>
            <Alert message={message} type={alert.type} showIcon closable />
          </div>
        ))}
      </div>
    )
  }
}

const App = props => {
  const { alert, user } = props
  return user.isPrepared ? (
    <Layout>
      <Header
        className="header"
        style={{ height: 50, background: '#fff', padding: '0 120px' }}
      >
        {renderHeadbar(user)}
      </Header>
      <Content
        style={{
          background: '#87ceeb',
          padding: '10px 120px',
          margin: 0,
          minHeight: '100%',
        }}
      >
        <div style={{ padding: 10, background: '#fff' }}>
          {renderAlert(alert)}

          <Switch>
            <PrivateRoute exact path="/" component={DiveLogContainer} />
            <PrivateRoute exact path="/profile" component={ProfileContainer} />
            <PrivateRoute exact path="/new" component={LogCreatorContainer} />
            <PrivateRoute path="/sign_out" component={SignoutContainer} />
            <Route path="/sign_in" component={SigninContainer} />
            <PrivateRoute exact path="/:divelog_id" component={DivelogDetail} />
            <PrivateRoute
              exact
              path="/:divelog_id/edit"
              component={LogEditorContainer}
            />
          </Switch>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', background: '#87ceeb' }}>
        DIVE LOG
      </Footer>
    </Layout>
  ) : (
    <Spin />
  )
}

const mapStateToProps = state => ({
  alert: state.alert,
  user: state.user,
})

const mapDispatchToProps = {
  clear,
  requestFetch,
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      console.log('before APP mount')
      this.props.requestFetch()
    },
    componentWillUpdate(nextProps, _nextState) {
      console.log('updated APP Container')
      nextProps.history.listen((_location, _action) => {
        nextProps.clear()
      })
    },
  })
)

export default withRouter(enhance(App))
