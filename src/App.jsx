import {
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from 'antd';
const { Content } = Layout;

import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Login from './pages/Login'
import CreateProduct from "./components/CreateProduct";

function App() {
  const token = localStorage.getItem('token')

  return (
    <Layout>
      <Navbar token={token} />
      <Content style={{ height: "100vh" }}>
        <Routes>
          <Route path="/*" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" index element={<CreateProduct token={token} />} />
        </Routes>
      </Content>
    </Layout>

  );
}

export default App;
