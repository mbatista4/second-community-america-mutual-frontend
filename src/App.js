import React, {useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import LoginPage from './Components/LoginPage/LoginPage';
import Overview from './Components/OverviewPage/Overview';
import Navbar from './Components/Navbar';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import PageNotFound from './Components/PageNotFound';
import WorkerLogin from './Components/WorkerLogin/WorkerLogin';
import { LoginProvider } from './Context/LoginContext';
import {useLoggedInUpdate } from './Context/LoggedContext';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import "./CSS/App.css"


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
      <LoginProvider>
      <Switch>
        <Route exact path="/">
          <LandingPage />    
        </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        <Route exact path="/overview">
          <Overview />
        </Route>
        <Route exact path="/services">
          <ServicesPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/w/login">
          <WorkerLogin/>
        </Route>
        <Route exact path="/w/home">
         <Overview/>
        </Route>
        <Route>
         < PageNotFound />
        </Route>
      </Switch>
      <Navbar/>
    </LoginProvider>
    </Router>
    </div>
  )
}
