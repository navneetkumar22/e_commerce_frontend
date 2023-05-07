import React, { useState } from 'react';
import "../styles/AdminOrders.css";

const AdminOrders = () => {

  const [orders, setOrders] = useState();

  //Edit the user
  const handleEdit = async (id) => {
    //
  }

  //Delete the user
  const handleDelete = async (userId) => {
    //
  }

  return (
    <section className="user-data">
      <div className="data">
        <h2 id="heading">Orders</h2>

        <div className="table-data">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>User</th>
                <th>Status</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="tbody">
              {orders && orders.map((order) => (
                <tr className="userview">
                  <td>{order.product}</td>
                  <td>{order.user}</td>
                  <td>{order.status}</td>
                  <td>{order.date}</td>
                  <td><button className="edit-btn" onClick={() => { handleEdit(order._id) }}>Edit</button></td>
                  <td><button className="delete-btn" onClick={() => { handleDelete(order._id) }}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default AdminOrders;