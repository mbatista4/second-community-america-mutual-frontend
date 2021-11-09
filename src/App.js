import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Navbar from './Components/Navbar';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import "./CSS/App.css"


export default function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/register">
          <RegisterPage /> 
        </Route>
      </Switch>
    </Router>
    </div>
  )
}
