import { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import FormFeedback from "reactstrap/lib/FormFeedback";

const Signup = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    touched: {
      fullName: false,
      email: false,
      password: false,
    },
  });

  const validate = (fullName, email, password) => {
    const errors = {
      fullName: "",
      email: "",
      password: "",
    };

    if (values.touched.fullName) {
      if (fullName.length < 2) {
        errors.fullName = "Name must be at least two characters.";
      } else if (fullName.length > 25) {
        errors.fullName = "Name must be less than 25 characters.";
      }
    }

    if (values.touched.email && !email.includes("@")) {
      errors.email = "Email must contain @ sign.";
    }

    if (values.touched.password && password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
  };

  const handleBlur = (field) => () => {
    setValues({
      ...values,
      touched: { ...values.touched, [field]: true },
    });
  };

  const handleChange = (event) => {
    const newValues = { ...values, [event.target.name]: event.target.value };
    setValues(newValues);
  };

  const handleSubmit = (event) => {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    event.preventDefault();
    setValues({
      fullName: "",
      email: "",
      password: "",
      touched: {
        fullName: false,
        email: false,
        password: false,
      },
    });
  };
  const errors = validate(values.fullName, values.email, values.password);

  return (
    <div className="container py-5">
      <div className="row justify-content-center pb-5">
        <h3>Sign Up</h3>
      </div>
      <Form onSubmit={handleSubmit}>
        <FormGroup row className="justify-content-center pb-3">
          <Label htmlFor="fullName" md={2}>
            <strong>Full Name</strong>
          </Label>
          <Col md={4}>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={values.fullName}
              invalid={!!errors.fullName}
              placeholder="Your full name"
              required
              onBlur={handleBlur("fullName")}
              onChange={handleChange}
            />
            <FormFeedback>{errors.fullName}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row className="justify-content-center pb-3">
          <Label htmlFor="email" md={2}>
            <strong>Email</strong>
          </Label>
          <Col md={4}>
            <Input
              type="email"
              id="email"
              name="email"
              value={values.email}
              invalid={!!errors.email}
              placeholder="name@email.com"
              required
              onBlur={handleBlur("email")}
              onChange={handleChange}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row className="justify-content-center">
          <Label htmlFor="password" md={2}>
            <strong>Password</strong>
          </Label>
          <Col md={4}>
            <Input
              type="password"
              name="password"
              id="password"
              value={values.password}
              invalid={!!errors.password}
              placeholder="password"
              required
              onBlur={handleBlur("password")}
              onChange={handleChange}
            />
            <FormFeedback>{errors.password}</FormFeedback>
          </Col>
        </FormGroup>
        <div className="row justify-content-center">
          <div className="col-md-4 offset-md-2">
            <p>
              By signing up, you agree to the <Link to="#">Terms</Link> and{" "}
              <Link to="#">Privacy</Link> agreements
            </p>
          </div>
        </div>
        <div className="row">
          <Col md={{ size: 2, offset: 5 }}>
            <Button type="submit" color="primary">
              Sign Up
            </Button>
          </Col>
        </div>
      </Form>
      <div className="row justify-content-center py-5">
        <div className="col-md-4 offset-md-2">
          <p>
            Already signed up? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
