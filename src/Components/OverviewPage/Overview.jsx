import React from 'react'
import BankAccount from '../BankAccount'
import {data} from '../../data';
import './overview.css'

export default function Overview() {
    return (
        <div className="overview-page">
            <div className="accounts-box">
                <h2>Accounts</h2>
                <div className="accounts-overview">
                    {data.map(bankInfo =>(<BankAccount className="accounts-overview" key={bankInfo.accountNumber} bankInfo={bankInfo}/>))}
                </div>
            </div>
        </div>
    )
}
