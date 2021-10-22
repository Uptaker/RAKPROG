import React from 'react'
import { Form, Input, Button, Layout } from 'antd';
import {withRouter} from 'react-router-dom'
import {useState, useRef, useEffect} from 'react'


function Login({history}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFinish = async (e) => {
    setEmail(e.email)
    setPassword(e.password)
    // setConfirmPassword(e.confirmpassword)
    console.log(e);
    const response = await fetch('http://localhost:8081/api/auth/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      }),
      method: 'POST',
    })

    const data = await response.json()

    if (data.token) {
      alert('Login successful');
      history.push("/posts/show")
    } else {
      console.log('couldn\'t log in')
    }

    console.log(data)
    // history.push("/posts/show")
  }

  return (
    <Layout className="container">
    <Form labelCol={{span: 8}} wrapperCol={{span: 8}} labelAlign="center" name="register" onFinish={onFinish}>
      <Form.Item label="E-mail" name="email">
        <Input placeholder="email@email.com" type="email" required></Input>
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" required></Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Log in</Button>
      </Form.Item>
    </Form>
    </Layout>
  );

}

export default withRouter(Login)
