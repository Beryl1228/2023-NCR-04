// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <li>
      {item.name} - ${item.price} x {item.quantity}
    </li>
  );
};

export default CartItem;