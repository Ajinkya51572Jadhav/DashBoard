import React, { useState } from "react";
import { Layout, Menu, Typography, Button } from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  TeamOutlined,
  AreaChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

const Sidenav = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // Menu items structure
  const menuItems = [
    {
      key: "home",
      title: "Home",
      icon: <HomeOutlined />,
      path: "/",
    },
    {
      key: "products",
      title: "Products",
      icon: <ShoppingCartOutlined />,
      path: "/products",
    },
    {
      key: "master",
      title: "Master",
      icon: <SettingOutlined />,
      children: [
        { key: "user", title: "User", path: "/master/user" },
        { key: "category", title: "Category", path: "/master/category" },
        {
          key: "subcategory",
          title: "Subcategory",
          path: "/master/subcategory",
        },
        { key: "branch", title: "Branch", path: "/master/branch" },
        { key: "city", title: "City", path: "/master/city" },
      ],
    },
    {
      key: "operation",
      title: "Operation",
      icon: <SettingOutlined />,
      children: [
        { key: "inc", title: "Create INC", path: "/operation/inc" },
        {
          key: "incident",
          title: "Incident List",
          path: "/operation/incident",
        },
        {
          key: "assign Inc",
          title: "Assign Inc",
          path: "/operation/assign",
        },
      ],
    },
    {
      key: "analytics",
      title: "Analytics",
      icon: <AreaChartOutlined />,
      path: "/analytics",
    },
    {
      key: "teams",
      title: "Teams",
      icon: <TeamOutlined />,
      path: "/teams",
    },
    {
      key: "settings",
      title: "Settings",
      icon: <SettingOutlined />,
      path: "/settings",
    },
  ];

  return (
    <Sider
      width={240}
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      style={{ boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.1)" }}
    >
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <Title level={4} style={{ margin: 0 }}>
          CodingMSTR
        </Title>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={["master"]} // Open the 'Master' submenu by default
      >
        {menuItems.map((item) =>
          item.children ? (
            <SubMenu key={item.key} icon={item.icon} title={item.title}>
              {item.children.map((child) => (
                <Menu.Item key={child.key}>
                  <Link to={child.path}>{child.title}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
          )
        )}
      </Menu>
      <div style={{ position: "absolute", bottom: "24px", width: "100%" }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapsed}
          style={{ width: "100%" }}
        >
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </div>
    </Sider>
  );
};

export default Sidenav;
