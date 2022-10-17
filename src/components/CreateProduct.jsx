import { useState } from 'react'
import axios from 'axios'
import { Button, Form, Input, Upload, InputNumber } from 'antd';

const CreateProduct = ({ token }) => {
  const [images, setIamges] = useState()

  const ImageSort = (props) => {
    console.log(props);
    let files = []
    props.fileList.forEach((item) => {
      files.push(item.originFileObj)
    });
    setIamges(files)
  }
  
  const onFinish = async (values) => {
    const { Name, Description, SALE, WHOLESALE, BANK, categoryId, brandId, measurementId, discount } = values;
    const DateList = {
      Name: Name,
      Description: Description,
      priceList: [
        { type: "SALE", price: SALE },
        { type: "WHOSALE", price: WHOLESALE },
        { type: "BANK", price: BANK }
      ],
      categoryId: categoryId,
      brandId: brandId,
      measurementId: measurementId,
      discount: discount,
      attachmentList: images,
    }
    console.log(DateList)
    console.log('Imagename', images);
    await axios.post(`${import.meta.env.VITE_BASE_URL}/product/`, {
      headers: { Authorization: "Bearer " + token },
      data: DateList
    }).then((res) => res.data)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Create Product</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="Name"
          rules={[
            {
              required: true,
              message: 'Please input your Product Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="SALE price"
          name="SALE"
          rules={[
            {
              required: true,
              message: 'Please input your SALE price!',
            },
          ]}
        >
          <InputNumber inputMode='numeric' />
        </Form.Item>

        <Form.Item
          label="WHOLESALE price"
          name="WHOLESALE"
          rules={[
            {
              required: true,
              message: 'Please input your WHOLESALE price!',
            },
          ]}
        >
          <InputNumber inputMode='numeric' />

        </Form.Item>

        <Form.Item
          label="BANK price"
          name="BANK"
          rules={[
            {

              required: true,
              message: 'Please input your BANK price!',
            },
          ]}
        >

          <InputNumber inputMode='numeric' />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="Description"
          rules={[
            {
              required: true,
              message: 'Please input your Description!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product categoryId"
          name="categoryId"
          rules={[
            {

              required: true,
              message: 'Please input your categoryId!',
            },
          ]}
        >
          <InputNumber inputMode='numeric' />
        </Form.Item>

        <Form.Item
          label="Product brandId"
          name="brandId"
          rules={[
            {

              required: true,
              message: 'Please input your brandId!',
            },
          ]}
        >
          <InputNumber inputMode='numeric' />
        </Form.Item>
        <Form.Item
          label="Product measurementId"
          name="measurementId"
          rules={[
            {
              required: true,
              message: 'Please input your measurementId!',
            },
          ]}
        >
          <InputNumber inputMode='numeric' />
        </Form.Item>

        <Form.Item
          label="discount"
          name="discount"
          rules={[
            {

              required: true,
              message: 'Please input your discount!',
            },
          ]}
        >
          <InputNumber inputMode='numeric' />
        </Form.Item>

        <Form.Item label="Images" valuePropName="fileList">
          <Upload listType="picture-card" onChange={(props) => { ImageSort(props) }}>
            <div>
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 10,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateProduct