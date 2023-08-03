// src/components/Menu.js
import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  // Assuming you have some menu items stored in state or props
  // For the sake of simplicity, let's assume an example menuItems array
  const menuItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    // Add more menu items as needed
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;