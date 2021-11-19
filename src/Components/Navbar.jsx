import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import '../CSS/navbar.css';

 function Navbar({isLoggedIn, setLoggedIn}) {

    const history = useHistory();

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
        localStorage.removeItem('token');
        history.push('/');
    }

    
    return (
        <nav className="nav-bar">
            <h1 className="title"><a className="nav-link" href="/">Second Community American Mutual</a></h1>
            <ul className="nav-list">
               {(isLoggedIn)? <LoggedIn/> : <NotLoggedIn/>}
                <li><a className="nav-link" href="/about">About</a></li>
                <li><a className="nav-link" href="/services">View services</a></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);