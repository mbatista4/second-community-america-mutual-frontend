import React, {useEffect} from 'react'
import { useHistory } from 'react-router';
import { useLoggedInUpdate } from '../../Context/LoggedContext';
import { useLogin, useErrorMsg, useSetErrorMsg } from '../../Context/LoginContext';
import "../../CSS/loginpage.css"


export default function LoginPage() {
    const history = useHistory();
    const login = useLogin();
    const errorMsg = useErrorMsg();
    const setLoggedIn = useLoggedInUpdate();
    useEffect(() => {
        const token= localStorage.getItem("token");
        // setErrorMsg("Stupid");
        if(token && token.length > 1) {
            history.push("/overview");
            setLoggedIn(true);
        }
    }, []);

    const loginFunc = (e) => {
        setLoggedIn(true);
        login(e);
    }

    return (
        <div className="wrapper">
            {errorMsg}
            <form className="login-page " onSubmit={loginFunc}>
                <input className="input-box-login" name="userId" type="text" placeholder="Username" />
                <input className="input-box-login" name="password" type="password" placeholder="Password" />
                <div className="btn-box">
                <button type="submit" className="login-btn">Sign In</button>
                <a href="/register" className="open-link">No membership? Open one here!</a>
                </div>
            </form>
        </div>
    )
}
