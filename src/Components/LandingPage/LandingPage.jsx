import React, {useEffect} from 'react';
import { useHistory } from 'react-router';
import LogInForm from '../LogInForm';



export default function LandingPage() {
    const history = useHistory();

    useEffect(() => {
        const token= localStorage.getItem("token");
        if(token && token.length > 1) {
            //TODO add call to api to verify token
            history.push("/overview");
        }
    },[]);

    return (
        <div className="landing-page">
            <div className="login-landing">
            <LogInForm />
            </div>
            <div className="landing-content">
                <div className="landing-top">
                <h1 className="title">S.C.A.M</h1>
                <h3>Open a membership today in just a few minutes</h3>
                <p>
                    Just complete our online application it's fast, easy, and safe.
                </p>
                </div>
                <div className="landing-bottom">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            
        </div>
        
    )
}
