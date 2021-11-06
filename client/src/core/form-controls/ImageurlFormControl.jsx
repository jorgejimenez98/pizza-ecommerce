import React from "react";
import { Form } from "react-bootstrap";

function ImageurlFormControl({ formik }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="float-left">Image Url</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Image Url"
        name="imageUrl"
        value={formik.values.imageUrl}
        onChange={formik.handleChange}
        isInvalid={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
        isValid={formik.touched.imageUrl && !Boolean(formik.errors.imageUrl)}
      />
      {formik.touched.imageUrl && Boolean(formik.errors.imageUrl) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{formik.errors.imageUrl}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default ImageurlFormControl;
