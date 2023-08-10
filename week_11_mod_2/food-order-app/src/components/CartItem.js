// src/components/CartItem.js
import React from 'react';

const CartItem = ({ cartItems }) => {
  return (
    <div>
    <ul>
        {cartItems.map((cartitem) => (
          <li key={cartitem.item.id}>
            <img style={{width:"50px", marginBottom:"-15px"}}src={cartitem.item.image_url} alt={cartitem.item.name}/>
            <span style={{color:"#593521", fontStyle:"italic" , marginLeft:"25px"}}>{cartitem.item.name} - {cartitem.count} x ${cartitem.item.price.toFixed(2)} = ${(cartitem.count * cartitem.item.price).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default CartItem;