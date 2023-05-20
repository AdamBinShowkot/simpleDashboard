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
    useState,
    useEffect 
} from 'react';
import { 
    Link,
    useLocation
} from 'react-router-dom';
import menuConfig from '../../config/menuConfig'
import './index.css'
const {  
    Sider 
} = Layout;
const SubMenu = Menu.SubMenu;


const SiderMain=({collapsed})=>{
    const location=useLocation();
    let {pathname}=location;
    const roles=localStorage.getItem('role')
    const filterMenu=menuConfig.filter((mnu)=>mnu.roles.includes(roles))
    return(
        <>
            <Sider 
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            className={`${collapsed?'collapsed-sidebar':'expand-sidebar'}`}
            style={{
                backgroundColor:'#fff',
                paddingTop:'10px'
            }}
            >
                <div className="logo" />
                <Menu
                style={{
                    height:'100vh'
                }}
                theme="light"
                mode="inline"
                selectedKeys={[pathname?pathname.substr(1):'']}
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
                    {/* <Menu.Item 
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
                    key="4"
                    icon={<PrinterOutlined />}
                    >
                        <Link to="/report">
                            <strong>
                                Report
                            </strong>
                        </Link>
                    </Menu.Item> */}
                    {
                        filterMenu.length?filterMenu.map((menun,index)=>{
                            return  <Menu.Item 
                            key={menun.path}
                            icon={menun.icon}
                            >
                                <Link to={menun.path}>
                                    <strong>
                                        {menun.title}
                                    </strong>
                                </Link>
                            </Menu.Item>
                        }):""
                    }

                </Menu>
            </Sider>
        </>
    )
}
export default SiderMain;

