import React from 'react';
import "../styles/Header.css";
import accountImage from "../assets/account.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className='header'>
            <div className='header-first'>
                <a href='https://www.linkedin.com/in/navneetkumar22/' target='blank'><p className='email'>linkedin.com/navneetkumar</p></a>
                <p className='offer'>Free Shipping for all orders above <b> &#8377;299</b></p>
            </div>
            <Link to="/login">
                <div className='header-second'>
                    <img src={accountImage} alt='account' />
                    <p>Login</p>
                </div>
            </Link>
        </section>
    )
}

export default Header;