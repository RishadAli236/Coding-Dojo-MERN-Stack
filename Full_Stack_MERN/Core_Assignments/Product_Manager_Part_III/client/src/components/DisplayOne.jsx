import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DisplayOne = (props) => {
    const {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        console.log("Effect run");
        axios.get(`http://localhost:8000/api/allProducts/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return(
        <div>
            <h2>{product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>
    )
};

export default DisplayOne;