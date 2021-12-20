import React, { useEffect, useState } from 'react'
import BankAccount from '../BankAccount'
import {data} from '../../data';
import './overview.css'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Overview() {

    const [memberData,setMemberData] = useState([])
    const history = useHistory();

    useEffect(()=>{
        getTransactionList();
    },[]);

    function getTransactionList(){
        axios.get(`${process.env.REACT_APP_API_URL}/account/get`,{
            headers: {"x-auth-token" : localStorage.getItem('token')}})
            .then(res =>{ 
                if(res.data < 1){
                    
                } else {
                    setMemberData(res.data);
                    console.log(res);
                }
            })
            .catch((error)  => {
                console.log(error);
                
            })
    }

    const BankAccount = ({bankInfo}) => {

        let {accountType,accountNumber,balance,_id} = bankInfo;

        return (
            <form className="bank-info" onSubmit={handleSwitch}>
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
                <button className="bank-info-btn" type="submit" value={_id} >View</button>
            </form>
        );
    }

    const handleSwitch = (e) => {
        e.preventDefault();
        sessionStorage.setItem("accountId",e.target[0].value);
        history.push('/detailedoverview');
    }

    return (
        <div className="overview-page">
            <div className="accounts-box">
                <h2>Accounts</h2>
                <div className="accounts-overview" >
                    {memberData.length < 1? <p>No bank account open. go to the bank to open one.</p> : <></>}
                    {memberData.map(bankInfo =>(<BankAccount className="accounts-overview" key={bankInfo.accountNumber} bankInfo={bankInfo}/>))}
                </div>
            </div>
        </div>
    )
}
