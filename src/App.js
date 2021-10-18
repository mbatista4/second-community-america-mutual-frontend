import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />    
        </Route>
      </Switch>
      <div>
      </div>
    </Router>
  )
}
