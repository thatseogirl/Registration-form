
function SignUpValidation(formvalue) {
    let errors = {};
    if (!formvalue.Firstname) {
        errors.Firstname = "Name is Required"
    }
    if (!formvalue.Surname) {
        errors.Surname = "Surname is Required"
    }
    if (!formvalue.email) {
        errors.email = "Email is Required"
    }
    if (!formvalue.confirmEmail) {
        errors.confirmEmail = "Confirm email"
    } else if (formvalue.confirmEmail !== formvalue.email) {
        errors.confirmEmail = "Enter correct email"
    }
    if (!formvalue.password) {
        errors.password = "Password is Required"
    } else if (formvalue.password.length < 5) {
        errors.password = "Create a strong password"
    }
    if (!formvalue.confirmPassword) {
        errors.confirmPassword = "Confirm password"
    } else if (formvalue.confirmPassword !== formvalue.password) {
        errors.confirmPassword = "Enter correct password"
    }
    return errors;
}

export default SignUpValidation;