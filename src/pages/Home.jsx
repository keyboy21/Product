import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import axios from 'axios'
import { Col, Row, Button, Modal } from 'antd';
import { productFetcher } from '../fetcher/Productfetcher';

const Home = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setproduct] = useState('');

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, []);

  const showModal = (name, id) => {
    setIsModalOpen(true);
    setproduct({ name, id })
  };

  const DeleteP = async () => {
    await axios.delete(`https://profitmodel-server.herokuapp.com/api/product/${product.id}`, {
      headers: { Authorization: "Bearer " + token }
    }).then((res) => res.data)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { data, error } = useSWR(['https://profitmodel-server.herokuapp.com/api/product', token], productFetcher)
  console.log('Data', data);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        {data.data?.map((item) => (
          <Col key={item.id} span={6} style={{ border: "1px solid black", justifyContent: "center", margin: "5px", borderRadius: "8px" }}>
            <ul>
              <li>
                Name: <strong>{item.name}</strong>
              </li>
              <li>
                Brand: {item.brand.name}
              </li>
              <li>
                description: {item.description}
              </li>
              <li>
                Category: {item.category.name}
              </li>
              <li>
                Prices:
                <ol>
                  {item.prices?.map((price) => (
                    <li key={price.id}>
                      {price.type}: {price.price}
                    </li>
                  ))}
                </ol>
              </li>
            </ul>
            <Button type="danger" onClick={() => showModal(item.name, item.id)}>
              Delete
            </Button>
          </Col>
        ))}
      </Row>
      <Modal title="You deleted this product" open={isModalOpen} onOk={DeleteP} onCancel={handleCancel}>
        Product Name :  <strong>{product.name}</strong>
      </Modal>
    </>
  )
}

export default Home