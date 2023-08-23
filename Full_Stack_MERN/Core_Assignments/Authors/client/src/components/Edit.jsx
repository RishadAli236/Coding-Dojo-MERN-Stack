import React, {useEffect, useState} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = (props) => {
    const {id} = useParams();

    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res =>{
            console.log(res);
            setAuthorName(res.data.name);
        })
        .catch(err => console.log(err));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/authors/${id}`, {name: authorName})
            .then(res => {
                console.log(res);
                navigate("/authors");
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div>
            <Link to={'/authors'}>Home</Link><br />
            Edit this author
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                {
                    errors.name?<p>{errors.name.message}</p>:null
                }
                <button type='submit'>Submit</button>
                <button type='button' onClick={() => navigate("/authors")  }>Cancel</button>
            </form>
        </div>
    )
};

export default Edit;