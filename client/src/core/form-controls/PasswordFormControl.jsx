import React from "react";
import { Form } from "react-bootstrap";

function PasswordFormControl({ formik }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="float-left">Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        isInvalid={formik.touched.password && Boolean(formik.errors.password)}
        isValid={formik.touched.password && !Boolean(formik.errors.password)}
      />
      {formik.touched.password && Boolean(formik.errors.password) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{formik.errors.password}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default PasswordFormControl;
