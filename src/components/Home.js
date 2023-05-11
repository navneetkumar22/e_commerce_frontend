import React, { useEffect, useState } from 'react';
import "../styles/Home.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import forkImage from "../assets/forkImage.png";
import wishlistImage from "../assets/wishList.png";
import cartImage from "../assets/cartImage.png";
import menuIcon from "../assets/whiteMenu.png";
import Banner from './ImageContainer';
import Categories from './Categories';

const Home = () => {

    const [cart, setCart] = useState();
    const [wishlist, setWishlist] = useState();

    const getWishlist = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/wishlist`, { withCredentials: true })
                .then(response => { setWishlist(response.data.wishList) })
        } catch (error) {
            console.log(error);
        }
    }

    const getCart = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/cart`, { withCredentials: true })
                .then(response => { setCart(response.data.cart) })
        } catch (error) {
            console.log(error);
        }
    }

    const [collections, setCollections] = useState();

    const getAllCollection = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/collections`)
                .then(response => { setCollections(response.data.collections) })
        } catch (error) {
            console.log(error);
        }
    }

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

    useEffect(() => {
        getAllCollection();
        getWishlist();
        getCart();
    })

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
                    <div className='wish-size'>
                        <img src={wishlistImage} alt='wishlist' />
                        <p className='wish-length'>{wishlist ? (wishlist.products.length) : (0)}</p>
                    </div>
                    <div className='cart-size'>
                        <img src={cartImage} alt='cart' />
                        <p className='cart-length'>{cart ? (cart.products.length) : (0)}</p>
                    </div>
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
                            {collections && collections.map((collection) => (
                                <li onClick={productSection} key={collection._id}>{collection.name}</li>
                            ))}
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