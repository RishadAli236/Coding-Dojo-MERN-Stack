import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allProducts/${id}`)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/allProducts/${id}`, {title, price, description})
            .then(res => {
                console.log(res.data);
                navigate("/products")
            })
    }
    return(
        <div>
            <h2>Update</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className='form-label' htmlFor="title">Title</label>
                    <input className='form-control' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                <label className='form-label' htmlFor="price">Price</label>
                <input className='form-control' type="number" step={0.01} value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>

                <div className="mb-3">
                <label className='form-label' htmlFor="description">Description</label>
                <textarea className='form-control' id="" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <input className='btn btn-primary' type="submit" value="Update" />
            </form>
        </div>
    )
};

export default Update;