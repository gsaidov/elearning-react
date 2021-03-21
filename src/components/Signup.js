import { Label, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center pb-5">
        <h3>Sign Up</h3>
      </div>
      <Formik
        initialValues={{
          fullName: "",

          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .min(2, "Must be at least 2 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          alert(`Form data: ${JSON.stringify(values)}`);
          resetForm();
        }}
      >
        <Form>
          <Row className="form-group justify-content-center pb-3">
            <Label htmlFor="fullName" md={2}>
              <strong>Full Name</strong>
            </Label>
            <Col md={4}>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full name"
                className="form-control"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-danger"
              />
            </Col>
          </Row>
          <Row className="form-group justify-content-center pb-3">
            <Label htmlFor="email" md={2}>
              <strong>Email</strong>
            </Label>
            <Col md={4}>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </Col>
          </Row>
          <Row className="form-group justify-content-center">
            <Label htmlFor="password" md={2}>
              <strong>Password</strong>
            </Label>
            <Col md={4}>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="form-control"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </Col>
          </Row>
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
      </Formik>
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
