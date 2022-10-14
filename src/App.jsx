import {
  Routes,
  Route,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { Layout } from 'antd';
const { Content } = Layout;

import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Login from './pages/Login'
import CreateProduct from "./components/CreateProduct";

function App() {
  const [login, setLogin] = useState(false)

  useEffect(() => {
    const checkToken = localStorage.getItem('token')
    if (checkToken) setLogin(true)
  }, [])

  return (
    <Layout>
      <Navbar login={login} />
      <Content>
        <Routes>
          {login ?
            <>
              <Route path="/" index element={<Home />} />
              <Route path="/create" index element={<CreateProduct />} />
            </>
            :
            <Route path="*" element={<Login />} />
          }
        </Routes>
      </Content>
    </Layout>

  );
}

export default App;
