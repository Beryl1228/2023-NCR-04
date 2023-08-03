// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around; 
  background-color: #D4B85C;
  padding: 10px;
  color: white;
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
      {/* <Link to="/cart">Cart</Link> */}
    </NavWrapper>
  );
};

export default Navbar;
