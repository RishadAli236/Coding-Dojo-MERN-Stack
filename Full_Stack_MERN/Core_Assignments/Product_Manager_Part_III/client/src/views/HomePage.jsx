import React, {useState} from 'react';
import Form from '../components/Form'
import DisplayAll from '../components/DisplayAll';

const HomePage = (props) => {
    const [productList, setProductList] = useState([]);

    const removeFromDom = (id) => setProductList(productList.filter((product) => product._id != id))

    return(
        <div>
            <h2>Product Manager</h2>
            <Form productList = {productList} setProductList = {setProductList}/>
            <DisplayAll productList = {productList} setProductList = {setProductList} removeFromDom = {removeFromDom}/>
        </div>
    )
};

export default HomePage;