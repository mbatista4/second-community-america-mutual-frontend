import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <h1 className="title"><a className="nav-link" href="/">Second Community American Mutual</a></h1>
            <ul className="nav-list">
                <li><a className="nav-link" href="/login">Login</a></li>
                <li><a className="nav-link" href="register">Register</a></li>
                <li><a className="nav-link" href="/about">About</a></li>
                <li><a className="nav-link" href="/services">View services</a></li>
            </ul>
        </nav>
    )
}
