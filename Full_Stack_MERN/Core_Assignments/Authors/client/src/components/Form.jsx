import axios from 'axios';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Form = (props) => {
    const {authorList, setAuthorList} = props;

    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/authors", {name: authorName})
        .then(res => {
            console.log(res);
            setAuthorList([...authorList, res.data]);
            setAuthorName("");
            navigate("/authors");
        })
        .catch(err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }

    return(
        <div>
            <Link to={'/authors'}>Home</Link>
            Add a new author
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

export default Form;