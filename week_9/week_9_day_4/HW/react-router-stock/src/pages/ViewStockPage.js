import React from 'react';
import { useParams } from 'react-router-dom';
import stocks from '../data'; // Import the 'stocks' variable from data.js

const ViewPostPage = () => {
  const { symbol } = useParams();
  const stock = stocks.find((s) => s.symbol === symbol);

  if (!stock) {
    return <div>Stock not found.</div>;
  }

  return (
    <div>
      <h1>{`Name: ${stock.name}`}</h1>
      <p>{`Price: ${stock.lastPrice}`}</p>
    </div>
  );
};

export default ViewPostPage;
