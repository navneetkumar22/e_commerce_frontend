import React, { useState } from 'react';
import "../styles/Login.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import forkImage from "../assets/forkImage.png";
import Cookies from 'js-cookie';

const Signup = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const submitData = async () => {
        const data = { name: userName, email: userEmail, password: userPassword };
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`, data)
                .then(response => { return response.data })
                .then((result) => {
                    if (result.success) {
                        Cookies.set('token', result.token)
                        Cookies.set('name', result.user.name)
                        window.alert("You are successfully registered!");
                        navigate('/');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const signUpUser = async (e) => {
        e.preventDefault();
        submitData();

        setUserName('');
        setUserEmail('');
        setUserPassword('');
    }



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
                <div style={{ width: '80px' }}></div>
            </section>

            <section>
                <div className='login-div'>
                    <div className="form-div">
                        <h1>Sign Up</h1>
                        <form className='login-form' onSubmit={signUpUser}>
                            <input type="text" id='name' name='name' placeholder='Name' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                            <input type="email" id='email' name='email' placeholder='Email' value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
                            <input type="password" id='password' name='password' placeholder='Password' value={userPassword} onChange={(e) => { setUserPassword(e.target.value) }} />
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