import React, { useEffect } from "react";
import { editOrder } from "../../../../redux/actions/order.actions";
import { OrderActionTypes } from "../../../../redux/types/order.types";
import { useDispatch, useSelector } from "react-redux";

function StatusColumn({ status, orderId }) {
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.orders.edit);

  useEffect(() => {
    if (success) {
      dispatch({ type: OrderActionTypes.EDIT.REQUEST });
    }
  }, [success, dispatch]);

  const handleClick = () => {
    dispatch(editOrder(orderId));
  };

  return (
    <React.Fragment>
      {status === "Pending" ? (
        <button type="button" onClick={handleClick} className="btn btn-primary">
          Peding
        </button>
      ) : (
        <div className="btn btn-outline-secondary">Delivered</div>
      )}
    </React.Fragment>
  );
}

export default StatusColumn;
