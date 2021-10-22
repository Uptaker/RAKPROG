import { Form, Input, Button, Layout } from 'antd';
import {withRouter} from 'react-router-dom'
import {useState, useRef, useEffect} from 'react'


function Register({history}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  const onFinish = async (e) => {
    setEmail(e.email)
    setLastName(e.lastname)
    setFirstName(e.firstname)
    setPassword(e.password)
    // setConfirmPassword(e.confirmpassword)
    console.log(e);
    const response = await fetch('http://localhost:8081/api/auth/signup/', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password
      }),
      method: 'POST',
    })

    const data = await response.json()

    console.log(data)

    // history.push("/login")
  }

  return (
    <Layout className="container" type="flex" justify="center" align="middle">
    <Form labelCol={{span: 8}} wrapperCol={{span: 8}} labelAlign="center" name="register" onFinish={onFinish}>
      <Form.Item label="E-mail" name="email">
        <Input placeholder="email@email.com" type="email" required></Input>
      </Form.Item>
      <Form.Item label="First name" name="firstname">
        <Input required placeholder="First Name"></Input>
      </Form.Item>
      <Form.Item label="Last name" name="lastname">
        <Input required placeholder="Last Name"></Input>
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" required></Input>
      </Form.Item>
      {/* <Form.Item label="Confirm password" name="confirmpassword">
        <Input type="password" required></Input>
      </Form.Item> */}
      <Form.Item style={{display: "flex", flexDirection: "center", justifyContent:"center" }}>
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
    </Layout>
  );

}

export default withRouter(Register)
