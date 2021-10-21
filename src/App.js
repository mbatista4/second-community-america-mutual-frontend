import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import "./CSS/App.css"


export default function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />    
        </Route>
      </Switch>
    </Router>
    </div>
  )
}
