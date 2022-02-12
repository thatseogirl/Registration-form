import { useState, React } from 'react'
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import LoginValidation from "../Validation/LoginValidation"
export default function Login() {

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: (event.target.value)
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

        const userDataRetrieved = localStorage.getItem('userData');
        const parsedUserData = JSON.parse(userDataRetrieved);
        if (parsedUserData.email !== data.email
            || parsedUserData.password !== data.password) {
            event.preventDefault();
            return;
        }
    }

    return (
        <div className="login">
            <h2 className="login_header">Login</h2>
            <Form className="login_header_form">
                <Form.Group className="mb-3 p-3">
                    <Form.Control type="email"
                        value={data.email}
                        name="email"
                        onChange={handleChange}
                        className="login_header_form_control"
                        placeholder="Email address"

                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <Form.Control type="password"
                        value={data.password}
                        name="password"
                        onChange={handleChange}
                        className="login_header_form_control"
                        placeholder="Password"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit"
                        className="login_header_form_control_button"
                        size="lg">
                        <Link to="/UserDetails"
                            onClick={handleClick}
                            style={{
                                textDecoration: 'none',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'white',
                                textTransform: 'uppercase'
                            }}>Log In
                         </Link>
                    </Button>
                </div>

                <div className="createAccount">
                    <p>No account yet?</p>
                    <Link to="/"
                        style={{ textDecoration: 'none' }}
                    >Create one here.
                    </Link>
                </div>
            </Form>
        </div>
    )
}
