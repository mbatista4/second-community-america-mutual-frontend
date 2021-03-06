import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useLogin, useErrorMsg } from '../Context/LoginContext';
import "../CSS/loginForm.css"
import { useLoggedInUpdate } from '../Context/LoggedContext';


export default function LogInForm() {
    const history = useHistory();
    const login = useLogin();
    const errorMsg = useErrorMsg();
    let setLogin = useLoggedInUpdate();

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

    const Login = (e) => {
        setLogin(true);
        login(e);
    }

    return (
        <form className="login-form" onSubmit={Login}>
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
