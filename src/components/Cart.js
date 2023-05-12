import React, { useEffect, useState } from 'react';
import "../styles/Cart.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import forkImage from "../assets/forkImage.png";
import wishlistImage from "../assets/wishList.png";
import cartImage from "../assets/cartImage.png";

const Cart = () => {


    const [cart, setCart] = useState();
    // const [product, setProduct] = useState();
    // const [price, setPrice] = useState(0);

    const getCart = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/cart`, { withCredentials: true })
                .then(response => { setCart(response.data.cart.products) })
        } catch (error) {
            console.log(error);
        }
    }

    // const getProductByid = (id) => {
    //     axios.get(`${process.env.REACT_APP_SERVER_URL}/product/${id}`)
    //         .then(response => { setProduct(response.data.product); console.log(response.data.product); })
    //         .catch(error => { console.log(error); })
    // };

    //function to set the total price
    // const handlePrice = () => {
    //     let value = 0;
    //     cart.map((item) => (
    //         value = value + item.amount * item.price
    //     ))
    //     setPrice(value);
    // }

    //function to remove item from cart
    const removeProduct = (id) => {
        //
    }

    //function to change the product amount
    const changeAmount = (item, quantity) => {
        // cart.forEach((product, index, cart) => {
        //     if (product.id === item.id) {
        //         cart[index].amount += quantity;

        //         if (cart[index].amount < 1)
        //             cart[index].amount = 1;

        //         setCart([...cart])
        //     }
        // });
    }

    useEffect(() => {
        getCart();
        // getProductByid();
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
                        // let product = [];
                        // product = getProductByid(item._id);
                        // console.log(typeof product);
                        return (
                            <div className='final-cart' key={item._id} >
                                <div className='cart-image'>
                                    <img src={''} alt='' />
                                    <h2>{item._id}</h2>
                                </div>
                                <div className='number'>
                                    <button onClick={() => changeAmount(item, +1)}>+</button>
                                    <button>{item.quantity}</button>
                                    <button onClick={() => changeAmount(item, -1)}>-</button>
                                </div>
                                <div className='item-price'>
                                    <h3><span className='rupee'>&#8377;</span>99</h3>
                                    <button onClick={() => removeProduct(item._id)}>Remove</button>
                                </div>
                            </div>

                        )
                    })
                }

                <div className='final-price'>
                    <h2>Total amount =</h2>
                    <h2><span className='rupee'>&#8377;</span>999</h2>
                    <button>Checkout</button>
                </div>
            </article>
        </>
    )
}

export default Cart;