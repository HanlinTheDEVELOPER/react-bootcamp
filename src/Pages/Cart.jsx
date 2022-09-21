import React, { useState, useContext } from "react";

import { Context } from "../Context";
import CartItem from "../Component/CartItem";

const Cart = () => {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");

  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const placeOrder = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  };
  const elements = cartItems.map((each) => (
    <CartItem key={each.id} item={each} />
  ));

  return (
    <main className="cart-page">
      <h1>Check Out</h1>
      {elements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  );
};

export default Cart;
