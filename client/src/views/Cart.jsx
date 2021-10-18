import React from "react";
import { useSelector } from "react-redux";
import { CartItemsList, SubtotalPrice } from "../components";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart.cartItems);

  const deleteItem = (id) => {
    console.log("Delete Item", id);
  };

  return (
    <div className="row pl-4 pr-4">
      <div className="col-md-6">
        <CartItemsList cartItems={cartItems} deleteItem={deleteItem} />
      </div>
      <div className="col-md-6">
        <SubtotalPrice cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
