import React from 'react';
import './DetailedOverview.css';
import TransactionTable from '../TransactionTable/TransactionTable';
import BankAccount from '../BankAccount';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';

export default function DetailedOverview() {

    const [detailedAccount, setDetailedAccount] = useState({transactionList:[]});
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(()=>{
        let id = sessionStorage.getItem("accountId");
        if(!id) {
            history.push('/overview');
        }
        console.log(id);
        getAllTransactions(id);
       
    },[])

    let list = detailedAccount.transactionList;

    const getAllTransactions = (id) =>{
        axios.get(`${process.env.REACT_APP_API_URL}/account/get-detailed`,{
            headers: {"x-auth-token" : localStorage.getItem('token')},
            params: {owner: id}
            })
            .then(res => {
                console.log(res);
                setDetailedAccount(res.data); 
            })
            .catch((error)  => {
                console.log(error.response);
            })
    }

    return(
        <div className="DetailedOverview-page">
        <section className="top-bar">
                <p>Account Number: {detailedAccount.accountNumber}</p>
                <p>Account Type:   {detailedAccount.accountType}</p>
                <p>Balance:  {"$"}{detailedAccount.balance}</p>
                <a href="/overview">Back to Overview</a>
                <p>{errorMsg}</p>
        </section>

        <div className="">
            <TransactionTable transactionList={list} />
        </div>

        </div>
    )
}