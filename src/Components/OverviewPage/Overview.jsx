import React, { useEffect, useState } from 'react'
import BankAccount from '../BankAccount'
import {data} from '../../data';
import './overview.css'
import axios from 'axios';

export default function Overview() {

    const [memberData,setMemberData] = useState([])

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

    /*function handleClick(e) {
        e.preventDefault();    
        console.log('You clicked submit.');
    }*/

    return (
        <div className="overview-page">
            <div className="accounts-box">
                <h2>Accounts</h2>
                <div className="accounts-overview" /*onClick={handleClick}*/>
                    
                    {memberData.map(bankInfo =>(<BankAccount className="accounts-overview" key={bankInfo.accountNumber} bankInfo={bankInfo}/>))}
                </div>
            </div>
        </div>
    )
}
