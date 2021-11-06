import React from "react";
import Form from "react-bootstrap/Form";

function CategoryFormControl({ formik }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="float-left">Category</Form.Label>

      <select
        className="form-control"
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
      >
        <option value="veg">Vegan</option>
        <option value="nonveg">Non Veg</option>
      </select>

      {formik.touched.category && Boolean(formik.errors.category) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{formik.errors.category}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default CategoryFormControl;
