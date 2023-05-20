import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    FileAddOutlined,
    IdcardOutlined,
    PrinterOutlined,
    ContainerOutlined,
    BorderTopOutlined,
    UnorderedListOutlined,
    OrderedListOutlined,
    ReconciliationOutlined
} from '@ant-design/icons';


const menuLists=[
    {
        title:"Add News",
        path:'addNewNews',
        icon:<MenuFoldOutlined/>,
        roles:["reporter"]
    },
    {
        title:"News Lists",
        path:'newsLists',
        icon:<FileAddOutlined/>,
        roles:["reporter","approver"]
    },
    {
        title:"Approve Lists",
        path:'approveLists',
        icon:<UnorderedListOutlined />,
        roles:["approver"]
    },
    {
        title:"News Setup",
        path:'newsSetup',
        icon:<BorderTopOutlined />,
        roles:["approver"]
    },
    {
        title:"Lists Setup",
        path:'newsSetupLists',
        icon:<OrderedListOutlined />,
        roles:["approver"]
    },
    {
        title:"Report Lists",
        path:'reportLists',
        icon:<ReconciliationOutlined />,
        roles:["printer"]
    },
    {
        title:"Print Lists",
        path:'printLists',
        icon:<PrinterOutlined/>,
        roles:["printer"]
    }

]

export default menuLists