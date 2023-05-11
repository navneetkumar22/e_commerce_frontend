import React from 'react';
import "../styles/ProductCard.css";
import wishlistImage from "../assets/wishList.png";
import axios from 'axios';

const ProductCard = ({ data }) => {

    const { _id, name, description, price, photos, ratings } = data;
    // const id = key;

    const addToCart = async (id) => {
        try {
            const quantity = 1;
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/cart/add/${id}`, quantity, { withCredentials: true })
                .then(response => { console.log(response); })
        } catch (error) {
            console.log(error);
        }
    }

    const addToWishlist = async (_id) => {
        console.log(_id);
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/wishlist/${_id}`, { withCredentials: true })
                .then(response => { console.log(response); })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='card reveal'>
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
            <div className='wish'>
                <img src={wishlistImage} alt='addToWish' onClick={() => addToWishlist(_id)} />
            </div>
        </div>
    )
}

export default ProductCard;