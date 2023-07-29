import React from "react";

const Display = (props) => {
    const {boxPropList} = props;

    return (
        <div className="row justify-content-evenly">
            {
                boxPropList.map((prop) =>
                    <div className="card width" style={{
                        width: prop.size,
                        height: prop.size,
                        border: "2px solid black",
                        backgroundColor : prop.color
                        }}></div>
                )
            }
        </div>
    )
}

export default Display