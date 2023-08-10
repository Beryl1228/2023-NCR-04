import React, { useState } from "react";
import "../styles/global.css"
import styled from 'styled-components';


const StyledButton = styled.button`
  border-radius: 50%;
  outline: none;
  width: 20px;
  height: 20px; 
  background-color: #B57629;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex; 
  justify-content: center; 
  align-items: center;
  border: none; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  transition: background-color 0.3s ease; 
  margin:0 5px;

  
  &:hover {
    background-color: #8C611E; 
  }
`;



const CountButton = ({ item, count, price, onAddToCart }) => {
  const [currentCount, setCurrentCount] = useState(count);
  const [currentPrice, setCurrentPrice] = useState(price);

  const handleIncrement = () => {
    setCurrentCount(currentCount + 1);
    setCurrentPrice(currentPrice + price);
  };

  const handleDecrement = () => {
    if (currentCount > 0) {
      setCurrentCount(currentCount - 1);
      setCurrentPrice(currentPrice - price);
    }
  };

  // Handle adding the item to the cart
  const handleAddToCart = () => {
    console.log('Adding item to cart:', item);
    // Check if the onAddToCart callback function is defined
    if (onAddToCart) {
      // If onAddToCart is defined, call the callback function with the item information and the currentCount
      onAddToCart({...item}, currentCount)
    } else {
      // If onAddToCart is not defined, log an error message to the console
      console.error("onAddToCart is not defined")
    }
  };
  console.log(currentCount)
  return (
    <div className="countbutton">
      <StyledButton onClick={handleIncrement}> + </StyledButton>
      <div> {currentCount} </div>
      <StyledButton onClick={handleDecrement}> - </StyledButton>
      <div>Price: $ {currentPrice.toFixed(2)}</div>
      <button className="addtoCart" onClick={handleAddToCart}>Add to Cart</button> 
    </div>
  );
};

export default CountButton;