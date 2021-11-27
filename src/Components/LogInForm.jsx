import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import {useLoggedInUpdate } from '../Context/LoggedContext';
import "../CSS/loginForm.css"


export default function LogInForm() {
    const history = useHistory();
    const setLoggedIn = useLoggedInUpdate();
    const [errorMsg, setErrorMsg] = useState("");
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
        try {
            let res = await axios.post(`${process.env.REACT_APP_API_URL}/member/login_member`, loginData);
            console.log(res)
            localStorage.setItem("token", res.data)
            history.push("/overview");
        } catch (error) {
            console.log(error.response.data.msg);
            setErrorMsg(error.response.data.msg);
        }
        setLoggedIn(true);
        
    }

    return (
        <form className="login-form" onSubmit={login}>
            <p>{errorMsg}</p>
            <input className="input-box-login" name="userId" type="text" placeholder="Username" onChange={handleLoginChange} required/>
            <input className="input-box-login" name="password" type="password" placeholder="Password" onChange={handleLoginChange} required/>

            <div className="btn-box">
            <button type="submit" className="login-btn">Sign In</button>
            <a href="/register" className="open-link">No membership? Open one here!</a>
            </div>
        </form>
    )
}
