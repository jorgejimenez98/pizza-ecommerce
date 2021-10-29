import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cart.actions";
import { CartItemsList, ShippinAdress, SubtotalPrice } from "../components";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart.cartItems);
  const [open, setOpen] = useState(false);

  const subtotalPrice = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

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

  const handlePayButtom = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <SubtotalPrice
              subtotalPrice={subtotalPrice}
              handlePayButtom={handlePayButtom}
            />
          </div>
        </React.Fragment>
      )}

      <ShippinAdress open={open} handleClose={handleClose} />
    </div>
  );
}

export default Cart;
