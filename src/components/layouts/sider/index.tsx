import { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import './style.scss'
import config from 'utils/config'
import Api from 'services/api'
import { NavLink } from 'react-router-dom'

const api = new Api()
function Sider() {
  // const [current, setCurrent] = useState('mail')
  const [collapsed, setCollapse] = useState(false)

  // const handleClick = (e: any) => {
  //   setCurrent(e.key)
  // }

  const onCollapse = (status: boolean) => {
    setCollapse(status)
  }

  const routeList = api.getRoute()

  return (
    <Layout.Sider
      width="256"
      theme="light"
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={collapsed}
      // onBreakpoint={!isMobile && onCollapseChange}
      className="sider"
    >
      <div className="brand">
        <div className="logo">
          <img alt="logo" src={config.logoPath} />
          {!collapsed && <h1>{config.siteName}</h1>}
        </div>
      </div>

      <Menu defaultSelectedKeys={['1']} mode="inline">
        {routeList.map(item => 
          <Menu.Item key={item.id} icon={<item.icon />}>
            <NavLink to={item.route || '#'}>
              {item.name}
            </NavLink>
          </Menu.Item>
        )}
        {/* <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item> */}
      </Menu>
    </Layout.Sider>
  )
}

export default Sider