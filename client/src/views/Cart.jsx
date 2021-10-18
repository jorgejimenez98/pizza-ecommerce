import React from "react";
import { CartItemsList, SubtotalPrice } from "../components";

function Cart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <CartItemsList />
        </div>
        <div className="col-md-4">
          <SubtotalPrice />
        </div>
      </div>
    </div>
  );
}

export default Cart;
