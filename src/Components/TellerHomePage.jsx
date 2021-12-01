import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {data} from '../data';


export default function WorkerHomePage() {

    const history = useHistory();
    const [membersUserId,setMembersUserId] = useState("");
    const [msg,setMsg] = useState("");
    const [memberData,setMemberData] = useState([]);
    const handleSearch = (e) =>{
        e.preventDefault();
        setMsg("searching Account...")

    }

    const handleSwitch = (e) => {
        console.log("switching to detailed view page");
        setMsg("going to detailed view");
        // history.push('/w/detailed');
    }

    const BankAccount = ({bankInfo}) => {

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

    return (
        <section className="teller-page" >
            <section className="teller-top">
            <h3 className='teller-title' >Teller Home</h3>
            <form className="search-box" onSubmit={handleSearch} >
                <input type="text" className="teller-search" required placeholder="enter a members userId" onChange={(e) => setMembersUserId(e.target.value) }/>
                <button type="submit" className="teller-submit-btn" >search</button>
            </form>
            <p>{msg}</p>
            </section>

            <section className="teller-center">
                <div className="data-center">
                    {data.map(bankInfo =>(<BankAccount key={bankInfo.accountNumber} bankInfo={bankInfo}/>))}
                </div>
            </section>
                {/* {data.map(ticket => (<Ticket key={ticket._id} desc={ticket.desc} devAssigned={ticket.devAssigned} priority={ticket.priority} id={ticket._id} getData={getData} />))} */}

        
        </section>
    )
}
