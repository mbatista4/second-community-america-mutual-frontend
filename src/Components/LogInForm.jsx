import React, {useState, useEffect} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import axios from 'axios';
import "../CSS/loginForm.css"


export default function LogInForm() {
    const history = useHistory();
    const [jwtToken, setJwtToken] = useState("");
    const [loginData, setLoginData] = useState({
        userId: "",
        password: ""
    });
    const handleLoginChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newFormData = {...loginData};
        newFormData[fieldName] = fieldValue;
        setLoginData(newFormData);
    }
    const login = async (e) => {
        e.preventDefault();
        let res = await axios.post("https://scam-rest-service.herokuapp.com/teller/create_account", loginData);
        let data = await res.json();
        console.log(data)
        history.push("/overview");
    }

    return (
        <form className="login-form" onSubmit={login}>
            <input className="input-box-login" name="userId" type="text" placeholder="Username" onChange={handleLoginChange} required/>
            <input className="input-box-login" name="password" type="password" placeholder="Password" onChange={handleLoginChange} required/>

            <div className="btn-box">
            <button type="submit" className="login-btn">Sign In</button>
            <a href="/register" className="open-link">No membership? Open one here!</a>
            </div>
        </form>
    )
}
