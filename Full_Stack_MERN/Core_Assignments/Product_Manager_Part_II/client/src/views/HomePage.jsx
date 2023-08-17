import React, {useState} from 'react';
import Form from '../components/Form'
import DisplayAll from '../components/DisplayAll';

const HomePage = (props) => {
    const [productList, setProductList] = useState([]);

    return(
        <div>
            <h2>Product Manager</h2>
            <Form productList = {productList} setProductList = {setProductList}/>
            <DisplayAll productList = {productList} setProductList = {setProductList}/>
        </div>
    )
};

export default HomePage;