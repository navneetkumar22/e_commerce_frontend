import React, { useState, useEffect } from 'react';
import "../styles/AdminAddProduct.css";
import { Link, useParams } from "react-router-dom";
import forkImage from "../assets/forkImage.png";
import Cookies from 'js-cookie';
import axios from 'axios';

const AdminUpdateProduct = () => {
    const { id } = useParams();

    // const [images, setImages] = useState();
    // const [productName, setProductName] = useState();
    // const [desc, setDesc] = useState();
    // const [price, setPrice] = useState();
    // const [stock, setStock] = useState();

    const [product, setProduct] = useState();

    const getProduct = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/${id}`)
                .then(response => { setProduct(response.data.product) })
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (_id) => {
        console.log(_id);
        try {

            // const formData = new FormData();
            // for (let i = 0; i < images.length; i++) {
            //     formData.append(`photos[${i}]`, images[i])
            // }

        } catch (error) {
            console.log(error);
        }
    }

    const name = Cookies.get('name')
    const role = Cookies.get('role');

    useEffect(() => {
        getProduct();
    })

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
                    <h1>Welcome {name ? name : ('Guest')}</h1>
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

            <section className='new-product'>
                <div className='product-headline'>
                    <h2>ADMIN - Update Product</h2>
                </div>

                <div className='product-form'>
                    <form id='my-form' onSubmit={() => handleSubmit(product._id)}>
                        <h4>Photos</h4>
                        <input type='file' id='file' name='file' multiple />

                        <p>
                            Name:
                            <input type="text" id='name' name='name' placeholder={product.name} />
                        </p>
                        <p>
                            Description:
                            <input type="text" id='description' name='description' placeholder={product.description} />
                        </p>
                        <p>
                            Price:
                            <input type="number" id='price' name='price' placeholder={product.price} />
                        </p>
                        <p>
                            Stock:
                            <input type="number" id='stock' name='stock' placeholder={product.stock} />
                        </p>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className='product-btn'>
                </div>

            </section>

        </>
    )
}

export default AdminUpdateProduct;