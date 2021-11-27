import React, {useEffect} from 'react'
import { useHistory } from 'react-router';
import { useLogin, useErrorMsg, useSetErrorMsg } from '../../LoginContext';
import "../../CSS/loginpage.css"


export default function LoginPage() {
    const history = useHistory();
    const login = useLogin();
    const errorMsg = useErrorMsg();
    const setErrorMsg = useSetErrorMsg();
    
    useEffect(() => {
        const token= localStorage.getItem("token");
        setErrorMsg("Stupid");
        if(token && token.length > 1) {
            history.push("/overview");
        }
    }, []);

    return (
        <div className="wrapper">
            {errorMsg}
            <form className="login-page " onSubmit={login}>
                <input className="input-box-login" name="userId" type="text" placeholder="Username" required/>
                <input className="input-box-login" name="password" type="password" placeholder="Password" required minLength="8"/>

                <div className="btn-box">
                <button type="submit" className="login-btn">Sign In</button>
                <a href="/register" className="open-link">No membership? Open one here!</a>
                </div>
            </form>
        </div>
    )
}
