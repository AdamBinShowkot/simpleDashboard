import React from 'react';
import {
    Layout,
    Row,
    Col,
    Button
} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UndoOutlined
} from '@ant-design/icons';
import './index.css'
const { Header, Sider, Content } = Layout;

const HeaderMain=({collapsed,setCollapsed,colorBgContainer})=>{
    return(
        <>
            <Header
            className='top-header-container'
            id={`${collapsed?"collapsed-header":"expand-header"}`}
            style={{
                padding: 0,
                background: '#f2f3f8',
            }}
            >
              <Row>
                <Col span={12}>
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
                </Col>

                <Col span={12} style={{textAlign:'right'}}>
                  <Button
                  type="text"
                  icon={<UndoOutlined />}
                  onClick={() =>{
                    localStorage.clear();
                    window.location.href="/"
                  }}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                  ></Button>
                </Col>
              </Row>
            </Header>
        </>
    )
}
export default HeaderMain;