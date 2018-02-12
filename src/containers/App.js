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
import SignupContainer from './SignupContainer'
import SignoutContainer from './SignoutContainer'

const { Header, Content, Footer } = Layout
const SubMenu = Menu.SubMenu

const settingMenus = [
  // {
  //   path: '/profile',
  //   label: 'Profile',
  // },
  {
    path: '/sign_out',
    label: 'Sign out',
  },
]

const renderHeadbar = user => {
  const { isSignedIn, name } = user
  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{ float: 'right', lineHeight: '50px' }}
    >
      {isSignedIn && (
        <Menu.Item>
          <Link to="/new">
            <Icon type="form" style={{ fontSize: 24 }} />
            <span className="nav-text" style={{ fontSize: 16 }}>
              Create Log
            </span>
          </Link>
        </Menu.Item>
      )}
      {isSignedIn && (
        <SubMenu
          title={
            <span className="nav-text" style={{ fontSize: 16 }}>
              <Icon type="user" style={{ fontSize: 24 }} />
              {name}
            </span>
          }
        >
          {settingMenus.map((menu, i) => (
            <Menu.Item key={i}>
              <Link to={menu.path}>{menu.label}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
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

const renderRoutes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={DiveLogContainer} />
    <PrivateRoute exact path="/profile" component={ProfileContainer} />
    <PrivateRoute exact path="/new" component={LogCreatorContainer} />
    <PrivateRoute path="/sign_out" component={SignoutContainer} />
    <Route path="/sign_in" component={SigninContainer} />
    <Route path="/sign_up" component={SignupContainer} />
    <PrivateRoute exact path="/:divelog_id" component={DivelogDetail} />
    <PrivateRoute
      exact
      path="/:divelog_id/edit"
      component={LogEditorContainer}
    />
  </Switch>
)

const App = props => {
  const { alert, user } = props
  return user.isPrepared ? (
    <div id="bluebook">
      <Layout>
        <Header
          className="navbar"
          style={{ height: 50, background: '#fff', padding: '0 120px' }}
        >
          <Link to="/" style={{ fontSize: 30, textDecoration: 'none' }}>
            BLUEBOOK
          </Link>
          <div style={{ float: 'right' }}>{renderHeadbar(user)}</div>
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
            {renderRoutes()}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center', background: '#87ceeb' }}>
          DIVE LOG
        </Footer>
      </Layout>
    </div>
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
