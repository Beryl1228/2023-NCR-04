// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Cart from './components/Cart';
import fetchData from './data'; // Import the fetchData function


const App = () => {
  const [menuData, setMenuData] = useState([]);// State to store menu data
  const [cartItems, setCartItems] = useState([]); // State to store items in the cart
  
  // create a state object to track the total count of each item selecetd 
  // const cartData =[
  //   {id:0, ItemData:item, count:1},
  //   {id:1, ItemData:item, count:1},
  //   {id:2, ItemData:item, count:1},
  //   {id:3, ItemData:item, count:1},
  //   {id:4, ItemData:item, count:1},
  //   {id:5, ItemData:item, count:1},
  //   {id:6, ItemData:item, count:1},
  //   {id:7, ItemData:item, count:1},
  //   {id:8, ItemData:item, count:1},
  //   {id:9, ItemData:item, count:1},
  //   {id:10, ItemData:item, count:1},
  // ]

  const addToCart = (item ,count) => {
    console.log('Adding item to cart:', item);
    setCartItems((prevCartItems) => [...prevCartItems, item]);  // Add the selected item to the cart
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await fetchData(); // Fetch the data using the fetchData function
      if (Array.isArray(data)) {
        setMenuData(data);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Pass the menuData to MenuPage */}
          <Route path="/menu" element={<MenuPage menuData={menuData} onAddToCart={addToCart}  />} />
          <Route path="/cart" element= {<Cart items={cartItems}  />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
