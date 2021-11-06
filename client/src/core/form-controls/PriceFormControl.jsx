import React from "react";
import { Form } from "react-bootstrap";

function PriceFormControl({ name, value, onChange, touched, errors }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="float-left text-capitalize">{name}</Form.Label>
      <Form.Control
        type="number"
        placeholder={`Enter ${name}`}
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={touched && Boolean(errors)}
        isValid={touched && !Boolean(errors)}
      />
      {touched && Boolean(errors) && (
        <Form.Control.Feedback type="invalid">
          <span className="float-left">{errors}</span>
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default PriceFormControl;
