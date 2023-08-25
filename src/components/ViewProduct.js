import React, { useEffect, useState } from 'react';
import "../styles/ViewProduct.css";
import { Link, useParams } from "react-router-dom";
import forkImage from "../assets/forkImage.png";
import axios from 'axios';

const ViewProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState();

    const getProduct = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/${id}`)
                .then(response => { setProduct(response.data.product); })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    })

    if (product) {

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

                <section className='product'>
                    <div>
                        <img src={product.photos[0].image_url} alt="product" />
                    </div>
                    <div className="product-details">
                        <h1>{product.name}</h1>
                        <p className="desc">{product.description}</p>
                        <p><span className="product-price">Price:&nbsp;</span>{product.price}</p>
                        <button>Buy Now</button>
                    </div>
                </section>

            </>
        )
    }
}

export default ViewProduct;