import React, { useState } from "react";

function Form () {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                    {
                        firstName.length > 0 && firstName.length < 2?
                        <p>First Name should be at least 2 characters</p>:
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                    {
                        lastName.length > 0 && lastName.length < 2?
                        <p>Last Name should be at least 2 characters</p>:
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                    {
                        email.length > 0 && email.length < 5?
                        <p>Email should be at least 5 characters</p>:
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    {
                        password.length > 0 && password.length < 8?
                        <p>Password must be at least 8 characters</p>:
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    {
                        confirmPassword.length > 0 && confirmPassword !== password?
                        <p>Passwords must match</p>:
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