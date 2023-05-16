import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    FileAddOutlined,
    IdcardOutlined,
    PrinterOutlined,
    ContainerOutlined
} from '@ant-design/icons';
import { 
    Button, 
    Layout,
    Menu, 
    theme 
} from 'antd';
import { 
    useState 
} from 'react';
import { 
    Link 
} from 'react-router-dom';

const {  
    Sider 
} = Layout;
const SubMenu = Menu.SubMenu;


const SiderMain=({collapsed})=>{
    return(
        <>
            <Sider 
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            style={{
                backgroundColor:'#fff'
            }}
            >
                <div className="logo" />
                <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                    // items={[
                    // {
                    //     key: '1',
                    //     icon: <UserOutlined />,
                    //     label: 'nav 1',
                    // },
                    // {
                    //     key: '2',
                    //     icon: <VideoCameraOutlined />,
                    //     label: 'nav 2',
                    // },
                    // {
                    //     key: '3',
                    //     icon: <UploadOutlined />,
                    //     label: 'nav 3',
                    //     to:"jjj"
                    // },
                    // ]}
                >
                    <Menu.Item 
                    //onClick={this.handleAddtags.bind(this,item)}
                    //</Menu>key={item.path}
                    key="1"
                    icon={<FileAddOutlined />}
                    >
                        <Link to="/addNewPost">
                            <strong>
                                Add New
                            </strong>
                        </Link>
                    </Menu.Item>
                    <Menu.Item 
                    //onClick={this.handleAddtags.bind(this,item)}
                    //</Menu>key={item.path}
                    key="2"
                    icon={<IdcardOutlined />}
                    >
                        <Link to="/lists">
                            <strong>
                                Lists
                            </strong>
                        </Link>
                    </Menu.Item>

                    <Menu.Item 
                    //onClick={this.handleAddtags.bind(this,item)}
                    //</Menu>key={item.path}
                    key="3"
                    icon={<ContainerOutlined />}
                    >
                        <Link to="/content">
                            <strong>
                                Setup
                            </strong>
                        </Link>
                    </Menu.Item>
                    <Menu.Item 
                    //onClick={this.handleAddtags.bind(this,item)}
                    //</Menu>key={item.path}
                    key="4"
                    icon={<PrinterOutlined />}
                    >
                        <Link to="/report">
                            <strong>
                                Report
                            </strong>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    )
}
export default SiderMain;

