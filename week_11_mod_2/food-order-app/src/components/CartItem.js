// src/components/CartItem.js
import React from 'react';

const CartItem = ({ items }) => {
  return (
    <div>
    <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img style={{width:"50px", marginBottom:"-15px"}}src={item.image_url} alt={item.name}/>
            {item.name} - {item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default CartItem;