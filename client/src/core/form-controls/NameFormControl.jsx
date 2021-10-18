import React from "react";
import { Form } from "react-bootstrap";

function NameFormControl({ formik }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="float-left">Name</Form.Label>
      <Form.Control
        type="name"
        placeholder="Enter name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        isInvalid={formik.touched.name && Boolean(formik.errors.name)}
        isValid={formik.touched.name && !Boolean(formik.errors.name)}
      />
      {formik.touched.name && Boolean(formik.errors.name) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{formik.errors.name}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default NameFormControl;
