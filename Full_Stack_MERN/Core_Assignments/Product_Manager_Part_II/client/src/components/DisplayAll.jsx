import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAll = (props) => {
    const {productList, setProductList} = props;

    useEffect(() => {
        console.log("Display all effect run")
        axios.get("http://localhost:8000/api/allProducts")
            .then(res => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return(
        <div>
            {
                productList.map((product, index) =>
                (
                    <div key={index}>
                        <Link to={`/products/${product._id}`}><h4>{product.title}</h4></Link>
                    </div>
                ))
            }
        </div>
    )
};

export default DisplayAll;