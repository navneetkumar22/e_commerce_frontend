import React, { useEffect, useState } from 'react';
import "../styles/AdminProducts.css";
import axios from 'axios';

const AdminProducts = () => {
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
    //
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
                <th>Product</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="tbody">
              {products && products.map((product) => (
                <tr className="userview">
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
        <button>Add new Product</button>
      </div>
    </section>
  )
}

export default AdminProducts;