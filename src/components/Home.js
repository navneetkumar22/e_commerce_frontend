import React, {} from 'react';
import "../styles/Home.css";
import { Link } from "react-router-dom";
import forkImage from "../assets/forkImage.png";
import wishlistImage from "../assets/wishList.png";
import cartImage from "../assets/cartImage.png";
import menuIcon from "../assets/whiteMenu.png";
import Banner from './ImageContainer';
import Categories from './Categories';

const Home = () => {

    const productSection = () => {
        const proDuct = document.getElementById('product-box');
        proDuct.scrollIntoView({ behavior: 'smooth' });
    }

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
            {/* navigation section  */}
            <section className='nav'>
                <div className='store'>
                    <img src={forkImage} alt='logo' />
                    <h3>FOOD <br /> STORE</h3>
                </div>
                <div className='nav-div'>
                    <ul>
                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/profile"><li>PROFILE</li></Link>
                        <Link to=""><li onClick={productSection}>PRODUCTS</li></Link>
                        <Link to="/about"><li>ABOUT US</li></Link>
                        <Link to="/contact"><li>CONTACT US</li></Link>
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

            <section id='product-box'>
                <Categories />
            </section>
        </>
    )
}

export default Home;