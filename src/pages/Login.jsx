import React from "react";
import add from '../img/upload.png';

const Login = () => {

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo"> Lama chat </span>
                <span className="title"> SignIn  </span>
                <form>
                    <input type='email' placeholder="email" />
                    <input type='password' placeholder="password" />
                    
                    <button> Sign in </button>
                </form>

                <p> You not have an account? Sign Up</p>

            </div>

        </div>
    )
}

export default Login;