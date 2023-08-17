import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DisplayAll = (props) => {
    const {productList, setProductList, removeFromDom} = props;

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Display all effect run")
        axios.get("http://localhost:8000/api/allProducts")
            .then(res => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/allProducts/${id}`)
            .then(res => {
                console.log(res);
                removeFromDom(id)
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            {
                productList.map((product, index) =>
                (
                    <div key={index}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>|
                        <Link to={`/products/edit/${product._id}`}>edit</Link>|
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
};

export default DisplayAll;