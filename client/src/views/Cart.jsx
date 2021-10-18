import React from "react";
import { useSelector } from "react-redux";
import { CartItemsList, SubtotalPrice } from "../components";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart.cartItems);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="col-md-4">
          <SubtotalPrice />
        </div>
      </div>
    </div>
  );
}

export default Cart;
