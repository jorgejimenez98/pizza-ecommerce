import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addUserOrder } from "../redux/actions/order.actions";
import { setSnackbar } from "../redux/actions/snackbar.actions";
import { OrderActionTypes } from "../redux/types/order.types";
// Components
import { Loader, Message } from "../containers";
import {
  ShippingAdress1FormControl,
  ShippingAdress2FormControl,
  CountryCityFormControls,
  PhoneFormControl,
} from "../core/form-controls";
// Formik
import { useFormik } from "formik";
import { initialAdressValues, adressSchema } from "../core/formik-validations";
// Material Mui Components
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

function ShippinAdress({
  open,
  handleClose,
  subtotalPrice,
  cartItems,
  history,
}) {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.orders.add);

  useEffect(() => {
    if (success) {
      const message = "Order placed successfully";
      dispatch(setSnackbar(true, "success", message));
      dispatch({ type: OrderActionTypes.ADD_ORDER.RESET });
      history.push("/");
    }

    return () => {
      dispatch({ type: OrderActionTypes.ADD_ORDER.RESET });
    };
  }, [success, dispatch, history]);

  const formik = useFormik({
    initialValues: initialAdressValues,
    validationSchema: adressSchema,
    onSubmit: (values) => {
      dispatch(addUserOrder({ form: values, subtotalPrice, cartItems }));
    },
  });

  return (
    <Dialog fullWidth maxWidth={"lg"} open={open} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>
          <div>
            Insert Shipping Adress{" "}
            <p className="float-right">Total Price: {subtotalPrice} cup</p>{" "}
          </div>
        </DialogTitle>
        <DialogContent>
          {error && <Message type="error" message={error} />}
          <ShippingAdress1FormControl formik={formik} />
          <ShippingAdress2FormControl formik={formik} />
          <CountryCityFormControls formik={formik} />
          <PhoneFormControl formik={formik} />
        </DialogContent>
        <DialogActions>
          {loading && <Loader />}
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit" variant="contained">
            Finish Order
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default ShippinAdress;
