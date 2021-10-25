import React, {useState} from 'react'
import "../CSS/loginForm.css"


export default function LogInForm({login}) {
    return (
        <form className="login-form" onSubmit={login}>
            <input className="input-box-login" type="text" placeholder="Username" />
            <input className="input-box-login" type="password" placeholder="Password" />

            <div className="btn-box">
            <button type="submit" className="login-btn">Sign In</button>
            <a href="/register" className="open-link">No membership? Open one here!</a>
            </div>
        </form>
    )
}
