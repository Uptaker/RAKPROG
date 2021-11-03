import React, { useContext } from 'react'
import { Form, Input, Button, Layout } from 'antd';
import {withRouter, useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Context } from '../store';
import { updatePosts } from '../store/actions';

function EditPost({history}) {
  const [state, dispatch] = useContext(Context)
  const [warning, setWarning] = useState(null)
  const [form] = Form.useForm()
  const data = useLocation()

  useEffect(() => {
    form.setFieldsValue({
      text: data.state.text,
      title: data.state.title
    })
  },[])

  if(!state.auth.token) {
    history.push('/login')
  }



  const handleSubmit = e => {
    if (!e.title || !e.text) { setWarning('The fields cannot be empty!')
    } else {
        const newPost = {
            title: e.title,
            text: e.text,
        }
        console.log(newPost)
        console.log(data.state.id)
        EditPost(newPost);
        setWarning(null)
        form.resetFields()
    }
}

function getPosts() {
  fetch('http://localhost:8081/api/post').then(res => {
      return res.json();
  }).then( async (data) => {
      await dispatch(updatePosts(data))
  });
}

function EditPost(post) {
  fetch('http://localhost:8081/api/post/update/' + data.state.id, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post),
      method: 'PUT',
    }).then(() => {
      getPosts()
      history.push("/posts")
    })
}

  return (
    <div style={{textAlign: "center"}}>
    <Layout className="container">
      <h1>Edit Post</h1>
      <Form form={form} labelCol={{span: 8}} wrapperCol={{span: 8}} labelAlign="center" name="register" onFinish={handleSubmit}>
          <Form.Item label="Title" name="title">
              <Input placeholder="title here pew pew pew" type="text"></Input>
          </Form.Item>
          <Form.Item label="Text" name="text">
              <Input type="text" placeholder="post text here beowwww wee pew"></Input>
          </Form.Item>
          <Form.Item style={{display: "flex", justifyContent: "center"}}>
              <Button type="primary" htmlType="submit">Confirm Changes</Button>
          </Form.Item>
          {warning}
      </Form>
      <br/>
    </Layout>
    </div>
  );
}

export default withRouter(EditPost)
