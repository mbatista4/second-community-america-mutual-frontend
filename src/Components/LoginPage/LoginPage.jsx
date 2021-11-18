import React from 'react'
import "../../CSS/loginPage.css"


export default function LoginPage() {
    return (
        <div className="wrapper">

            <form className="login-page ">
                <input className="input-box-login" name="userId" type="text" placeholder="Username" />
                <input className="input-box-login" name="password" type="password" placeholder="Password" />

                <div className="btn-box">
                <button type="submit" className="login-btn">Sign In</button>
                <a href="/register" className="open-link">No membership? Open one here!</a>
                </div>
            </form>
        </div>
    )
}
