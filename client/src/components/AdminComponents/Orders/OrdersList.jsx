import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrdersList } from "../../../redux/actions/order.actions";
import { Loader, Message } from "../../../containers";
import { orderlistOptions, orderscolumns } from "../../../core/mui-datatable";
import MUIDataTable from "mui-datatables";

function OrdersList({ history }) {
  const dispatch = useDispatch();

  // User Info Selector:
  const { user_login } = useSelector((state) => state.users.login);
  // Get Orders Selector
  const { loading, error, orders } = useSelector((state) => state.orders.list);

  useEffect(() => {
    if (!user_login) {
      history.push("/");
    } else if (!user_login.isAdmin) {
      history.push("/403");
    } else {
      dispatch(getOrdersList());
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
          <div className="m-5">
            <MUIDataTable
              title={`Ordeers List(${orders?.length})`}
              data={orders}
              columns={orderscolumns}
              options={orderlistOptions}
            />
          </div>
        )
      )}
    </React.Fragment>
  );
}

export default OrdersList;
