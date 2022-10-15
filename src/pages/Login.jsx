import { Button, Form, Input, Layout, Row, Col } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const onFinish = async (values) => {
    const { phone, password } = values;
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
      phone: phone,
      password: password
    }).then((res) => res.data)
    if (res.success) {
      navigate('/')
      localStorage.setItem('token', res.data)
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