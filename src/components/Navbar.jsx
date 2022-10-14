
import React, { useState, useEffect } from "react";
import { Button, Menu } from "antd";
import { Link ,} from "react-router-dom";

const Navbar = ({ login }) => {
  return (
    <nav className="navbar">
      <Menu mode="horizontal" theme="dark" style={{paddingTop:"15px", paddingBottom:"15px"}} defaultSelectedKeys={'/'} >
        <Menu.Item key="home">
          <Link to='/'>
            Home
          </Link>
        </Menu.Item>
        {login && <Menu.Item key="create">
          <Link to='/create'>
            Create Product
          </Link>
        </Menu.Item>}
      </Menu>
    </nav>
  );
};

export default Navbar;