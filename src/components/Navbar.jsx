import { useEffect } from 'react'
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem('token')

  useEffect(() => {
  }, [token]);

  return (
    <nav className="navbar">
      <Menu mode="horizontal" theme="dark" style={{ paddingTop: "15px", paddingBottom: "15px" }} defaultSelectedKeys={'/'} >
        <Menu.Item key="home">
          <Link to='/'>
            Home
          </Link>
        </Menu.Item>
        {token && <Menu.Item key="create">
          <Link to='/create'>
            Create Product
          </Link>
        </Menu.Item>}
      </Menu>
    </nav>
  );
};

export default Navbar;