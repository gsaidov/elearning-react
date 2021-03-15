import React, { useRef } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const username = useRef(null);
  const password = useRef(null);
  const remember = useRef(null);

  const handleLogin = (event) => {
    username.current.focus();
    alert(
      `Username: ${username.current.value}, Password: ${password.current.value}, Remember: ${remember.current.checked}`
    );
    event.preventDefault();
  };

  return (
    <div className="container login py-5">
      <Form onSubmit={handleLogin}>
        <div className="row justify-content-center py-3">
          <div className="col-md-5">
            <p>
              Not yet registered?{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <small>Create an account</small>
              </Link>
            </p>
            <h3 className="py-3">Sign In</h3>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                innerRef={username}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row justify-content-center py-2">
          <div className="col-md-5">
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                innerRef={password}
              />
            </FormGroup>
            <FormGroup check className="pb-3">
              <Label check>
                <Input type="checkbox" name="remember" innerRef={remember} />
                Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
