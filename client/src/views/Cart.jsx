import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cart.actions";
import { CartItemsList, SubtotalPrice } from "../components";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart.cartItems);

  const deleteItem = (id) => {
    dispatch(removeFromCart(id));
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
      {cartItems.length === 0 ? (
        <div className="mt-3 m-auto">
          <h3 className="text-muted ">There are no pizzas in the cart</h3>
        </div>
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
}

export default Cart;
