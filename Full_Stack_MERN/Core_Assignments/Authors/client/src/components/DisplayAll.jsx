import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DisplayAll = (props) => {
    const {authorList, setAuthorList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res);
                setAuthorList(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res);
                setAuthorList(authorList.filter((author) => author._id != id));
                navigate("/authors");
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <Link to={"/authors/new"}>Add an author</Link>
            <table>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>Actions Available</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    authorList.map((author, index) => 
                    (
                        <tr key={index}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/authors/${author._id}`}>Edit</Link> |
                                <Link onClick={() => handleDelete(author._id)}>Delete</Link>
                            </td>
                        </tr>
                    )
                    )
                }
                </tbody>
            </table>
        </div>
    )
};

export default DisplayAll;