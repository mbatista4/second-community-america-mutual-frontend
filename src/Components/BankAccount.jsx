import React from 'react'

export default function BankAccount({bankInfo}) {

    const handleSwitch = (e) => {
        console.log("switching to detailed view page");
        // setMsg("going to detailed view");
        // history.push('/w/detailed');
    }
    

        let {accountType,accountNumber,balance} = bankInfo;

        return (
            <div className="bank-info">
                <div className="acccount-number">
                    <p>AccountNumber:</p>
                    <p> {accountNumber}</p>
                </div>
                <div className="account-type">
                    <p>Account Type:</p>
                    <p>{accountType}</p>
                </div>
                <div className="balance">
                    <p>Balance:</p>
                    <p>{balance}</p>
                </div>
                <button className="bank-info-btn" type="button" onClick={handleSwitch} >View</button>
            </div>
        );
    

}

