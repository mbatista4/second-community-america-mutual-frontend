import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import TransactionTable from './TransactionTable/TransactionTable';

export default function TellerDetaliedPage() {

    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [detailedAccount, setDetailedAccount] = useState({transactionList:[]});
    const history = useHistory();

    useEffect(()=>{
        let id = sessionStorage.getItem("accountId");
        if(!id) {
            history.push('/w/home');
        }
        console.log(id);
        getAllTransactions(id);
       
    },[])

    let list = detailedAccount.transactionList;
    
    const addTransaction = (e) => {
        let id = sessionStorage.getItem("accountId");
        setErrorMsg("");
        e.preventDefault();

        console.log(typeof(e.target[0].value));

        axios.post(`${process.env.REACT_APP_API_URL}/account/transaction/new/`,{amount : amount, description: description, id: id}, {
            headers: {"x-auth-token" : localStorage.getItem('token')}})
            .then(() => window.location.reload())
            .catch(error =>{
                console.log(error.response.data.msg);
                setErrorMsg(error.response.data.msg)
               
            }) 

            
        
    }

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

    return (
        <div className="teller-page-detailed">
            <section className="top-bar">
                    <p>Account Number: {detailedAccount.accountNumber}</p>
                    <p>Account Type:   {detailedAccount.accountType}</p>
                    <p>Balance:  {"$"}{detailedAccount.balance}</p>
                    <a href="/w/home">Back to search</a>
                    <p>{errorMsg}</p>
            </section>
            <div className="">
                <TransactionTable transactionList={list} />
            </div>
            <form className="transaction-form" onSubmit={addTransaction}>
                <input type="number" name="amount" onChange={(e) => setAmount(e.target.value)} step="0.01" placeholder="enter transaction amount" required />
                <textarea name="desription" id="" cols="30" rows="10" placeholder="enter Description" maxLength="140" onChange={(e) => setDescription(e.target.value)} required></textarea>
                <button type='submit'>Submit Transaction</button>
            </form>
        </div>
    )
}
