import React, { useContext } from 'react'
import { Form, Input, Button, Layout } from 'antd';
import {withRouter, useLocation} from 'react-router-dom'
import {useState} from 'react'
import { Context } from '../store';
import { updatePosts } from '../store/actions';

function EditPost({history}) {

  const [state, dispatch] = useContext(Context)
  const [warning, setWarning] = useState(null)
  const [form] = Form.useForm()
  const data = useLocation()

  const handleSubmit = e => {
    if (!e.title || !e.text) { setWarning('The fields cannot be empty!')
    } else {
        const newPost = {
            title: e.title,
            text: e.text,
        }
        EditPost(newPost);
        setWarning(null)
        form.resetFields()
    }
    e.title = null
    e.text = null
}

function getPosts() {
  fetch('http://localhost:8081/api/post').then(res => {
      return res.json();
  }).then( async (data) => {
      await dispatch(updatePosts(data))
  });
}

function EditPost(post) {
  fetch('http://localhost:8081/api/posts/edit', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post),
      method: 'POST',
    }).then(() => {
      getPosts()
      history.push("/posts")
    })
}

  return (
    <Layout className="container">
    <h1>Add Post</h1>
    <Form form={form} labelCol={{span: 8}} wrapperCol={{span: 8}} labelAlign="center" name="register" onFinish={handleSubmit}>
        <Form.Item label="Title" name="title">
            <Input placeholder="title here pew pew pew" defaultValue={data.state.title} type="text" ref></Input>
        </Form.Item>
        <Form.Item label="Text" name="text">
            <Input type="text" placeholder="post text here beowwww wee pew" defaultValue={data.state.text}></Input>
        </Form.Item>
        <Form.Item style={{display: "flex", justifyContent: "center"}}>
            <Button type="primary" htmlType="submit">Add Post</Button>
        </Form.Item>
        {warning}
    </Form>
    {data.state.title}
    {data.state.text}
  </Layout>
  );
}

export default withRouter(EditPost)
