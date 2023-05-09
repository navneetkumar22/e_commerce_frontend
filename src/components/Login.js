import React, { useState } from 'react';
import "../styles/Login.css";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import forkImage from "../assets/forkImage.png";
import Cookies from 'js-cookie';
const server = process.env.REACT_APP_SERVER_URL;

const Login = () => {
    const navigate = useNavigate('')

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const submitData = async () => {
        const data = { email: userEmail, password: userPassword };
        try {
            await axios.post(`${server}/login`, data)
                .then(response => { return response.data })
                .then((result) => {
                    if (result.success) {

                        Cookies.set('token', result.token)
                        Cookies.set('name', result.user.name)
                        Cookies.set('role', result.user.role)
                        window.alert("You are logged in successsfully!")
                        navigate('/');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const loginUser = async (e) => {
        e.preventDefault();
        submitData();

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
                        <Link to="/profile"><li>PROFILE</li></Link>
                        <Link to="/about"><li>ABOUT US</li></Link>
                        <Link to="/contact"><li>CONTACT US</li></Link>
                    </ul>
                </div>
                <div style={{ width: '80px' }}></div>
            </section>

            <section>
                <div className='login-div'>
                    <div className="form-div">
                        <h1>Login</h1>
                        <form className='login-form' action="" >
                            <input type="email" name="email" id="email" placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                            <input type="password" name="password" id="password" placeholder='Password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                            <button type="submit" onClick={loginUser}>Submit</button>
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