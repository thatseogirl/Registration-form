
export default function LoginValidation(data) {
    const LoginErrors = {};
    if(!data.email){
        LoginErrors.email = "Email is Required"
    }
    if(!data.password){
        LoginErrors.password = "Password is Required"
    }
    return LoginErrors;
}
