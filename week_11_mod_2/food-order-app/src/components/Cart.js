import React, { useEffect, useState } from 'react';
import "../styles/global.css"
import CartItem from './CartItem';
import MenuPage from '../pages/MenuPage';

const Cart = ({ items }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const newTotalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  }, [items]);

  const ClearCarthandler = ()=>{
    setTotalQuantity(0);
    setTotalPrice(0)
    items.length = 0;
  }

  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      <CartItem items={items}/>

      <div style={{
        textShadow: "1px 1px 0.5px #CFB96A" ,
        marginLeft:"50%",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f5f5f5",
        position: "relative",
        marginTop:"70%",
        fontSize:"15px",
        transform: "translateY(-50%)",
      }}>

      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
      <button style={{color:"black", backgroundColor:"#CFB96A", marginLeft:"65%", width:"130px"}} onClick={ClearCarthandler}>Clear Cart</button>
      <button style={{color:"white", backgroundColor:"#B6BB78", marginLeft:"65%", width:"130px", fontSize:"15px"}} >Place Your Order</button>
    </div>
  );
};

export default Cart;
