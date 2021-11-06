import React from "react";
import { Form } from "react-bootstrap";

function DescriptionFormControl({ formik }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="float-left">Description</Form.Label>
      <Form.Control
        type="text"
        as="textarea"
        placeholder="Enter description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        isInvalid={
          formik.touched.description && Boolean(formik.errors.description)
        }
        isValid={
          formik.touched.description && !Boolean(formik.errors.description)
        }
      />
      {formik.touched.description && Boolean(formik.errors.description) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{formik.errors.description}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default DescriptionFormControl;
