import React,{
    useState
} from 'react';
import {
    Card,
    Row,
    Col,
    Form,
    Input,
    Button,

} from 'antd'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import parse from 'html-react-parser';
import './index.css'


const NewsEditor=()=>{
    const [editorData,setEditorData]=useState("");

    const editorModule={
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    const editorFormats=[
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    const handleEditorChange=(value)=>{
        setEditorData(value);
    }
    return(
        <>
            <Row>
                <Col 
                span={24}
                style={{
                    padding:'10px 100px'
                }}
                >
                    <Form>
                        <Row>
                            <Col span={24}>
                                <Form.Item
                                labelAlign="left"
                                wrapperCol={{
                                    span:18
                                }}
                                labelCol={{
                                    span:6
                                }}
                                colon={false}
                                tooltip={{
                                    placement:"bottom",
                                    title:"News Title"
                                }}
                                label="News Title"
                                rules={[
                                    {
                                        required:true,
                                        message:"News Title Required."
                                    }
                                ]}
                                >
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <ReactQuill 
                                value={editorData}
                                modules={editorModule}
                                formats={editorFormats}
                                onChange={handleEditorChange} 
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col 
                            span={24}
                            style={{
                                textAlign:'right'
                            }}
                            >
                                <Button
                                type='primary'
                                >
                                    Save
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default NewsEditor;
