import React, { useEffect, useState } from 'react';
import "../styles/AdminUsers.css";
import axios from 'axios';

const AdminUsers = () => {

  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_SERVER_URL}/admin/users`, { withCredentials: true })
        .then(response => { return response.data })
        .then((result) => { setUsers(result.users); })
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
    fetchUsers();
  })

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
                  <td>0</td>
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