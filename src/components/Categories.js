import React, { useEffect, useState } from 'react';
import "../styles/Categories.css";
import axios from 'axios';
import ProductCard from './ProductCard';

const Categories = () => {

    const [collections, setCollections] = useState();
    const [selectedLink, setSelectedLink] = useState("Fresh Fruits");
    const [products, setProducts] = useState();

    const getAllCollection = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/collections`)
                .then(response => { setCollections(response.data.collections) })
        } catch (error) {
            console.log(error);
        }
    }

    const getProducts = async (id, productName) => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/collection/${id}`)
                .then(response => { setProducts(response.data.products) })
        } catch (error) {
            console.log(error);
        }
        setSelectedLink(productName);
    }

    useEffect(() => {
        getAllCollection();
    })

    return (
        <section className='product-section'>
            <div className="products">
                <h2 className="heading">Top Category Products</h2>
            </div>
            <div className='collection-div'>
                <ul>
                    {collections && collections.map((collection) => (
                        <li className={selectedLink === `${collection.name}` ? "selected" : ""} onClick={() => getProducts(collection._id, collection.name)} key={collection._id}>{collection.name}</li>
                    ))}
                </ul>
            </div>

            <div className="grid-container">
                {products && products.map((product) => (
                    <ProductCard data={product} key={product._id} />
                ))}
            </div>
        </section>
    )
}

export default Categories;