import React from 'react';
import { useLocation } from "react-router-dom";
import "../styles/Footer.css";
import footerLogo from "../assets/logoImage2.png";

const Footer = () => {

    const { pathname } = useLocation();
    if (pathname === "/admin") return null;



    return (
        <section className='footer'>
            <div className='footer-box'>
                <div className='logo-image'>
                    <div className='logo-div'>
                        <img src={footerLogo} alt='logo' />
                        <h2>FOOD <br />STORE</h2>
                    </div>
                    <div className='address'>
                        <p><b>Address:</b> 114 C, Model Town <br />Chandigrah, Punjab - 110551 <br />
                            <b>Email:</b> organicfoods@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div className='links'>
                        <h3>Important Links</h3>
                    </div>
                    <div className='link-items'>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Products</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='emailus'>
                    <h3>Write an email to us</h3>
                    <p>Get E-mail updates about our latest shop and special offers</p>
                    <div className='email-input'>
                        <input type='text' placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='love'>
                <p>Copyright &copy;2023 &nbsp;All rights reserved</p>
                <p>This website is made with love by <a href="https://www.linkedin.com/in/navneetkumar22/" target="blank">&nbsp;<b>Navneet Kumar</b></a></p>
            </div>
        </section>
    )
}

export default Footer;