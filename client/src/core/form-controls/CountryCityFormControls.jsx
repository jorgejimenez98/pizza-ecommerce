import React from "react";
import { Form } from "react-bootstrap";

function CountryCityFormControls({ formik }) {
  return (
    <div className="row">
      <div className="col-md-6">
        <Form.Group className="mt-3">
          <Form.Label className="float-left">Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            isInvalid={formik.touched.country && Boolean(formik.errors.country)}
            isValid={formik.touched.country && !Boolean(formik.errors.country)}
          />
          {formik.touched.country && Boolean(formik.errors.country) && (
            <Form.Control.Feedback type="invalid">
              <span className="float-left">{formik.errors.country}</span>
            </Form.Control.Feedback>
          )}
        </Form.Group>
      </div>
      <div className="col-md-6">
        <Form.Group className="mt-3">
          <Form.Label className="float-left">City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            isInvalid={formik.touched.city && Boolean(formik.errors.city)}
            isValid={formik.touched.city && !Boolean(formik.errors.city)}
          />
          {formik.touched.city && Boolean(formik.errors.city) && (
            <Form.Control.Feedback type="invalid">
              <span className="float-left">{formik.errors.city}</span>
            </Form.Control.Feedback>
          )}
        </Form.Group>
      </div>
    </div>
  );
}

export default CountryCityFormControls;
