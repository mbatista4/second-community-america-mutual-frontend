import React, {useEffect,useState} from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import "../../CSS/loginpage.css"


export default function LoginPage({setLoggedIn}) {
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState("");
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
        <div className="wrapper">

            <form className="login-page " onSubmit={login}>
                <input className="input-box-login" name="userId" type="text" placeholder="Username"  onChange={handleLoginChange} required/>
                <input className="input-box-login" name="password" type="password" placeholder="Password"  onChange={handleLoginChange} required/>

                <div className="btn-box">
                <button type="submit" className="login-btn">Sign In</button>
                <a href="/register" className="open-link">No membership? Open one here!</a>
                </div>
            </form>
        </div>
    )
}
