import React from 'react';
import "../styles/ProductCard.css";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {
    const navigate = useNavigate();

    const { _id, name, description, price, photos, ratings } = data;
    // const id = key;

    //view a single product on click
    const viewProduct = async (id) => {
        navigate(`/product/${id}`)
    }

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
            <div className='image-div' onClick={() => viewProduct(_id)}>
                <img src={photos[0].image_url} alt='product' />
            </div>
            <div className='details'>
                <h2 onClick={() => viewProduct(_id)}>{name}</h2>
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