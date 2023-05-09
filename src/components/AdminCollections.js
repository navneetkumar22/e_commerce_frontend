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
        //
    }

    //Delete the user
    const handleDelete = async (userId) => {
        //
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
                                <tr className="userview">
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
                <button>Add new Collection</button>
            </div>
        </section>
    )
}

export default AdminCollections;