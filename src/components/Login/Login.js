import { useState, React } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginValidation from "../Validation/LoginValidation";
export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const [errors, setErrors] = useState({});

  const handleClick = (event) => {
    const errors = LoginValidation(data); 

    if (Object.keys(errors).length > 0) {
      event.preventDefault();
      setErrors(errors);
      return;
    }

    const userDataRetrieved = localStorage.getItem("userData");

    const parsedUserData = JSON.parse(userDataRetrieved);
    if (parsedUserData.email !== data.email) {
      errors.email = "Invalid email";
      event.preventDefault();
      setErrors(errors);

    } else if (parsedUserData.password !== data.password) {
        errors.password = "Password not recognised";
        event.preventDefault();
        setErrors(errors);
    }
  };

  return (
    <div className="login">
      <h2 className="login_header">Login</h2>
      <Form className="login_header_form">
        <Form.Group className="mb-3 p-3">
          {errors.email && <span className="error">{errors.email}</span>}
          <Form.Control
            type="email"
            value={data.email}
            name="email"
            onChange={handleChange}
            className="login_header_form_control"
            placeholder="Email address"
          />

          {errors.password && <span className="error">{errors.password}</span>}
          <Form.Control
            type="password"
            value={data.password}
            name="password"
            onChange={handleChange}
            className="login_header_form_control"
            placeholder="Password"
          />
        </Form.Group>
      </Form>

      <Link to="/UserDetails" onClick={handleClick}>
        <Button type="submit" className="login_header_form_control_button">
          Log In
        </Button>
      </Link>

      <div className="createAccount">
        <p>No account yet?</p>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#4A87CA",
          }}
        >
          Create one here.
        </Link>
      </div>
    </div>
  );
}
