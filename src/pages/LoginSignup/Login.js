import React, { useState } from "react";
import { Button, Col, Form, Input, Typography } from "antd";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userType] = useState('Company');
  const navigate = useNavigate();

const onFinish = (values) => {
  //console.log("🚀 ~ file: Login.js:9 ~ onFinish ~ values:", values)
if (userType) {

 navigate('/dashboard')    
} else {
  
  // userType === 'Applicant' ? 
  // : userType === 'Company' ?
  //   navigate('/')
  // : userType === 'Admin' ?
  //  navigate('/')
  //  : null;
}
};

const onFinishFailed = (errorInfo) => {
  console.log("🚀 ~ file: Login.js:7 ~ onFinishFailed ~ errorInfo:", errorInfo)
  console.log("Failed:", errorInfo);
};

  return (

  <div style={{
    marginTop: '3rem'
  }}>
    <Col xs={24}>
      <Typography.Title>
        Login
      </Typography.Title>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          margin: '0 auto'
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please Input your Email!",
            },
          ]}
        >
          <Input type={'email'} placeholder={'Enter your Email'}/>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder={'Enter Your Password'}/>
        </Form.Item>

        <Form.Item
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Typography.Link href="/SignUp" target="_blank">
        Sign Up Now
    </Typography.Link>
    </Col>
  </div>
  )
}

export default Login