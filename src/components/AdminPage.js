import React, { useState } from 'react';
import "../styles/AdminPage.css";
import { Link } from "react-router-dom";
import forkImage from "../assets/forkImage.png";
import AdminProfile from "../components/AdminProfile";
import AdminUsers from "../components/AdminUsers";
import AdminCollections from "../components/AdminCollections";
import AdminProducts from "../components/AdminProducts";
import AdminOrders from "../components/AdminOrders";
import Cookies from 'js-cookie';


const AdminPage = () => {

    const [clickedBtn, setCickedBtn] = useState(1);

    const name = Cookies.get('name');
    const role = Cookies.get('role');

    if (role !== "admin") {
        return (
            <>
                <section className='nav'>
                    <div className='store'>
                        <img src={forkImage} alt='logo' />
                        <h3>FOOD <br /> STORE</h3>
                    </div>
                    <div className='nav-div'>
                        <ul>
                            <Link to="/"><li>HOME</li></Link>
                            <Link to="/profile"><li>PROFILE</li></Link>
                            <Link to="/about"><li>ABOUT US</li></Link>
                            <Link to="/contact"><li>CONTACT US</li></Link>
                        </ul>
                    </div>
                    <div className='extra-div'></div>
                </section>

                <section className='non-admin'>
                    <h1>Welcome {name}</h1>
                    <p>You are not allowed to access this admin route, please contact administrator for access rights.</p>
                    <p>Or you can go to <Link to="/profile">Profile Section</Link></p>
                </section>
            </>
        )
    }



    return (
        <>
            {/* navigation section  */}
            <section className='nav'>
                <div className='store'>
                    <img src={forkImage} alt='logo' />
                    <h3>FOOD <br /> STORE</h3>
                </div>
                <div className='nav-div'>
                    <ul>
                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/admin"><li>PROFILE</li></Link>
                        <Link to="/about"><li>ABOUT US</li></Link>
                        <Link to="/contact"><li>CONTACT US</li></Link>
                    </ul>
                </div>
                <div className='extra-div'></div>
            </section>

            <div className='admin-panel'>
                Dashboard
            </div>

            <section className='admin-section'>
                <div className='panel'>
                    <div className='admin-name'>
                        <h3>NAVNEET KUMAR</h3>
                    </div>
                    <div className='panel-items'>
                        <p onClick={() => setCickedBtn(1)} className={clickedBtn === 1 ? 'selected' : ''}>Profile</p>
                        <p onClick={() => setCickedBtn(2)} className={clickedBtn === 2 ? 'selected' : ''}>Users</p>
                        <p onClick={() => setCickedBtn(3)} className={clickedBtn === 3 ? 'selected' : ''}>Collections</p>
                        <p onClick={() => setCickedBtn(4)} className={clickedBtn === 4 ? 'selected' : ''}>Products</p>
                        <p onClick={() => setCickedBtn(5)} className={clickedBtn === 5 ? 'selected' : ''}>Orders</p>
                    </div>
                </div>

                <div className='panel-contents'>
                    <div className='panel-data'>
                        {clickedBtn === 1 && <AdminProfile />}
                        {clickedBtn === 2 && <AdminUsers />}
                        {clickedBtn === 3 && <AdminCollections />}
                        {clickedBtn === 4 && <AdminProducts />}
                        {clickedBtn === 5 && <AdminOrders />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminPage;