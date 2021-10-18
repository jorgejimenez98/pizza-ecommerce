import * as React from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, CssBaseline } from "@mui/material";
import LocalPizzaOutlinedIcon from "@material-ui/icons/LocalPizzaOutlined";
// Formik
import { useFormik } from "formik";
import {
  initialRegisterValues,
  registerSchema,
} from "../core/formik-validations";
// Form Controls
import {
  EmailAdressFormControl,
  NameFormControl,
  PasswordWithValidationFormControl,
  ConfirmPasswordFormControl,
} from "../core/form-controls";

export default function Register() {
  const formik = useFormik({
    initialValues: initialRegisterValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Register", values);
    },
  });

  return (
    <div className="register center-form">
      <CssBaseline />
      <div className="container text-center">
        <div className="w-50 m-auto">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} className="m-auto">
            <LocalPizzaOutlinedIcon />
          </Avatar>
          <h3>Register</h3>
          <form onSubmit={formik.handleSubmit}>
            <NameFormControl formik={formik} />
            <EmailAdressFormControl formik={formik} />
            <PasswordWithValidationFormControl formik={formik} />
            <ConfirmPasswordFormControl formik={formik} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Submit
            </Button>
            <div className="text-center">
              <Link to="/login" className="text-dark">
                {"Already have an account? Sign In"}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
