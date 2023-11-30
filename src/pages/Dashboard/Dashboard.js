import React from 'react';
import { PlusSquareOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import JobApplyform from '../JobApplyform/JobApplyform';
const { Header, Content, Footer, Sider } = Layout;
const Dashboard = () => {

    const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
        icon: <UserOutlined />,
        label: 'Jobs',
    },
    {
        icon: <PlusSquareOutlined />,
        label: 'Post a Job'
    },
    {
        icon: <UserOutlined />,
        label: 'Passed Candidates',
    },
    {
        icon: <PlusSquareOutlined />,
        label: 'Failed Candidates',
    },
    {
        icon: <UserOutlined />,
        label: 'Remaining Candidates',
    },
    {
        icon: <PlusSquareOutlined />,
        label: 'Rejected Applicants',
    },
  ]
  return (
    <Layout>
      <Sider
        fixed
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 430,
              background: colorBgContainer,
              
            }}
          >
            {
                items[1].children
            }
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
         Hire Vue ©2023 Created by Me
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;