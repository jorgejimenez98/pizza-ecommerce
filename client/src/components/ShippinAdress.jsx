import React, { useEffect } from "react";
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
import {
  ShippingAdress1FormControl,
  ShippingAdress2FormControl,
  CountryCityFormControls,
  PhoneFormControl,
} from "../core/form-controls";

function ShippinAdress({ open, handleClose, subtotalPrice }) {
  useEffect(() => {
    formik.resetForm();
    // eslint-disable-next-line
  }, []);
  const formik = useFormik({
    initialValues: initialAdressValues,
    validationSchema: adressSchema,
    onSubmit: (values) => {
      console.log("ADD", values);
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
          <ShippingAdress1FormControl formik={formik} />
          <ShippingAdress2FormControl formik={formik} />
          <CountryCityFormControls formik={formik} />
          <PhoneFormControl formik={formik} />
        </DialogContent>
        <DialogActions>
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
