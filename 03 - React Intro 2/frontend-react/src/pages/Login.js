import React, { useContext } from 'react'
import { Form, Input, Button, Layout } from 'antd';
import {withRouter} from 'react-router-dom'
import {useState} from 'react'
import { Context } from '../store';
import { loginUser } from '../store/actions';

function Login({history}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [state, dispatch] = useContext(Context)

  const onFinish = async (e) => {
    setEmail(e.email)
    setPassword(e.password)

    const user = {
      email,
      password
    }
    const response = await fetch('http://localhost:8081/api/auth/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      method: 'POST',
    })

    const data = await response.json()
    if (data.token) {
      dispatch(loginUser(data))
      history.push("/posts")
    } else {
      console.log('couldn\'t log in')
    }
  }

  return (
    <Layout className="container" type="flex" justify="center" align="middle">
    <Form labelCol={{span: 8}} wrapperCol={{span: 8}} labelAlign="center" name="register" onFinish={onFinish}>
      <Form.Item label="E-mail" name="email">
        <Input placeholder="email@email.com" type="email" required></Input>
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" required></Input>
      </Form.Item>
      <Form.Item style={{display: "flex", justifyContent: "center"}}>
        <Button type="primary" htmlType="submit">Log in</Button>
      </Form.Item>
    </Form>
    </Layout>
  );
}

export default withRouter(Login)
