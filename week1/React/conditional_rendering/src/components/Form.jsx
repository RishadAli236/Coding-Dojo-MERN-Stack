import React, { useState } from "react";

function Form () {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [firstNameErr, setFirstNameErr] = useState("")

    const createPerson = (e) => {
        e.preventDefault();
        setHasBeenSubmitted(true);
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        console.log(firstName);
        //since setters are asynchronous functions use e.target.value in the statements for accurate results
        if (e.target.value.length < 1){
            setFirstNameErr("First name is required")
        }
        else if (e.target.value.length < 3){
            setFirstNameErr("First should have at least 3 charachters")
        }
        else {
            setFirstNameErr("")
        }
    }

    const firstNameError = () => {
        if (firstName.length < 1){
            return "First name is required"
            
        }
        else if (firstName.length < 3){
            return "First should have at least 3 charachters"
            
        }
        else {
            return ""
            
        }
    }

    // const formMessage = () => {
    //     if (hasBeenSubmitted){
    //         return <h3>Thank you for submitting the form</h3>
    //     }
    //     else{
    //         return <h3>Welcome, please submit the form</h3>
    //     }
    // }

    return (
        <div>
            { hasBeenSubmitted?
                <h3>Thank you for submitting the form</h3>
                :
                <h3>Welcome, please submit the form</h3>
            }
            <form onSubmit={createPerson}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    {/* <input type="text" onChange={ (e) => setFirstName(e.target.value) }/> */}
                    <input type="text" onChange={ handleFirstName }/>
                    { firstNameErr?
                        <p>{firstNameErr}</p>
                    :
                        ""
                    }

                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
            <p>Your Form Data</p>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPassword }</p>
        </div>
    )
}

export default Form