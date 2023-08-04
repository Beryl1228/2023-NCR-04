import React, { useEffect, useState } from 'react';
import "../styles/global.css"

const Cart = ({ items }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const newTotalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
  }, [items]);

  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
