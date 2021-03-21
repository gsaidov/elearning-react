import { Button, Label, Col, Row } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        phoneNum: "",
        email: "",
        agree: false,
        contactType: "",
        feedback: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .min(2, "Must be at least 2 characters")
          .required("Required"),
        phoneNum: Yup.string()
          .max(15, "Must be less than 15 digits or equal")
          .min(10, "Must be at least 10 digits"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { resetForm }) => {
        alert(`Form data: ${JSON.stringify(values)}`);
        resetForm();
      }}
    >
      <Form>
        <Row className="form-group">
          <Label htmlFor="name" md={2}>
            Name
          </Label>
          <Col md={8}>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="form-control"
            />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="phoneNum" md={2}>
            Phone
          </Label>
          <Col md={8}>
            <Field
              type="text"
              id="phoneNum"
              name="phoneNum"
              placeholder="Phone number"
              className="form-control"
            />
            <ErrorMessage
              name="phoneNum"
              component="div"
              className="text-danger"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="email" md={2}>
            Email
          </Label>
          <Col md={8}>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="form-control"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={{ size: 4, offset: 2 }}>
            <div className="form-check">
              <Label check>
                <Field
                  type="checkbox"
                  name="agree"
                  className="form-check-input"
                />{" "}
                <strong>May we contact you?</strong>
              </Label>
            </div>
          </Col>
          <Col md={4}>
            <Field name="contactType" as="select" className="form-control">
              <option value="by phone">By Phone</option>
              <option value="by email">By Email</option>
            </Field>
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="feedback" md={2}>
            Your Feedback
          </Label>
          <Col md={8}>
            <Field
              id="feedback"
              name="feedback"
              as="textarea"
              rows="10"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={{ size: 10, offset: 2 }}>
            <Button type="submit" color="primary">
              Send Feedback
            </Button>
          </Col>
        </Row>
      </Form>
    </Formik>
  );
};

export default ContactForm;
