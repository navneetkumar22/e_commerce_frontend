import React, { useEffect, useState } from 'react';
import "../styles/AdminCollections.css";
import axios from 'axios';

const AdminCollections = () => {

    const [collections, setCollections] = useState();

    const getAllCollections = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_SERVER_URL}/collections`)
                .then(response => { return response.data })
                .then((result) => { setCollections(result.collections) })
        } catch (error) {
            console.log(error);
        }
    }


    //Edit the user
    const handleEdit = async (id) => {
        try {
            const newData = {
                name: prompt("Enter new name of the collection")
            }
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/collection/${id}`, newData, { withCredentials: true })
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
            const getConfirm = window.confirm("Are you sure to delete this collection?");
            if (getConfirm === true) {
                await axios.delete(`${process.env.REACT_APP_SERVER_URL}/collection/${id}`, { withCredentials: true })
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

    //add a collection
    const addCollection = async () => {
        try {
            const newCollection = { name: prompt("Enter new collection name") }
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/collection/create`, newCollection, { withCredentials: true })
                .then(response => {
                    if (response.data.success) {
                        window.alert("Collection added successfully")
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCollections();
    })

    return (
        <section className="collection-data">
            <div className="admin-collections">
                <h2 id="heading">Collections</h2>

                <div className="table-data">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            {collections && collections.map((collection) => (
                                <tr className="userview" key={collection._id}>
                                    <td>{collection.name}</td>
                                    <td><button className="edit-btn" onClick={() => { handleEdit(collection._id) }}>Edit</button></td>
                                    <td><button className="delete-btn" onClick={() => { handleDelete(collection._id) }}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='add-collection'>
                <button onClick={() => addCollection()}>Add new Collection</button>
            </div>
        </section>
    )
}

export default AdminCollections;