import React, {useState} from 'react';
import {withFirebase} from "../../utils/Firebase";
import {withRouter} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {compose} from "recompose";

const SignUpFormBase = (props)=> {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [passwordOne,setPasswordOne] = useState("")
    const [passwordTwo,setPasswordTwo] = useState("")
    const [error,setError] = useState("")



    const onSubmit = (event)=>{
        props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                props.history.push(ROUTES.HOME);
                console.log(authUser)
            })
            .catch(error => {

                setError({ error });
            });

        event.preventDefault();

    }
    const isInvalid =passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';
    return (
        <form onSubmit={onSubmit}>
            <input
                name="username"
                value={username}
                onChange={(event)=>setUsername(event.target.value)}
                type="text"
                placeholder="User Name"
            />
            <input
                name="email"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                type="text"
                placeholder="Email Address"
            />
            <input
                name="passwordOne"
                value={passwordOne}
                onChange={(event)=>setPasswordOne(event.target.value)}
                type="password"
                placeholder="Password"
            />
            <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={(event)=>setPasswordTwo(event.target.value)}
                type="password"
                placeholder="Confirm Password"
            />
            <button
                // disabled={isInvalid}
                type="submit">Sign Up</button>

            {error && <p>{error.message}</p>}
        </form>
    );
}
const SignUpForm = compose(withRouter,withFirebase)(SignUpFormBase);
export default SignUpForm;