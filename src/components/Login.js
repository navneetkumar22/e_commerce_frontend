import React from 'react';
import "../styles/Login.css";
import { Link } from "react-router-dom";
import forkImage from "../assets/forkImage.png";

const Login = () => {
    return (
        <>
            <section className='login-nav'>
                <div className='login-store'>
                    <img src={forkImage} alt='logo' />
                    <h3>FOOD <br /> STORE</h3>
                </div>
                <div className='login-nav-div'>
                    <ul>
                        <Link to="/"><li>HOME</li></Link>
                        <li>SHOP</li>
                        <li>ABOUT US</li>
                        <li>CATALOGUE</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
                <div></div>
            </section>

            <section>
                <div className='login-div'>
                    <div className="form-div">
                        <h1>Login</h1>
                        <form className='login-form' action="">
                            <input type="email" name="email" id="email" placeholder='Email' />
                            <input type="password" name="password" id="password" placeholder='Password' />
                            <button type="submit">Submit</button>
                        </form>
                        <h4>Don't have an account?</h4>
                        <div className="social">
                            <Link to="/signup"><button className='register'>Create an account</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;