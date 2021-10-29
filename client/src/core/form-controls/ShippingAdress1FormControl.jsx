import React from "react";
import { Form } from "react-bootstrap";

function ShippingAdress1FormControl({ formik }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="float-left">Shipping Adress 1</Form.Label>
      <Form.Control
        type="text"
        placeholder="Shipping Address 1"
        name="shippingAddress1"
        value={formik.values.shippingAddress1}
        onChange={formik.handleChange}
        isInvalid={
          formik.touched.shippingAddress1 &&
          Boolean(formik.errors.shippingAddress1)
        }
        isValid={
          formik.touched.shippingAddress1 &&
          !Boolean(formik.errors.shippingAddress1)
        }
      />
      {formik.touched.shippingAddress1 &&
        Boolean(formik.errors.shippingAddress2) && (
          <Form.Control.Feedback type="invalid">
            <span className="float-left">{formik.errors.shippingAddress1}</span>
          </Form.Control.Feedback>
        )}
    </Form.Group>
  );
}

export default ShippingAdress1FormControl;
