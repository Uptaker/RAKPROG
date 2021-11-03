import {useState, useContext, useRef, useEffect} from "react"
import {Context} from "../store"
import {addPost, removePost, updatePosts} from "../store/actions"
import { Form, Input, Button, Layout, Table } from 'antd';
import {Link} from 'react-router-dom'
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'

function Posts() {
    const [state, dispatch] = useContext(Context)
    const [isLoading, setIsLoading] = useState(true);
    const [warning, setWarning] = useState(null)
    const [form] = Form.useForm()

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Text',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'Author',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
    ];

    if (state.auth.token) {
        columns.push({
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (record) => (
                <div>
                <Button style={{width: '90%', marginBottom: '5px', backgroundColor: '#ecada6'}} onClick={async (e) => { dispatch(removePost(record._id))}}>
                Delete <DeleteOutlined />
                </Button>
                <Link to={{pathname:"posts/edit", state:{title: record.title, id: record._id, text: record.text}}}><Button style={{width: '90%', backgroundColor: '#c4d5f0'}}>
                Edit <EditOutlined />
                </Button></Link>
                </div>
            ),
        })
    }

    const handleSubmit = e => {
        if (!e.title || !e.text) { setWarning('The fields cannot be empty!')
        } else {
            const newPost = {
                title: e.title,
                text: e.text,
                user: `${state.auth.user.firstName} ${state.auth.user.lastName}`,
                createdAt: new Date(Date.now()).toISOString()
            }
            addNewPost(newPost);
            setWarning(null)
            form.resetFields()
        }
    }
    // kui [], siis muutub ühe korra. Kui [state], siis muutub iga kord kui state muutub
    useEffect(() => {
        getPosts()
    },[]);

    function getPosts() {
        fetch('http://localhost:8081/api/post').then(res => {
            return res.json();
        }).then( async (data) => {
            await dispatch(updatePosts(data))
            setIsLoading(false);
        });
    }

    const addNewPost = async (post) => {
        try {
            try {
                const response = await fetch('http://localhost:8081/api/post/create', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post),
                method: 'POST',
                })
                const data = await response.json()
                dispatch(addPost(data))

            } catch (error) {
                console.log('oh noes ' + error)
            }
        } catch (error) {
            console.log('oh noessss ' + error)
        }
    }

    if (isLoading) {
        return (
            <div>Posts are loading..</div>
        )
    }

    return (
        <div style={{textAlign: "center"}}>
        {state.auth.token && 
            <Layout className="container">
            <h1>Add Post</h1>
            <Form form={form} labelCol={{span: 8}} wrapperCol={{span: 8}} labelAlign="center" name="register" onFinish={handleSubmit}>
                <Form.Item label="Title" name="title">
                    <Input placeholder="title here pew pew pew" type="text" ref></Input>
                </Form.Item>
                <Form.Item label="Text" name="text">
                    <Input type="text" placeholder="post text here beowwww wee pew"></Input>
                </Form.Item>
                <Form.Item style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" htmlType="submit">Add Post</Button>
                </Form.Item>
                {warning}
            </Form>
        </Layout>
        }
            <div className="container">
            <Table dataSource={state.posts.data} columns={columns} rowKey="_id" />
            </div>
        </div>
    )
}

export default Posts;