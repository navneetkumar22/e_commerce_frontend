import React from 'react';
import "../styles/Navbar.css"
import accountImage from "../assets/account.png";
import forkImage from "../assets/forkImage.png";
import wishlistImage from "../assets/wishList.png";
import cartImage from "../assets/cartImage.png";
import menuIcon from "../assets/whiteMenu.png";
import Banner from './ImageContainer';

const Navbar = () => {

    const showList = () => {
        let item = document.querySelector(".collection-list");
        if (item.style.display === "none") {
            item.style.display = "block";
        } else {
            item.style.display = "none"
        }

    }

    return (
        <>
            <section className='header'>
                <div className='header-first'>
                    <a href='https://www.linkedin.com/in/navneetkumar22/' target='blank'><p className='email'>linkedin.com/navneetkumar</p></a>
                    <p className='offer'>Free Shipping for all orders above <b> &#8377;299</b></p>
                </div>
                <div className='header-second'>
                    <img src={accountImage} alt='account' />
                    <p>Login</p>
                </div>
            </section>

            {/* navigation section  */}
            <section className='nav'>
                <div className='store'>
                    <img src={forkImage} alt='logo' />
                    <h3>FOOD <br /> STORE</h3>
                </div>
                <div className='nav-div'>
                    <ul>
                        <li>HOME</li>
                        <li>SHOP</li>
                        <li>ABOUT US</li>
                        <li>CATALOGUE</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
                <div className='cart-div'>
                    <img src={wishlistImage} alt='wishlist' />
                    <img src={cartImage} alt='cart' />
                </div>
            </section>

            {/* Collections section  */}
            <section className='search'>
                <div className='collection-container'>
                    <div className='collection-box' onClick={() => showList()}>
                        <img src={menuIcon} alt='menu' />
                        <p>All Departments</p>
                        <h3>&#8250;</h3>
                    </div>
                    <div className='collection-list'>
                        <ul>
                            <li>Fresh Fruits</li>
                            <li>Fresh Vegetables</li>
                            <li>Organic Foods</li>
                            <li>Dried Foods</li>
                            <li>Drink Fruits</li>
                            <li>Groceries</li>
                            <li>Jaggery</li>
                            <li>Rice</li>
                            <li>Turmeric Powder</li>
                            <li>Jaggery Powder</li>
                        </ul>
                    </div>
                </div>


                {/* search and banner section  */}
                <div className='search-container'>
                    <div className='search-box'>
                        <p>All Collections &nbsp; &nbsp; &nbsp;<span className='dropdown-arrow'>&#8250;</span></p>
                        <input type="search" className="input-search" placeholder="What do you need?" />
                        <button>SEARCH</button>
                    </div>
                    <div className='banner-box'>
                        <Banner />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar;