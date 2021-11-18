import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Navbar from './Components/Navbar';
import Overview from './Components/Overview';
import LoginPage from './Components/LoginPage/LoginPage';
import "./CSS/App.css"


export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage setLoggedIn={setLoggedIn}/>    
        </Route>
        <Route exact path="/overview">
          <Overview />
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
