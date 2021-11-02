import {useState, useContext, useRef, useEffect} from "react"
import {Context} from "../store"
import {addPost, removePost, updatePosts} from "../store/actions"
import { Form, Input, Button, Layout, Table } from 'antd';

function Posts() {

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
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => (
                <Button
                onClick={async (e) => { 
                    dispatch(removePost(record._id))
                }}
                >
                Delete
                </Button>
            ),
            }
    ];

    const [state, dispatch] = useContext(Context)
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = e => {
        const newPost = {
            title: e.title,
            text: e.text,
            user: 'TEST AUTHOR'
        }
        addNewPost(newPost);
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

    const addNewPost = (post) => {
        try {
            try {
                fetch('http://localhost:8081/api/post/create', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post),
                method: 'POST',
                })
            } catch (error) {
                console.log('oh noes ' + error)
            }
            dispatch(addPost(post))
        } catch (error) {
            console.log('oh noessss ' + error)
        }
    }

    console.log({state})

    if (isLoading) {
        return (
            <div>Posts are loading..</div>
        )
    }

    return (
        <div style={{textAlign: "center"}}>
        {/* {!state.auth.token &&  */}
            <Layout className="container">
            <h1>Add Post</h1>
            <Form labelCol={{span: 8}} wrapperCol={{span: 8}} labelAlign="center" name="register" onFinish={handleSubmit}>
                <Form.Item label="Title" name="title">
                    <Input placeholder="title here pew pew pew" type="text" required ref></Input>
                </Form.Item>
                <Form.Item label="Text" name="text">
                    <Input type="text" placeholder="post text here beowwww wee pew" required></Input>
                </Form.Item>
                <Form.Item style={{display: "flex", justifyContent: "center"}}>
                    <Button type="primary" htmlType="submit">Add Post</Button>
                </Form.Item>
            </Form>
        </Layout>
        {/* } */}

            <div className="container">
            <Table dataSource={state.posts.data} columns={columns} rowKey="_id" />
            </div>
        </div>
    )
}

export default Posts;