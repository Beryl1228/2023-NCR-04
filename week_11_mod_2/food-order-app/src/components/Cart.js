import React, { useEffect, useState } from 'react';
import "../styles/global.css"
import CartItem from './CartItem';


const Cart = ({ cartData }) => {
  const [totalQuantity, setTotalQuantity] = useState(0); // State to track the total quantity of items in the cart
  const [totalPrice, setTotalPrice] = useState(0); // State to track the total price of items in the cart

  useEffect(() => {
    // Calculate the new total quantity and total price whenever the items in the cart change
    const newTotalQuantity = Object.values(cartData).reduce((acc, cartItem) => acc + cartItem.count, 0);
    const newTotalPrice = Object.values(cartData).reduce((acc, cartItem) => acc + cartItem.count * cartItem.item.price, 0);

    setTotalQuantity(newTotalQuantity); // Update the total quantity state
    setTotalPrice(newTotalPrice); // Update the total price state
  }, [cartData]);

  const ClearCarthandler = () => {
    // Clear the cart by resetting total quantity, total price, and the items array
    setTotalQuantity(0);
    setTotalPrice(0);
    Object.keys(cartData).forEach(key => delete cartData[key]);

  }

  function getItems() {
    return Object.values(cartData)
  }

  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      <CartItem cartItems={getItems()}/> {/* Render the list of items in the cart */}

      <div style={{
        textShadow: "1px 1px 0.5px #CFB96A" ,
        textAlign:"center",
        marginLeft:"50%",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f5f5f5",
        position: "relative",
        marginTop:"70%",
        fontSize:"15px",
        transform: "translateY(-50%)",
      }}>
        <p>Total Quantity: {totalQuantity}</p> {/* Display the total quantity of items */}
        <p>Total Price: ${totalPrice.toFixed(2)}</p> {/* Display the total price of items */}
      </div>
      <button style={{color:"black", backgroundColor:"#CFB96A", marginLeft:"65%", width:"130px"}} onClick={ClearCarthandler}>Clear Cart</button> {/* Button to clear the cart */}
      <button style={{color:"white", backgroundColor:"#B6BB78", marginLeft:"65%", width:"130px", fontSize:"15px"}} >Place Your Order</button> {/* Button to place the order */}
    </div>
  );
};

export default Cart;
