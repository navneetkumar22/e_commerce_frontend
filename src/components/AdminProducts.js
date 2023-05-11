import React, { useEffect, useState } from 'react';
import "../styles/AdminProducts.css";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import AdminAddProduct from './AdminAddProduct';

const AdminProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState();

  const getProducts = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/all`)
        .then(response => { return response.data })
        .then((result) => { setProducts(result.products) })
    } catch (error) {
      console.log(error);
    }
  }

  //Edit the user
  const handleEdit = async (id) => {
    navigate(`/admin/updateproduct/${id}`)
  }

  //Delete the user
  const handleDelete = async (userId) => {
    //
  }

  useEffect(() => {
    getProducts();
  })

  return (
    <section className="collection-data">
      <div className="admin-products">
        <h2 id="heading">Products</h2>

        <div className="table-data">
          <table>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="tbody">
              {products && products.map((product) => (
                <tr className="userview" key={product._id}>
                  <td>{<img src={product.photos[0].image_url} alt='product' className='product-pic' />}</td>
                  <td>{product.name}</td>
                  <td><button className="edit-btn" onClick={() => { handleEdit(product._id) }}>Edit</button></td>
                  <td><button className="delete-btn" onClick={() => { handleDelete(product._id) }}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='add-collection'>
        <Link to='/admin/addproduct'><button>Add new Product</button></Link>
      </div>
    </section>
  )
}

export default AdminProducts;