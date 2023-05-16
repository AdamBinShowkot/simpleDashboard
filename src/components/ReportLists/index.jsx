import react from 'react'
import { 
    Table,
    Row,
    Col,
    Card,
    Tag,
    Space,
    Popconfirm,
    Form,
    Input,
    Button
} from 'antd';
import { Link } from 'react-router-dom';
import {
  DeleteOutlined,
  EditOutlined,
  FundViewOutlined
}from '@ant-design/icons'


const ReportMain=()=>{
  const data = [
    {
      key: '1',
      name: 'News Title One...',
      title: 'News Title One...',
      age: 32,
      author:"Md Homayun kabir",
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      title:"News Title Two...",
      author:"Rahajul Amin Shuvo",
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      title:"News Title Three...",
      author:"Md Toufiqur Rahman",
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
];
  const columns = [
      {
        title: 'Serial',
        key: 'sl',
        render: (text, record) => ( data.indexOf(record) + 1 )
      },
      // {
      //   title: 'Tags',
      //   key: 'tags',
      //   dataIndex: 'tags',
      //   render: (_, { tags }) => (
      //     <>
      //       {tags.map((tag) => {
      //         let color = tag.length > 5 ? 'geekblue' : 'green';
      //         if (tag === 'loser') {
      //           color = 'volcano';
      //         }
      //         return (
      //           <Tag color={color} key={tag}>
      //             {tag.toUpperCase()}
      //           </Tag>
      //         );
      //       })}
      //     </>
      //   ),
      // },
      {
        title:"Title",
        dataIndex:'title',
        key:"title",
        width:'45%'
      },
      {
        title:"Author",
        dataIndex:'author',
        key:"author",
        width:'25%'
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          // <Space size="middle">
          //   <a>Invite {record.name}</a>
          //   <a>Delete</a>
          // </Space>
          <Row>
            <Col span={8}>
              <Tag color="#29c458">
                <EditOutlined/>
              </Tag>
            </Col>
            <Col span={8}>
              <Popconfirm title={`Sure Delete "${record.CategoryName}" ?`}>
                <Tag color="#e94e10">
                  <DeleteOutlined/>
                </Tag>
              </Popconfirm>
            </Col>
            <Col span={8}>
            <Link to={`/report/${record.age}`}>
              <Tag color="#0084ff">
                <FundViewOutlined>
                  
                </FundViewOutlined>
              </Tag>
            </Link>
              
            </Col>
          </Row>
        ),
        width:'18%'
      },
  ];
  return(
    <>
      <Card>
        <Row>
            <Col span={24}>
                <Form>
                    <Row>
                        <Col span={10}>
                            <Form.Item
                            wrapperCol={{
                                span:12
                            }}
                            labelCol={{
                                span:12
                            }}
                            colon={false}
                            tooltip={{
                                placement:"bottom",
                                title:"Title Name"
                            }}
                            label="Title"
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item
                            wrapperCol={{
                                span:12
                            }}
                            labelCol={{
                                span:12
                            }}
                            colon={false}
                            tooltip={{
                                placement:"bottom",
                                title:"Author Name"
                            }}
                            label="Author"
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={4} style={{textAlign:'right'}}>
                            <Button
                            type='primary'
                            >
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Table 
                columns={columns} 
                dataSource={data} />
            </Col>
        </Row>
      </Card>
    </>
  )
}
export default ReportMain;