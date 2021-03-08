import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";

const Contact = () => {
  const [values, setValues] = useState({
    yourName: "",
    phoneNum: "",
    email: "",
    agree: false,
    contactType: "By Phone",
    feedback: "",
  });
  const [touched, setTouched] = useState({
    yourName: false,
    phoneNum: false,
    email: false,
  });

  const values_handler = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  };

  const validate = (yourName, phoneNum, email) => {
    const errors = {
      yourName: "",
      phoneNum: "",
      email: "",
    };

    if (touched.yourName) {
      if (yourName.length < 2) {
        errors.yourName = "Your name must at least 2 characters.";
      } else if (yourName.length > 25) {
        errors.yourName = "Your name must not be more than 25 characters";
      }
    }

    const reg = /^\d+$/;
    if (touched.phoneNum && !reg.test(phoneNum)) {
      errors.phoneNum = "The phone number must contain only numbers.";
    }

    if (touched.email && !email.includes("@")) {
      errors.email = "Not a valid email address";
    }

    return errors;
  };

  const handleBlur = (field) => () => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const handleSubmit = (event) => {
    console.log("current state is " + JSON.stringify(values));
    alert("current state is " + JSON.stringify(values));
    event.preventDefault();
    setValues({
      yourName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "",
      feedback: "",
    });
    setTouched({
      yourName: false,
      phoneNum: false,
      email: false,
    });
  };

  const errors = validate(values.yourName, values.phoneNum, values.email);
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col">
          <h2>Contact Us</h2>
          <hr />
        </div>
      </div>

      <div className="row py-5 row-content">
        <div className="col-md-6">
          <h5>Our Office</h5>
          <address>
            1 Example Way
            <br />
            Some City, CA 94544
            <br />
            U.S.A.
          </address>
        </div>
        <div className="col-md-6">
          <a role="button" className="btn btn-link" href="tel:+15555555555">
            <i className="fa fa-phone" /> 1-555-555-5555
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:fakeemail@fakeemail.co"
          >
            <i className="fa fa-envelope-o" /> contact@elearning.com
          </a>
        </div>
        <div className="col-md-9 pt-3">
          <p>
            If you are looking for frequently asked quesions and answers, please
            visite <Link to="#">Q&A</Link>
          </p>
        </div>
      </div>
      <div className="row row-content justify-content-center">
        <div className="col-12 text-center">
          <h2>Send us your Feedback</h2>
          <hr />
        </div>
        <div className="col-md-8">
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor="yourName" md={2}>
                First Name
              </Label>
              <Col md={8}>
                <Input
                  type="text"
                  id="yourName"
                  name="yourName"
                  placeholder="Name"
                  value={values.yourName}
                  invalid={!!errors.yourName}
                  onBlur={handleBlur("yourName")}
                  onChange={values_handler}
                />
                <FormFeedback>{errors.yourName}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="phoneNum" md={2}>
                Phone
              </Label>
              <Col md={8}>
                <Input
                  type="tel"
                  id="phoneNum"
                  name="phoneNum"
                  placeholder="Phone number"
                  value={values.phoneNum}
                  invalid={!!errors.phoneNum}
                  onBlur={handleBlur("phoneNum")}
                  onChange={values_handler}
                />
                <FormFeedback>{errors.phoneNum}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={8}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  invalid={!!errors.email}
                  onBlur={handleBlur("email")}
                  onChange={values_handler}
                />
                <FormFeedback>{errors.email}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 4, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="agree"
                      checked={values.agree}
                      onChange={values_handler}
                    />{" "}
                    <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={4}>
                <Input
                  type="select"
                  name="contactType"
                  value={values.contactType}
                  onChange={values_handler}
                >
                  <option>By Phone</option>
                  <option>By Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="feedback" md={2}>
                Your Feedback
              </Label>
              <Col md={8}>
                <Input
                  type="textarea"
                  id="feedback"
                  name="feedback"
                  rows="10"
                  value={values.feedback}
                  onChange={values_handler}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
