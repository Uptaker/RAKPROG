import { Form, Input, Button, Layout } from 'antd';
import {withRouter} from 'react-router-dom'
import {useState} from 'react'
function Register({history}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [warning, setWarning] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  const onFinish = async (e) => {
    setEmail(e.email)
    setLastName(e.lastname)
    setFirstName(e.firstname)
    setPassword(e.password)
    // setConfirmPassword(e.confirmpassword)
    const newUser = {
      email,
      firstName,
      lastName,
      password
    }

    if (!e.email || !e.password || !e.firstname || !e.lastname) {
      setWarning('Fields cannot be empty!')
    } else {
      const response = await fetch('http://localhost:8081/api/auth/signup/', {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser),
        method: 'POST',
      })
      history.push("/login")
      setWarning(null)
    }
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
      <Form.Item style={{display: "flex", justifyContent: "center"}}>
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
      {warning}
    </Form>
    </Layout>
  );
}

export default withRouter(Register)
