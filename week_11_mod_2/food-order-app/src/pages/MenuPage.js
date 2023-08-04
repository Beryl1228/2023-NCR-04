import React from 'react';
import fetchData from '../data';
import CountButton from '../components/CountButton';
import styled from 'styled-components';
import HoverText from '../components/HoverText';
import "../styles/global.css";

const Wrapper = styled.div`
   padding-left: 100px;
   display: flex;
   flex-direction: row;
`;

const MenuPage = ({ menuData, onAddToCart }) => {

  if (!onAddToCart) {
    console.error("onAddToCart is not defined")
  }

  return (
    <div>
      <h1>Menu</h1>
      {menuData.map((item) => (
        <div className='burgerContainer' key={item.id}>
          <div className='burgerList'>
            <h2>{item.name}</h2>
            <HoverText item={item} />
            <p>{item.description}</p>
          </div>
          <Wrapper>
            <aside>
              <CountButton item={item} onAddToCart={onAddToCart} price={item.price} />
            </aside>
          </Wrapper>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
