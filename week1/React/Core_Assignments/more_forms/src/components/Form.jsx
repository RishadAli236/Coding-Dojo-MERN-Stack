import React, { useState } from "react";

function Form () {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameErr, setFirstNameErr] = useState("");
    const [lastNameErr, setLastNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("")

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2){
            setFirstNameErr("First Name should be at least 2 characters");
        }
        else{
            setFirstNameErr("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2){
            setLastNameErr("Last Name should be at least 2 characters");
        }
        else{
            setLastNameErr("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5){
            setEmailErr("Email should be at least 5 characters");
        }
        else{
            setEmailErr("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8){
            setPasswordErr("Password must be at least 8 characters");
        }
        else{
            setPasswordErr("");
        }
    }
    const handleConfirmPassword= (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value != password){
            setConfirmPasswordErr("Passwords must match");
        }
        else{
            setConfirmPasswordErr("");
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={handleFirstName}/>
                    {
                        firstNameErr?
                        <p>{firstNameErr}</p>:
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={handleLastName}/>
                    {
                        lastNameErr?
                        <p>{lastNameErr}</p>:
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={handleEmail}/>
                    {
                        emailErr?
                        <p>{emailErr}</p>:
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={handlePassword}/>
                    {
                        passwordErr?
                        <p>{passwordErr}</p>:
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" onChange={handleConfirmPassword}/>
                    {
                        confirmPasswordErr?
                        <p>{confirmPasswordErr}</p>:
                        ""
                    }
                </div>
            </form>
            {/* <p>Your Form Data</p>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPassword }</p> */}
        </div>
    )
}

export default Form