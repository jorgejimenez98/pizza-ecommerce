import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart.actions";
import { CartItemsList, SubtotalPrice } from "../components";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart.cartItems);

  const deleteItem = (id) => {
    console.log("Delete Item", id);
  };

  const addOrSubstract = (isAdd, pizza, quantity, varient) => {
    if (isAdd) {
      dispatch(addToCart(pizza, quantity + 1, varient));
    } else if (!isAdd && quantity !== 1) {
      dispatch(addToCart(pizza, quantity - 1, varient));
    }
  };

  return (
    <div className="row pl-4 pr-4">
      <div className="col-md-6">
        <CartItemsList
          cartItems={cartItems}
          deleteItem={deleteItem}
          addOrSubstract={addOrSubstract}
        />
      </div>
      <div className="col-md-6">
        <SubtotalPrice cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Cart;
