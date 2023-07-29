import React from "react";

function DisplayMessage (props) {
    const {message} = props;

    return (
        <p>{message}</p>
    )
}

export default DisplayMessage