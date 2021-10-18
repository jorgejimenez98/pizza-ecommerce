import * as React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Avatar, Button, CssBaseline, Box } from "@mui/material";
import LocalPizzaOutlinedIcon from "@material-ui/icons/LocalPizzaOutlined";

export default function Register() {
  return (
    <div className="register center-form">
      <CssBaseline />
      <div className="container text-center">
        <div className="w-50 m-auto">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} className="m-auto">
            <LocalPizzaOutlinedIcon />
          </Avatar>
          <h3>Register</h3>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="float-left">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="float-left">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="float-left">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="float-left">Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
            </Form>
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
          </Box>
        </div>
      </div>
    </div>
  );
}
