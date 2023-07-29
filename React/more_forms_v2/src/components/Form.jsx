import React, { useState } from "react";

function Form () {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const firstNameErr = () => {
        if (firstName.length > 0 && firstName.length < 2){
            return <p>First Name should be at least 2 characters</p>;
        }
        else{
            return "";
        }
    }
    const lastNameErr = () => {
        if (lastName.length > 0 && lastName.length < 2){
            return <p>Last Name should be at least 2 characters</p>;
        }
        else{
            return "";
        }
    }
    const emailErr = (e) => {
        if (email.length > 0 && email.length < 5){
            return <p>Email should be at least 5 characters</p>;
        }
        else{
            return "";
        }
    }
    const passwordErr = () => {
        if (password.length > 0 && password.length < 8){
            return <p>Password must be at least 8 characters</p>;
        }
        else{
            return "";
        }
    }
    const confirmPasswordErr = () => {
        if (confirmPassword.length > 0 && confirmPassword != password){
            return <p>Passwords must match</p>;
        }
        else{
            return "";
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input className="form-control" type="text" onChange={(e) => setFirstName(e.target.value)}/>
                    {firstNameErr()}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                    {lastNameErr()}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                    {emailErr()}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    {passwordErr()}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    {confirmPasswordErr()}
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