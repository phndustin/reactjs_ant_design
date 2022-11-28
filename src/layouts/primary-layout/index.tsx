import React, { PureComponent, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Header, Sider } from 'components/layouts'
import { BackTop, Layout, Drawer, Breadcrumb } from 'antd'
// const { pathToRegexp } = require("path-to-regexp")
// import { config, getLocale } from 'utils'
// import Error from '../pages/404'
import './style.scss'
import { observer } from 'mobx-react-lite'
import enquire from 'enquire.js'
import { useMobileLayout } from 'hooks/layout'
import config from 'utils/config'
import Api from 'services/api'

const { Content } = Layout
const api = new Api()

const PrimaryLayout = (props: any) => {
  const isMobile = useMobileLayout()

  const { children } = props
  // const { theme, collapsed, notifications } = app

  // const user = store.get('user') || {}
  // const permissions = store.get('permissions') || {}
  // const routeList = store.get('routeList') || []

  // Localized route name.

  // const lang = getLocale()
  // const newRouteList =
  //   lang !== 'en'
  //     ? routeList.map(item => {
  //         const { name, ...other } = item
  //         return {
  //           ...other,
  //           name: (item[lang] || {}).name || name,
  //         }
  //       })
  //     : routeList

  // Find a route that matches the pathname.
  // const currentRoute = newRouteList.find(
  //   _ => _.route && pathToRegexp(_.route).exec(location.pathname)
  // )

  // Query whether you have permission to enter this page
  // const hasPermission = currentRoute
  //   ? permissions.visit.includes(currentRoute.id)
  //   : false

  // MenuParentId is equal to -1 is not a available menu.
  // const menus = newRouteList.filter(_ => _.menuParentId !== '-1')

  const onCollapseChange = (collapsed: any) => {
    // this.props.dispatch({
    //   type: 'app/handleCollapseChange',
    //   payload: collapsed,
    // })
  }

  const routeList = api.getRoute()

  const headerProps = {
  //   menus,
    collapsed: false,
  //   notifications,
  //   onCollapseChange,
  //   avatar: 'https://image.zuiidea.com/photo-1523307730650-594bc63f9d67.jpeg?imageView2/1/w/200/h/200/format/webp/q/75|imageslim',
  //   username: 'toan',
    fixed: config.fixedHeader,
  //   onAllNotificationsRead() {
  //     // dispatch({ type: 'app/allNotificationsRead' })
  //   },
  //   onSignOut() {
  //     // dispatch({ type: 'app/signOut' })
  //   },
  }

  // const siderProps = {
  //   theme,
  //   menus,
  //   isMobile,
  //   collapsed,
  //   onCollapseChange,
  //   onThemeChange(theme: any) {
  //     // dispatch({
  //     //   type: 'app/handleThemeChange',
  //     //   payload: theme,
  //     // })
  //   },
  // }

  return (
    <>
      <Layout className="primary-layout">
        {/* {isMobile ? (
          <Drawer
            maskClosable
            closable={false}
            onClose={onCollapseChange.bind(this, !collapsed)}
            visible={!collapsed}
            placement="left"
            width={200}
            style={{
              padding: 0,
              height: '100vh',
            }}
          >
            <Sider {...siderProps} collapsed={false} />
          </Drawer>
        ) : (
          <Sider {...siderProps} />
        )} */}
        {/* <div
          className={styles.container}
          style={{ paddingTop: config.fixedHeader ? 72 : 0 }}
          id="primaryLayout"
        >
          <Header {...headerProps} />
          <Content className={styles.content}>
            <Bread routeList={newRouteList} />
            {hasPermission ? children : <Error />}
          </Content>
          <BackTop
            className={styles.backTop}
            target={() => document.querySelector('#primaryLayout')}
          />
          <GlobalFooter
            className={styles.footer}
            copyright={config.copyright}
          />
        </div> */}

        <Sider />
        <div
          id="primaryLayout"
          className="container"
          style={{ paddingTop: config.fixedHeader ? 72 : 0 }}
        >
          <Header {...headerProps} />
          <Content className="content">
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            {children}
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </div>
      </Layout>
    </>
  )
}

export default observer(PrimaryLayout)