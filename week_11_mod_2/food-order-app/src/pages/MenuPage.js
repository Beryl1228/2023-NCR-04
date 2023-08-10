import React from 'react';
import CountButton from '../components/CountButton';
import styled from 'styled-components';
import HoverText from '../components/HoverText';
import "../styles/global.css";

const Wrapper = styled.div`
   padding-left: 100px;
   display: flex;
   flex-direction: row;
`;

const MenuPage = ({ menuData, cartData, onAddToCart }) => {
  // If onAddToCart is not defined, print an error message
  if (!onAddToCart) {
    console.error("onAddToCart is not defined")
  }
  
  function getInitialCount(id) {
    //get initial count from the cart through cartData.id
    const existing = cartData[id]
    if (existing) {
      return existing.count
    }
    return 1
  }

  // console.log(menuData)
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
              {/* Pass the onAddToCart function and price to the CountButton component */}
              <CountButton item={item} count={getInitialCount(item.id)} onAddToCart={onAddToCart} price={item.price} />
            </aside>
          </Wrapper>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
