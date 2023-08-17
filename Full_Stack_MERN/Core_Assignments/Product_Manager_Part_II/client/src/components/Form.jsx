import React, {useState} from 'react';
import axios from 'axios';

const Form = (props) => {
    const {productList, setProductList} = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/newProduct", {title, price, description})
            .then(res => {
                console.log(res.data);
                setProductList([...productList, res.data]);

                setTitle("");
                setPrice("");
                setDescription("");

            })
            .catch(err => console.log(err))
    }

    return(
        <div>
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

                <input className='btn btn-primary' type="submit" value="Create" />
            </form>
        </div>
    )
};

export default Form;