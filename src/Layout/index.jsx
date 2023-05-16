import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined 
  } from '@ant-design/icons';
  import { Button, Layout, Menu, theme } from 'antd';
  import { useState } from 'react';
  import SiderMain from './Sider';
  import ContentMain from './Content';
  import 'react-quill/dist/quill.snow.css';
  const { Header, Sider, Content } = Layout;


  const MainLayout = ({}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    return (
      <>
        <Layout 
        style={{ minHeight: "100vh",overflow:"hidden" }}
        >
          <SiderMain collapsed={collapsed} />
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
            </Header>
            <ContentMain colorBgContainer={colorBgContainer}/>
          </Layout>
        </Layout>
      </>
    );
  };
  export default MainLayout;