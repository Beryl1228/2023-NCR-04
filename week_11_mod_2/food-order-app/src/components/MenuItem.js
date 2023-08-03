// src/components/MenuItem.js
import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <li>
      {item.name} - ${item.price}
    </li>
  );
};

export default MenuItem;