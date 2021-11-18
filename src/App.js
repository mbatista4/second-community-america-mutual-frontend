import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import LoginPage from './Components/LoginPage/LoginPage';
import Navbar from './Components/Navbar';
import "./CSS/App.css"


export default function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />    
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
      <Navbar/>
    </Router>
    </div>
  )
}
