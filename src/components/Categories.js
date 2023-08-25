import React, { useEffect, useState } from 'react';
import "../styles/Categories.css";
import axios from 'axios';
import ProductCard from './ProductCard';
import Spinner from './Spinner';

const Categories = () => {

    const [loading, setLoading] = useState(false);
    const [collections, setCollections] = useState();
    const [selectedLink, setSelectedLink] = useState("All Products");
    const [products, setProducts] = useState();

    const getAllCollection = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/collections`)
                .then(response => { setCollections(response.data.collections) })
        } catch (error) {
            console.log(error);
        }
    }

    const getAllProducts = async () => {
        try {
            setLoading(true);
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/all`)
                .then(response => { setProducts(response.data.products) })
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
        setSelectedLink("All Products");
    }



    const getProducts = async (id, productName) => {
        try {
            setLoading(true);
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/collection/${id}`)
                .then(response => { setProducts(response.data.products) })
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
        setSelectedLink(productName);
    }

    useEffect(() => {
        getAllCollection();
        getAllProducts();
        // setLoading(false)
    },[])

    return (
        <section className='product-section'>
            <div className="products">
                <h2 className="heading">Top Category Products</h2>
            </div>
            <div className='collection-div'>
                <ul>
                    <li className={selectedLink === `${"All Products"}` ? "selected" : ""} onClick={() => getAllProducts()}>All Products</li>
                    {collections && collections.map((collection) => (
                        <li className={selectedLink === `${collection.name}` ? "selected" : ""} onClick={() => getProducts(collection._id, collection.name)} key={collection._id}>{collection.name}</li>
                    ))}
                </ul>
            </div>

            <div className="grid-container">
                {loading ? <Spinner /> : (products && products.map((product) => (
                    <ProductCard data={product} key={product._id} />
                )))}
            </div>
        </section>
    )
}

export default Categories;