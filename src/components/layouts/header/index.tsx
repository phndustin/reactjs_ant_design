import { Avatar, Layout, Menu, Popover } from 'antd'
import classNames from 'classnames'
import {
  BellOutlined,
  RightOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import './style.scss'

function Header(props: any) {
  const {
    fixed,
    // avatar,
    // username,
    collapsed
    // notifications,
    // onCollapseChange,
    // onAllNotificationsRead,
  } = props

  const handleClickMenu = () => {

  }

  // const rightContent = [
  //   <Menu key="user" mode="horizontal" onClick={handleClickMenu}>
  //     <Menu.SubMenu
  //       title={
  //         <>
  //           <span style={{ color: '#999', marginRight: 4 }}>
  //             Hi,
  //           </span>
  //           <span>{username}</span>
  //           <Avatar style={{ marginLeft: 8 }} src={avatar} />
  //         </>
  //       }
  //     >
  //       <Menu.Item key="SignOut">
  //         Sign out
  //       </Menu.Item>
  //     </Menu.SubMenu>
  //   </Menu>,
  // ]

  // if (config.i18n) {
  //   const { languages } = config.i18n
  //   const language = getLocale()
  //   const currentLanguage = languages.find(
  //     item => item.key === language
  //   )

  //   rightContent.unshift(
  //     <Menu
  //       key="language"
  //       selectedKeys={[currentLanguage.key]}
  //       onClick={data => {
  //         setLocale(data.key)
  //       }}
  //       mode="horizontal"
  //     >
  //       <SubMenu title={<Avatar size="small" src={currentLanguage.flag} />}>
  //         {languages.map(item => (
  //           <Menu.Item key={item.key}>
  //             <Avatar
  //               size="small"
  //               style={{ marginRight: 8 }}
  //               src={item.flag}
  //             />
  //             {item.title}
  //           </Menu.Item>
  //         ))}
  //       </SubMenu>
  //     </Menu>
  //   )
  // }

  // Notification =============================
  // rightContent.unshift(
  //   <Popover
  //     placement="bottomRight"
  //     trigger="click"
  //     key="notifications"
  //     overlayClassName={styles.notificationPopover}
  //     getPopupContainer={() => document.querySelector('#primaryLayout')}
  //     content={
  //       <div className={styles.notification}>
  //         <List
  //           itemLayout="horizontal"
  //           dataSource={notifications}
  //           locale={{
  //             emptyText: <Trans>You have viewed all notifications.</Trans>,
  //           }}
  //           renderItem={item => (
  //             <List.Item className={styles.notificationItem}>
  //               <List.Item.Meta
  //                 title={
  //                   <Ellipsis tooltip lines={1}>
  //                     {item.title}
  //                   </Ellipsis>
  //                 }
  //                 description={moment(item.date).fromNow()}
  //               />
  //               <RightOutlined style={{ fontSize: 10, color: '#ccc' }} />
  //             </List.Item>
  //           )}
  //         />
  //         {notifications.length ? (
  //           <div
  //             onClick={onAllNotificationsRead}
  //             className={styles.clearButton}
  //           >
  //             <Trans>Clear notifications</Trans>
  //           </div>
  //         ) : null}
  //       </div>
  //     }
  //   >
  //     <Badge
  //       count={notifications.length}
  //       dot
  //       offset={[-10, 10]}
  //       className={styles.iconButton}
  //     >
  //       <BellOutlined className={styles.iconFont} />
  //     </Badge>
  //   </Popover>
  // )

  return (
    <Layout.Header
      className={classNames('header', {
        fixed,
        collapsed,
      })}
      id="layoutHeader"
    >
      <div
        className="button"
        // onClick={onCollapseChange.bind(this, !collapsed)}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </Layout.Header>
  )
}

export default Header