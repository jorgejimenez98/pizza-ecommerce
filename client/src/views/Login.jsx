import * as React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Avatar, Button, CssBaseline, Box } from "@mui/material";
import LocalPizzaOutlinedIcon from "@material-ui/icons/LocalPizzaOutlined";

export default function Login() {
  return (
    <div className="login center-form">
      <CssBaseline />
      <div className="container text-center">
        <div className="w-50 m-auto">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} className="m-auto">
            <LocalPizzaOutlinedIcon />
          </Avatar>
          <h3>Sign in</h3>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="float-left">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="float-left">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
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
          </Box>
        </div>
      </div>
    </div>
  );
}
