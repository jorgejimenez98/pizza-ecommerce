import React from "react";
import { Form } from "react-bootstrap";

function EmailAdressFormControl({ formik }) {
  return (
    <Form.Group className="mb-4 mt-4">
      <Form.Label className="float-left">Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        isInvalid={formik.touched.email && Boolean(formik.errors.email)}
        isValid={formik.touched.email && !Boolean(formik.errors.email)}
      />
      {formik.touched.email && Boolean(formik.errors.email) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{formik.errors.email}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default EmailAdressFormControl;
