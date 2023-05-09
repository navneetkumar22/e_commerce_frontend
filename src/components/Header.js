import React from 'react';
import "../styles/Header.css";
import accountImage from "../assets/account.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from 'axios';
// import jwtDecode from 'jwt-decode';

const Header = () => {
    const navigate = useNavigate('');

    const token = Cookies.get('token');
    const userName = Cookies.get('name');
    const userRole = Cookies.get('role');

    const showDropdown = () => {
        let item = document.getElementById("drop-down");
        if (item.style.display === "none") {
            item.style.display = "block";
        } else {
            item.style.display = "none"
        }

    }

    const logoutUser = async () => {
        try {
            const getConfirm = window.confirm("Do you really want to logout?");
            if (getConfirm === true) {
                await axios.get(`${process.env.REACT_APP_SERVER_URL}/logout`)
                    .then(response => { return response.data })
                    .then((result) => {
                        if (result.success) {
                            Cookies.remove('token');
                            Cookies.remove('name');
                            Cookies.remove('role');
                            window.alert(result.message)
                            navigate('/');
                        }
                    })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='header'>
            <div className='header-first'>
                <a href='https://www.linkedin.com/in/navneetkumar22/' target='blank'><p className='email'>linkedin.com/navneetkumar</p></a>
                <p className='offer'>Free Shipping for all orders above <b> &#8377;299</b></p>
            </div>
            {token ? (
                <div className='dropdown-box'>
                    <div className='header-second' onClick={() => { showDropdown() }}>
                        <img src={accountImage} alt='account' />
                        <p style={{ fontWeight: 'bold' }}>{userName}</p>
                    </div>
                    <div id='drop-down'>
                        {userRole === "admin" ? (
                            <Link to="/admin"><p>Dashboard</p></Link>
                        ) : (
                            <Link to="/profile"><p>Profile</p></Link>
                        )}
                        <p onClick={logoutUser}>Logout</p>
                    </div>
                </div>
            ) : (
                <Link to="/login">
                    <div className='header-second'>
                        <img src={accountImage} alt='account' />
                        <p>Login</p>
                    </div>
                </Link>
            )}
        </section>
    )
}

export default Header;