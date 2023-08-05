import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

const Variable = (props) => {
    const {variable, color, bgColor} = useParams();
    // console.log(variable, color, bgColor)
    return(
        <div>
            {
                isNaN(variable)?
                <h1 style={{color:color, backgroundColor:bgColor}}>The word is {variable}</h1>:
                <h1>The number is {variable}</h1>
            }
        </div>
    )
};

export default Variable;