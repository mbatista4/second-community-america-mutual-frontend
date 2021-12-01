import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';
import { useLogged, useLoggedInUpdate } from '../Context/LoggedContext';
import '../CSS/navbar.css';

 function Navbar() {

    const history = useHistory();
    const isLoggedIn = useLogged();
    const setLoggedIn = useLoggedInUpdate();

    const LoggedIn = () =>{

        return( 
            <>  
                <li><a className="nav-link" href="#" onClick={Logout} >Logout</a></li>
            </>)
    }

    const NotLoggedIn = () =>{

        return( 
            <>
                <li><a className="nav-link" href="/login">Login</a></li>
                <li><a className="nav-link" href="/register">Register</a></li>           
            </>)
    }


    const Logout = () => {
        setLoggedIn(false);
        console.log(isLoggedIn);
        let token = localStorage.getItem('token');
        localStorage.removeItem('token');

        axios.post(`${process.env.REACT_APP_API_URL}/teller/logout`,null,{headers: { 'x-auth-token': token}})
            .then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error.response.data.msg);
            });

        history.push('/');
    }

    
    return (
        <nav className="nav-bar">
            <h1><a className="nav-link" href="/">Second Community American Mutual</a></h1>
            <ul className="nav-list">
               {(isLoggedIn)? <LoggedIn/> : <NotLoggedIn/>}
                <li><a className="nav-link" href="/about">About</a></li>
                <li><a className="nav-link" href="/services">View services</a></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);