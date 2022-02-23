import { useState, React } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import SignUpValidation from "../Validation/SignUpValidation";

export default function SignUp() {
  const [formvalue, setFormValue] = useState({
    Firstname: "",
    Surname: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormValue(
      {
        ...formvalue,
        [event.target.name]: event.target.value,
      },
      [formvalue]
    );
  };
  const [errors, setErrors] = useState({});

  const handleClick = (event) => {
    const errors = SignUpValidation(formvalue);
    if (Object.keys(errors).length > 0) {
      event.preventDefault();
      setErrors(errors);
      return false;
    }
    localStorage.setItem("userData", JSON.stringify(formvalue));
  };
  const handleLogin = () => {};

  return (
    <div className="signUp">
      <h2 className="signUp_header">Create your account</h2>
      <Form className="signUp_header_form">
        <Form.Group className="mb-3 p-3 form">
          {errors.Firstname && (
            <span className="error">{errors.Firstname}</span>
          )}
          <Form.Control
            type="text"
            value={formvalue.Firstname}
            name="Firstname"
            onChange={handleChange}
            className="signUp_header_form_control"
            placeholder="First name"
          />

          {errors.Surname && <span className="error">{errors.Surname}</span>}
          <Form.Control
            type="text"
            value={formvalue.Surname}
            name="Surname"
            onChange={handleChange}
            className="signUp_header_form_control"
            placeholder="Surname"
          />

          {errors.email && <span className="error">{errors.email}</span>}
          <Form.Control
            type="email"
            value={formvalue.email}
            name="email"
            onChange={handleChange}
            className="signUp_header_form_control"
            placeholder="Email address"
          />
          {errors.confirmEmail && (
            <span className="error">{errors.confirmEmail}</span>
          )}
          <Form.Control
            type="email"
            value={formvalue.confirmEmail}
            name="confirmEmail"
            onChange={handleChange}
            className="signUp_header_form_control"
            placeholder="Confirm Email address"
          />

          {errors.password && <span className="error">{errors.password}</span>}
          <Form.Control
            type="password"
            value={formvalue.password}
            name="password"
            onChange={handleChange}
            className="signUp_header_form_control"
            placeholder="Password"
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
          <Form.Control
            type="password"
            value={formvalue.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            className="signUp_header_form_control"
            placeholder="Repeat your password"
          />
        </Form.Group>
      </Form>
      <Link to="/Login" onClick={handleClick}>
        <Button type="submit" className="signUp_header_form_control_button">
          Create Account
        </Button>
      </Link>
      <div className="navigationLink">
        <p>Already have an account?</p>
        <Link
          to="/Login"
          onClick={handleLogin}
          style={{
            textDecoration: "none",
            color: "#4A87CA",
          }}
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
