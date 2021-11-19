import React, {useEffect} from 'react'
import { useHistory } from 'react-router';
import "../../CSS/loginpage.css"


export default function LoginPage() {
    const history = useHistory();
    
    useEffect(() => {
        const token= localStorage.getItem("token");
        if(token && token.length > 1) {
            history.push("/overview");
        }
    }, []);

    return (
        <div className="wrapper">

            <form className="login-page ">
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
