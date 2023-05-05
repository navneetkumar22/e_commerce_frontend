import React from 'react';
import "../styles/Login.css";
import { Link } from "react-router-dom";
import forkImage from "../assets/forkImage.png";

const Signup = () => {
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
                        <h1>Sign Up</h1>
                        <form className='login-form'>
                            <input type="text" id='name' name='name' placeholder='Name' />
                            <input type="email" id='email' name='email' placeholder='Email' />
                            <input type="password" id='password' name='password' placeholder='Password' />
                            <button type='submit'>Submit</button>
                        </form>
                        <h4>Already have an account?</h4>
                        <div className="social">
                            <Link to="/login"><button className='register'>Login</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;