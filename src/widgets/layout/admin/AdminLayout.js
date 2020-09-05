import "./admin-layout.less";

import React, {useState, Suspense} from "react";

import {Dropdown, Layout, Menu} from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
  MenuOutlined,
  LockOutlined,
  ShoppingCartOutlined,
  EuroOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

import {Loader} from "../../loader/Loader";

import {useActivePage, useAva, useMenuSelect, useSignOut} from "./adminLayoutHooks";
import {isPC} from "../../../utils/screenSize";

import * as routes from "../../../constants/routes";

export function AdminLayout(props) {
  const [collapsed, setCollapse] = useState(!isPC());
  
  const ava = useAva();
  
  const activePage = useActivePage();
  
  const onMenuSelect = useMenuSelect();
  
  return (
    <Layout className="admin-layout">
      <Layout>
        <Layout.Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapse}
          className="admin-layout-sider"
          trigger={(
            <div className="admin-layout-trigger">
              <MenuOutlined/>
            </div>
          )}
        >
          <div className={`logo${collapsed ? " collapsed" : ""}`}/>
          <Menu theme="dark" selectedKeys={[activePage]} onSelect={onMenuSelect} mode="inline">
            <Menu.Item key={routes.DASHBOARD_ROUTE} icon={<DesktopOutlined/>}>
              Dashboard
            </Menu.Item>
            <Menu.Item key={routes.EMPLOYEE_ROUTE} icon={<UserOutlined/>}>
              Users
            </Menu.Item>
            <Menu.Item key={routes.PERMISSION_ROUTE} icon={<LockOutlined/>}>
              Permissions
            </Menu.Item>
            <Menu.Item key={routes.GOODS_ROUTE} icon={<ShoppingCartOutlined/>}>
              Goods
            </Menu.Item>
            <Menu.Item key={routes.PRICE_ROUTE} icon={<EuroOutlined/>}>
              Prices
            </Menu.Item>
            <Menu.Item key={routes.CALLS_ROUTE} icon={<PhoneOutlined/>}>
              Calls
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout className={`admin-layout-right${collapsed ? "" : " moved"}`}>
          <Layout.Header className="admin-layout-header">
            <Dropdown overlay={<SettingsMenu/>} className="admin-layout-ava-dropdown">
              <img src={ava} alt=""/>
            </Dropdown>
          </Layout.Header>
          <Layout.Content className="admin-layout-body">
            <Suspense fallback={<Loader/>}>
              {props.children}
            </Suspense>
          </Layout.Content>
        </Layout>
      </Layout>
      <Layout.Footer className="admin-layout-footer">
        all right reserved© 2018-2020
      </Layout.Footer>
    </Layout>
  )
}

function SettingsMenu() {
  const signOut = useSignOut();
  
  return (
    <Menu theme="dark">
      <Menu.Item onClick={signOut}>
        Sign Out
      </Menu.Item>
    </Menu>
  )
}