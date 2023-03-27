import React from "react";
import "./cart.css";

const cart = ({ cart }) => {
  // const cart = props.cart; option 1
  // const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const gradTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h3>Order SUmmary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice} </p>
      <p>Total Shipping: ${totalShipping} </p>
      <p>Tax: ${tax.toFixed(2)} </p>
      <h6>Grand Total:${gradTotal.toFixed(2)}</h6>
    </div>
  );
};

export default cart;
