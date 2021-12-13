import React, {useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import LoginPage from './Components/LoginPage/LoginPage';
import Overview from './Components/OverviewPage/Overview';
import Navbar from './Components/Navbar';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import PageNotFound from './Components/PageNotFound';
import WorkerLogin from './Components/WorkerLogin/WorkerLogin';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import TellerHomePage from './Components/TellerHomePage';
import TellerDetaliedPage from './Components/TellerDetaliedPage';
import { LoginProvider } from './Context/LoginContext';
import {useLoggedInUpdate } from './Context/LoggedContext';
import About from './Components/AboutPage/About';
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
        <Route exact path="/about">
          <About />
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
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
      <Navbar/>
    </LoginProvider>
    </Router>
    </div>
  )
}
