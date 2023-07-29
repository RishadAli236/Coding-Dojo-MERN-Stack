import React, {useState} from "react";

const Task = (props) => {
    // Retrieve state from App component through props with destructuring
    const {setTodoList, todoList} = props;

    // Initialise a piece of state to hold new todo itema and give it a default
    const [todo, setTodo] = useState({task : "", isComplete : false});

    const handleForm = (e) => {
        e.preventDefault();

        // When the form is submitte add the new item to the todoList
        setTodoList([...todoList, todo])
        setTodo({...todo, task : ""})
    }

    console.log("Task has been rendered")
    return(
        <div>
            <form onSubmit={handleForm}>
                <label htmlFor="task"></label>
                {/* Store the new todo item in todo state variable */}
                <input type="text" onChange={(e) => setTodo({...todo, task : e.target.value})} value = {todo.task} />
                <input type="submit" value= "Add" />
            </form>
        </div>
    )
}

export default Task