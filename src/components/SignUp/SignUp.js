import { useState, React } from 'react'
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import SignUpValidation from "../Validation/SignUpValidation"

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
        setFormValue({
            ...formvalue,
            [event.target.name]: (event.target.value)
        }, [formvalue]);
    }
    const [errors, setErrors] = useState({});

    const handleClick = (event) => {

        const errors = SignUpValidation(formvalue);
        if (Object.keys(errors).length > 0) {
            event.preventDefault();
            setErrors(errors);
            return false;
        }
        localStorage.setItem("userData", JSON.stringify(formvalue));
    }

    return (
        <div className="signUp">
            <h2 className="signUp_header">Create your account</h2>
            <Form className="signUp_header_form">

                <Form.Group className="mb-3 p-3 form">
                    <Form.Control type="text"
                        value={formvalue.Firstname}
                        name="Firstname"
                        onChange={handleChange}
                        className="signUp_header_form_control"
                        placeholder="First name" />
                    {errors.Firstname && <p className="error">{errors.Firstname}</p>}

                    <Form.Control type="text"
                        value={formvalue.Surname}
                        name="Surname"
                        onChange={handleChange}
                        className="signUp_header_form_control"
                        placeholder="Surname" />
                    {errors.Surname && <p className="error">{errors.Surname}</p>}

                    <Form.Control type="email"
                        value={formvalue.email}
                        name="email"
                        onChange={handleChange}
                        className="signUp_header_form_control"
                        placeholder="Email address" />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <Form.Control type="email"
                        value={formvalue.confirmEmail}
                        name="confirmEmail"
                        onChange={handleChange}
                        className="signUp_header_form_control"
                        placeholder="Confirm Email address" />
                    {errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>}

                    <Form.Control type="password"
                        value={formvalue.password}
                        name="password"
                        onChange={handleChange}
                        className="signUp_header_form_control"
                        placeholder="Password" />
                    {errors.password && <p className="error">{errors.password}</p>}

                    <Form.Control type="password"
                        value={formvalue.confirmPassword}
                        name="confirmPassword"
                        onChange={handleChange}
                        className="signUp_header_form_control"
                        placeholder="Repeat your password" />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button type="submit"
                        className="signUp_header_form_control_button"
                        size="lg" >
                        <Link to="/Login"
                            onClick={handleClick}
                            style={{
                                textDecoration: 'none',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'white',
                                textTransform: 'uppercase'
                            }}>
                            Create Account</Link>
                    </Button>
                </div>
            </Form>
        </div>
    )
}

