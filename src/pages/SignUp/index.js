import React from 'react';
import SignUpForm from "./SingUpForm"
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes"
const SignUpPage = () => {
    return (
        <div>
            <h2>Sign Up Page</h2>
            <SignUpForm  />
        </div>
    );
};
export const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);
export default SignUpPage;