import React, {useState} from "react";

const Box = (props) => {
    const {boxPropList, setBoxPropList} = props;
    const [boxColor, setBoxColor] = useState("");
    const [boxSize, setBoxSize] = useState("")
    
    const handleForm = (e) => {
        e.preventDefault();
        setBoxPropList([...boxPropList, {color : boxColor, size : boxSize + "px" }]);
        setBoxColor("");
        setBoxSize("");
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <label htmlFor="color">Color</label>
                <input type="text" onChange={(e) => setBoxColor(e.target.value)} value = {boxColor} />
                <label htmlFor="size">Box Size</label>
                <input type="text" onChange={(e) => setBoxSize(e.target.value)} value ={boxSize} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Box