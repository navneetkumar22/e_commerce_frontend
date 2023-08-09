import React from 'react';
import "../styles/ProductCard.css";
import axios from 'axios';
import Cookies from 'js-cookie';

const ProductCard = ({ data }) => {

    const { _id, name, description, price, photos, ratings } = data;
    // const id = key;

    const addToCart = async (id) => {
        try {
            const quantity = 1;
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/cart/add/${id}`, quantity, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            })
                .then(response => { console.log(response); })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='card'>
            <div className='image-div'>
                <img src={photos[0].image_url} alt='product' />
            </div>
            <div className='details'>
                <h2>{name}</h2>
                <h3>&#8377;{price}</h3>
                <p>{description}</p>
                <div className='cart-btn'>
                    <h4>Ratings:&nbsp;<span className='rating'>{ratings}</span></h4>
                    <button onClick={() => addToCart(_id)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;