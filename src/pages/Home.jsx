import { useState, useEffect } from 'react'
import { Col, Row } from 'antd';
import { productFetcher } from '../fetcher/Productfetcher';
import useSWR from 'swr'
import { Card } from 'antd'

const Home = () => {
  const [token, setToken] = useState()

  useEffect(() => {
    const Token = localStorage.getItem('token')
    setToken(Token)
  }, [])

  const { data, error } = useSWR(['https://profitmodel-server.herokuapp.com/api/product', token], productFetcher)

  console.log(data)
  console.log(error);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </>
  )
}

export default Home