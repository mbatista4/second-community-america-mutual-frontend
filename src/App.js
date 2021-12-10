import React, {useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import LoginPage from './Components/LoginPage/LoginPage';
import Overview from './Components/Overview';
import Navbar from './Components/Navbar';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import WorkerLogin from './Components/WorkerLogin/WorkerLogin';
import "./CSS/App.css"
import {useLoggedInUpdate } from './Context/LoggedContext';
import TellerHomePage from './Components/TellerHomePage';
import TellerDetaliedPage from './Components/TellerDetaliedPage';


export default function App() {

  const setLoggedIn = useLoggedInUpdate();

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
          <LandingPage />    
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
        <Route exact path="/w/login">
          <WorkerLogin/>
        </Route>
        <Route exact path="/w/home">
         <TellerHomePage/>
        </Route>
        <Route exact path="/w/detailed">
         <TellerDetaliedPage/>
        </Route>
      </Switch>
      <Navbar/>
    </Router>
    </div>
  )
}
