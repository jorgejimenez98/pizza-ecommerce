import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, CssBaseline } from "@mui/material";
import LocalPizzaOutlinedIcon from "@material-ui/icons/LocalPizzaOutlined";
import { Loader, Message } from "../containers";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/users.actions";
// Formik
import { useFormik } from "formik";
import { initialLoginValues, loginSchema } from "../core/formik-validations";
// Form Controls
import {
  EmailAdressFormControl,
  PasswordFormControl,
} from "../core/form-controls";

export default function Login({ history, location }) {
  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  // Login Selector
  const { loading, error, user_login } = useSelector(
    (state) => state.users.login
  );

  const formik = useFormik({
    initialValues: initialLoginValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (user_login) {
      history.push(redirect);
    }
  }, [user_login, dispatch, history, redirect]);

  return (
    <div className="login center-form">
      <CssBaseline />
      <div className="container text-center">
        <div className="w-50 m-auto">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} className="m-auto">
            <LocalPizzaOutlinedIcon />
          </Avatar>
          <h3>Sign in</h3>

          {error && <Message type="error" message={error} />}
          <form onSubmit={formik.handleSubmit}>
            <EmailAdressFormControl formik={formik} />
            <PasswordFormControl formik={formik} />

            {loading && <Loader />}
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
