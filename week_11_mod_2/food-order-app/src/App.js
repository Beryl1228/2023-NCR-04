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
  const cartData ={ } 
  // { id => { item: ..., count: ... } }

  const addToCart = (item, count) => {
    console.log(`Adding ${count} item(s) to cart:`, item);
    
    //grab item info through itemid, check if they are in the cart
    let existing = cartData[item.id]
    //if they are in cart, set the count number
    if (existing) {
      existing.count = count;
      if (existing.count <= 0) {
        // remove it - if the user decreased the count to zero 
        delete cartData[item.id]
      }
    } else {
      // cartdata = { item.id => { item: ..., count: ... } }
      cartData[item.id] = { item: item, count: count }
    }

    
    // setCartItems((prevCartItems) => [...prevCartItems, item]);  // Add the selected item to the cart 
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
          <Route path="/menu" element={<MenuPage menuData={menuData} cartData={cartData} onAddToCart={addToCart}  />} />
          <Route path="/cart" element= {<Cart cartData={cartData}  />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
