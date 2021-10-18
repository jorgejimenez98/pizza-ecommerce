import React from "react";
import { Form } from "react-bootstrap";

function PasswordWithValidationFormControl({ formik }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="float-left">Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        name="newPassword"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        isInvalid={
          formik.touched.newPassword && Boolean(formik.errors.newPassword)
        }
        isValid={
          formik.touched.newPassword && !Boolean(formik.errors.newPassword)
        }
      />
      {formik.touched.newPassword && Boolean(formik.errors.newPassword) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{formik.errors.newPassword}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default PasswordWithValidationFormControl;
