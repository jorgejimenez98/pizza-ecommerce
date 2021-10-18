import * as React from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, CssBaseline } from "@mui/material";
import LocalPizzaOutlinedIcon from "@material-ui/icons/LocalPizzaOutlined";
// Formik
import { useFormik } from "formik";
import { initialLoginValues, loginSchema } from "../core/formik-validations";
// Form Controls
import {
  EmailAdressFormControl,
  PasswordFormControl,
} from "../core/form-controls";

export default function Login() {
  const formik = useFormik({
    initialValues: initialLoginValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Login", values);
    },
  });

  return (
    <div className="login center-form">
      <CssBaseline />
      <div className="container text-center">
        <div className="w-50 m-auto">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} className="m-auto">
            <LocalPizzaOutlinedIcon />
          </Avatar>
          <h3>Sign in</h3>
          <form onSubmit={formik.handleSubmit}>
            <EmailAdressFormControl formik={formik} />
            <PasswordFormControl formik={formik} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Sign In
            </Button>
            <div className="text-center">
              <Link to="/register" className="text-dark">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
