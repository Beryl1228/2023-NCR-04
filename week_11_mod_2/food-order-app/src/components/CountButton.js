import React, { useState } from "react";
import "../styles/global.css"
import styled from 'styled-components';


const StyledButton = styled.button`
  border-radius: 50%;
  outline: none;
  width: 5px;
  height: 5px; 
  background-color: #007bff;
  color: white;
  padding: 20px;
  font-size: 25px;
  cursor: pointer;
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const CountButton = (props) =>{
    const [currentCount,setCurrentCount] = useState(null);
    const [currentPrice, setCurrentPrice] = useState(0);
    
    const handleIncrement =()=>{
        setCurrentCount(currentCount + 1)
        setCurrentPrice(currentPrice + props.price) //update the price
    }

    const handleDecrement = ()=>{
        if (currentCount > 0) {
            setCurrentCount(currentCount - 1);
            setCurrentPrice(currentPrice - props.price);
          }
    }


  return(
    <div>
      <StyledButton onClick={handleIncrement}>+</StyledButton>
      <div>Quantity: {currentCount}</div>
      <StyledButton onClick={handleDecrement}>-</StyledButton>
      <div>Price: $ {currentPrice.toFixed(2)}</div>
    </div>
  )
}

export default CountButton;