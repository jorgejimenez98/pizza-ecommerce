import React from "react";
import { Form } from "react-bootstrap";

function ShippingAdress2FormControl({ formik }) {
  return (
    <Form.Group className="mt-3">
      <Form.Label className="float-left">Shipping Adress 2</Form.Label>
      <Form.Control
        type="text"
        placeholder="Shipping Address 2"
        name="shippingAddress2"
        value={formik.values.shippingAddress2}
        onChange={formik.handleChange}
        isInvalid={
          formik.touched.shippingAddress2 &&
          Boolean(formik.errors.shippingAddress2)
        }
        isValid={
          formik.touched.shippingAddress2 &&
          !Boolean(formik.errors.shippingAddress2)
        }
      />
      {formik.touched.shippingAddress2 &&
        Boolean(formik.errors.shippingAddress2) && (
          <Form.Control.Feedback type="invalid">
            <span className="float-left">{formik.errors.shippingAddress2}</span>
          </Form.Control.Feedback>
        )}
    </Form.Group>
  );
}

export default ShippingAdress2FormControl;
