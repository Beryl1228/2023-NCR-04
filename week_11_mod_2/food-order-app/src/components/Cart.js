// src/components/Cart.js
import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const [cart,setCart]=useState([])

  return (
    <div>
      <h2>Cart</h2>
      
      <ul>
        {cart.map(cartItem => (
          <li key={cartItem.id} item={cartItem} />
        ))}
      </ul>
      {/* Add checkout button or form here */}
    </div>
  );
};

export default Cart;