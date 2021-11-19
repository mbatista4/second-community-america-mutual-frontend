import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import LoginPage from './Components/LoginPage/LoginPage';
import Overview from './Components/Overview';
import Navbar from './Components/Navbar';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import "./CSS/App.css"


export default function App() {

  const [isLoggedIn,setLoggedIn] = useState(false);

  useEffect(() => {

    let token = localStorage.getItem('token');

    if(!token) {
      setLoggedIn(false);
      return;
    } 
    // TODO make api call to validate token
    setLoggedIn(true);
  }, [])

  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage setLoggedIn={setLoggedIn} />    
        </Route>
        <Route exact path="/login">
          <LoginPage setLoggedIn={setLoggedIn} />
        </Route>
        <Route exact path="/overview">
          <Overview />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
      </Switch>
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </Router>
    </div>
  )
}
