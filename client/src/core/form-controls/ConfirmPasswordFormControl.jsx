import React from "react";
import { Form } from "react-bootstrap";

function ConfirmPasswordFormControl({ formik }) {
  return (
    <Form.Group className="mb-3 mt-4">
      <Form.Label className="float-left">Confirm Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        isInvalid={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        isValid={
          formik.touched.confirmPassword &&
          !Boolean(formik.errors.confirmPassword)
        }
      />
      {formik.touched.confirmPassword &&
        Boolean(formik.errors.confirmPassword) && (
          <Form.Control.Feedback type="invalid">
            <span className="float-left">{formik.errors.confirmPassword}</span>
          </Form.Control.Feedback>
        )}
    </Form.Group>
  );
}

export default ConfirmPasswordFormControl;
