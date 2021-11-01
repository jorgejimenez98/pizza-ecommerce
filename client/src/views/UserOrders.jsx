import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrders } from "../redux/actions/order.actions";
import { Loader, Message } from "../containers";
import { listOptions, columns } from "../core/mui-datatable";
import MUIDataTable from "mui-datatables";

function UserOrders({ history }) {
  const dispatch = useDispatch();

  // User Info Selector:
  const { user_login } = useSelector((state) => state.users.login);
  // Get User Orders Selector
  const { loading, error, orders } = useSelector(
    (state) => state.orders.userOrders
  );

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else {
      dispatch(getUserOrders(user_login._id));
    }
  }, [user_login, dispatch, history]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error" message={error} />
      ) : (
        orders && (
          <div className="ml-5 mr-5">
            <MUIDataTable
              title={`My Ordeers (${orders?.length})`}
              data={orders}
              columns={columns}
              options={listOptions}
            />
          </div>
        )
      )}
    </React.Fragment>
  );
}

export default UserOrders;
