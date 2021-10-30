import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrders } from "../redux/actions/order.actions";
import { Loader, Message } from "../containers";

function UserOrders() {
  const dispatch = useDispatch();

  // User Info Selector:
  const { user_login } = useSelector((state) => state.users.login);
  // Get User Orders Selector
  const { loading, error, orders } = useSelector(
    (state) => state.orders.userOrders
  );

  console.log(orders);

  useEffect(() => {
    if (user_login) {
      dispatch(getUserOrders(user_login._id));
    }
  }, [user_login, dispatch]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error} />
      ) : (
        <React.Fragment>All id ok</React.Fragment>
      )}
    </React.Fragment>
  );
}

export default UserOrders;
