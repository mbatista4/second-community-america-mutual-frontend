import React from 'react'
import './ServicesPageStyleSheet.css'

export default function ServicesPage() {
    return (
        <div>
            <div className="page-header">
                <h2>Here at Second Community American Mutual, We offer a wide variety of services such as checking accounts, saving accounts, 
                    and home and auto loans with some of the lowest interest rates on the market.
                </h2>
            </div>
            <div className="page">
                <div className="checking-box">
                    <h1 className="checking-header">Checking Account</h1>
                    <h3 className="checking-info">Second Community American Mutual checking accounts are one of the best checking accounts around and we offer
                    competitive interest rates.  
                    </h3> 
                    <h3 className="checking-earn">Earn</h3>
                    <ul className="checking-earn">
                        <li>.15% APY on balances up to $10,000</li>
                        <li>0.10% bonus rate on any S.C.A.M CD</li>
                        <li>Foreign ATM fee rebates up to $5/month</li>
                    </ul>
                </div>
                <div className="checking-box">
                    <h1 className="checking-header">Saving Account</h1>
                    <h3 className="checking-info">Second Community American Mutual saving accounts are one of the best saving accounts around. With our competitive
                    savings interest rates and monthly payout you can watch your money grow.  
                    </h3> 
                    <h3 className="checking-earn">Earn</h3>
                    <ul className="checking-earn">
                        <li>.001% APY on an account with a balance over $5,000</li>
                        <li>On demand access to your money</li>
                        <li>Interest credited monthly</li>
                    </ul>
                </div>
                <div className="checking-box">
                    <h1 className="checking-header">Home and Auto Loans</h1>
                    <h3 className="checking-info">Second Community American Mutual home and auto loans offer you competitive interest rates on fixed Loans.
                    </h3> 
                    <h3 className="checking-earn">Earn</h3>
                    <ul className="checking-earn">
                        <li>Home loan at 29.99% interest</li>
                        <li>Auto loan at 29.98% interest</li>
                        <li>Could be fixed who knows</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
