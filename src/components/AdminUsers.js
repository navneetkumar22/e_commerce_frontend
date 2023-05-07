import React, { useState } from 'react';
import "../styles/AdminUsers.css";

const AdminUsers = () => {

  const [users, setUsers] = useState();

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
        <h2 id="heading">Users</h2>

        <div className="table-data">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="tbody">
              {users && users.map((user) => (
                <tr className="userview">
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.orders.length}</td>
                  <td><button className="edit-btn" onClick={() => { handleEdit(user._id) }}>Edit</button></td>
                  <td><button className="delete-btn" onClick={() => { handleDelete(user._id) }}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default AdminUsers