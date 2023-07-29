import React, {useState} from "react";
import DisplayMessage from "./DisplayMessage";

function Message (props){
    const {setMessage} = props;
    const [newMessage, setNewMessage] = useState("");

    function handleMessage(e){
        e.preventDefault();
        setMessage(newMessage);
    }

    return(
        <div>
            <form onSubmit={handleMessage}>
                <h1>Set Message</h1>
                <textarea onChange={(e) => setNewMessage(e.target.value)} cols="30" rows="10"></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Message