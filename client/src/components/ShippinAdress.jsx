import React from "react";
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

function ShippinAdress({ open, handleClose, subtotalPrice }) {
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
            <p className="float-right">{subtotalPrice} cup</p>{" "}
          </div>
        </DialogTitle>
        <DialogContent></DialogContent>
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
