import React from "react";

const Display = (props) => {
    // Retrieve state from App component through props with destructuring
    const {todoList, setTodoList} = props;

    const handleCheck = (e, task) => {
        // When checkbox is clicked map through the todoList and adjust todoList accordingly
        setTodoList(todoList.map((eachTask) => {
            console.log("eachTask:", eachTask.task)

            // if the box is checked, change isComplete property for the checked item to true 
            if ( eachTask.task === task && e.target.checked){
                return {...eachTask, isComplete : true}
            }

            // if the box is unchecked, change isComplete property for the checked item to false
            else if ( eachTask.task === task && !e.target.value.checked){
                return {...eachTask, isComplete : false}
            }

            // Leave other items as is
            else{
                return eachTask;
            }
        }
        ))
    }

    const handleDelete = (e, task) => {

        // When the delete button filter out the tasks that don't match with the one whose delete button was clicked and set todoList to the new array
        setTodoList(todoList.filter((eachTask) => eachTask.task !== task))
    }

    console.log(todoList);
    console.log("Display rendered")
    return (
        <div>
            {/* Map through the todoList and display the todo items */}
            {
                todoList.map((eachTask) => 
                <div>
                    {/* Add a click event for the check box that takes in eachTask as an argument */}
                    <input type="checkbox" onClick={(e) => handleCheck(e, eachTask.task)}/>

                    {/* If the checkbox is checked add line-through styling */}
                    {
                        eachTask.isComplete?
                        <label style={{textDecoration : "line-through"}} htmlFor="task">{eachTask.task}</label>:
                        <label htmlFor="task">{eachTask.task}</label>
                    }

                    {/* Add a click event for the delete button that takes in eachTask as an argument */}
                    <button onClick={(e) => handleDelete(e, eachTask.task)}>Delete</button>
                </div>
                )
            }
        </div>
    )
}

export default Display