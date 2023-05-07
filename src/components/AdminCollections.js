import React, { useState } from 'react';
import "../styles/AdminCollections.css";

const AdminCollections = () => {

    const [collections, setCollections] = useState();

    //Edit the user
    const handleEdit = async (id) => {
        //
    }

    //Delete the user
    const handleDelete = async (userId) => {
        //
    }

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
                            {collections && collections.map((user) => (
                                <tr className="userview">
                                    <td>{user.name}</td>
                                    <td><button className="edit-btn" onClick={() => { handleEdit(user._id) }}>Edit</button></td>
                                    <td><button className="delete-btn" onClick={() => { handleDelete(user._id) }}>Delete</button></td>
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

export default AdminCollections