import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {

    const [userErr, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (userErr) {

            console.log('aqui' + userErr);
            setError(userErr);

        }
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"> AliChat </span>
                <span className="title"> SignIn  </span>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder="email" />
                    <input type='password' placeholder="password" />
                    <button> Sign in </button>
                    {userErr && <span style={{color: "red"}}> Something went wrog </span>}
                </form>

                <p> You not have an account? <Link to={"/register"}> Sign Up </Link></p>

            </div>

        </div>
    )
}

export default Login;