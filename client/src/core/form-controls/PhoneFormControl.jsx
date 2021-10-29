import React from "react";
import { Form } from "react-bootstrap";

function PhoneFormControl({ formik }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="float-left">Phone</Form.Label>
      <Form.Control
        type="phone"
        placeholder="Phone"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        isInvalid={formik.touched.phone && Boolean(formik.errors.phone)}
        isValid={formik.touched.phone && !Boolean(formik.errors.phone)}
      />
      {formik.touched.phone && Boolean(formik.errors.phone) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{formik.errors.phone}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default PhoneFormControl;
