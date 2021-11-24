import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { useLogin, useErrorMsg } from '../LoginContext';
import "../CSS/loginForm.css"


export default function LogInForm({setLoggedIn}) {
    const history = useHistory();
    const login = useLogin();
    const errorMsg = useErrorMsg();
    const [loginData, setLoginData] = useState({
        userId: "",
        password: ""
    });

    useEffect(() => {
        const token= localStorage.getItem("token");
        if(token && token.length > 1) {
            setLoggedIn(true);
            history.push("/overview");
        }
    }, []);
    const handleLoginChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        const newFormData = {...loginData};
        newFormData[fieldName] = fieldValue;
        setLoginData(newFormData);
    }


    return (
        <form className="login-form" onSubmit={login}>
            <p>{errorMsg}</p>
            <input className="input-box-login" name="userId" type="text" placeholder="Username" onChange={handleLoginChange} required/>
            <input className="input-box-login" name="password" type="password" placeholder="Password" minLength="8" onChange={handleLoginChange} required/>

            <div className="btn-box">
            <button type="submit" className="login-btn">Sign In</button>
            <a href="/register" className="open-link">No membership? Open one here!</a>
            </div>
        </form>
    )
}
