import React, { useEffect, useState } from 'react';
import "../styles/Cart.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import forkImage from "../assets/forkImage.png";
import wishlistImage from "../assets/wishList.png";
import cartImage from "../assets/cartImage.png";
import Cookies from 'js-cookie';

const Cart = () => {


    const [cart, setCart] = useState();
    const [price, setPrice] = useState(0);

    const getCart = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/cart`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            })
                .then(response => {
                    // console.log(response.data.cart.products);
                    setCart(response.data.cart.products)
                })
        } catch (error) {
            console.log(error);
        }
    }

    //function to remove item from cart
    const removeProduct = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/cart/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            })
                .then(resp => { console.log(resp); })
            getCart();
        } catch (error) {
            console.log(error);
        }
    }

    //function to handle total price
    const totalPrice = () => {
        let totalPrice = 0;
        if (cart !== undefined) {
            for (let i = 0; i < cart.length; i++) {
                totalPrice += cart[i].product.price;
            }
        }
        setPrice(totalPrice);
    }

    useEffect(() => {
        getCart();
        totalPrice();
    },)



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
                        <Link to="/about"><li>ABOUT US</li></Link>
                        <Link to="/contact"><li>CONTACT US</li></Link>
                    </ul>
                </div>
                <div className='cart-div'>
                    <div className='wish-size'>
                        <img src={wishlistImage} alt='wishlist' />
                        <p className='wish-length'>0</p>
                    </div>
                    <div className='cart-size'>
                        <img src={cartImage} alt='cart' />
                        <p className='cart-length'>{cart ? (cart.length) : (0)}</p>
                    </div>
                </div>
            </section>


            <article>
                {
                    cart && cart?.map((item) => {
                        return (
                            <div className='final-cart' key={item._id} >
                                <div className='cart-image'>
                                    <img src={`${item.product.photos[0].image_url}`} alt='' />
                                    <h2>{item.product.name}</h2>
                                </div>
                                <div className='number'>
                                    <button>+</button>
                                    <button>{item.quantity}</button>
                                    <button>-</button>
                                </div>
                                <div className='item-price'>
                                    <h3><span className='rupee'>&#8377;</span>{item.product.price}</h3>
                                    <button onClick={() => removeProduct(item._id)}>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }

                <div className='final-price'>
                    <h2>Total amount =</h2>
                    <h2><span className='rupee'>&#8377;</span>{price}</h2>
                    <button>Checkout</button>
                </div>
            </article>
        </>
    )
}

export default Cart;