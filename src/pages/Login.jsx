import { Button, Form, Input, Layout, Row, Col } from 'antd';
import React, { useEffect } from 'react';
import axios from 'axios';

const Login = () => {

  const onFinish = (values) => {
    const { phone, password } = values;
    try {
      axios.post('https://profitmodel-server.herokuapp.com/auth/login',
        {
          data: {
            phone: phone,
            password: password
          }
        })
        .then((res) => res.data)
        .then((data) => {
          console.log('asd', data)
        })
    }
    catch (error) {
      console.log('Error', error)
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <Layout style={{ height: "100vh", justifyContent: "center" }}>
      <>
        <Row justify='center'>
          <Col span={12}>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 10,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
            >
              <Form.Item
                label="phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    </Layout>
  );
};

export default Login;