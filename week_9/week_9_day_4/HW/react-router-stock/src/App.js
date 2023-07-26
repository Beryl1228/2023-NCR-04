//Import route and our components
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import StockPage from "./pages/StockPage";
import Nav from "./components/Nav";
import ViewPostPage from './pages/ViewStockPage';



function App() {
  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/stocks" element={<StockPage to="/stocks"/>}/>
      <Route path="/stocks/:symbol" element={<ViewPostPage to="/stocks"/>}/>
      <Route path="/about" element={<AboutPage />}/>
    </Routes>
    </div>
  );
}

export default App;
