import React, { useEffect, useState } from 'react';
import "../styles/AdminUsers.css";
import axios from 'axios';
import Cookies from 'js-cookie';

const AdminUsers = () => {

  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_SERVER_URL}/admin/users`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      })
        .then(response => { return response.data })
        .then((result) => { setUsers(result.users); })
    } catch (error) {
      console.log(error);
    }
  }

  //Edit the user
  const handleEdit = async (id) => {
    try {
      const newData = {
        name: prompt("Enter new name of the user"),
        email: prompt("Do you want to update the email?"),
        role: prompt("Do you want to update the role as well?")
      }
      await axios.put(`${process.env.REACT_APP_SERVER_URL}/admin/user/${id}`, newData, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      })
        .then(response => { return response.data })
        .then((result) => {
          if (result.success) {
            window.alert(result.message)
            // fetchUsers()
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  //Delete the user
  const handleDelete = async (id) => {
    try {
      const getConfirm = window.confirm("Are you sure to delete this user?");
      if (getConfirm === true) {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/admin/user/${id}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        })
          .then(response => {
            if (response.data.success) {
              window.alert(response.data.message)
            }
          })
      }
    } catch (error) {
      console.log(error);
    }
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
                <tr className="userview" key={user._id}>
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

export default AdminUsers;