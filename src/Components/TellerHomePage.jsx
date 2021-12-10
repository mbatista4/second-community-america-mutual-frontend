import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {data} from '../data';
import axios from 'axios';


export default function WorkerHomePage() {

    const history = useHistory();
    const [membersUserId,setMembersUserId] = useState("");
    const [msg,setMsg] = useState("");
    const [memberData,setMemberData] = useState([]);

    const handleSearch = (e) =>{
        e.preventDefault();
        clearData();
        axios.get(`${process.env.REACT_APP_API_URL}/account/get`,{params: {
            owner: membersUserId
        }})
            .then(res =>{ 
                if(res.data < 1){
                    setMsg("there are no bank account linked to this member");
                } else {
                    setMemberData(res.data);
                }
            })
            .catch((error)  => {
                console.log(error);
                setMsg(error.response.data.msg);
            })
    }

    const handleSwitch = (e) => {
        e.preventDefault();
        sessionStorage.setItem("accountId",e.target[0].value);
        history.push('/w/detailed');
    }

    const clearData = () =>{
        setMemberData([]);
        setMsg("");
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

    return (
        <section className="teller-page" >
            <section className="teller-top">
                <h3 className='teller-title' >Teller Home</h3>
                <form className="search-box" onSubmit={handleSearch} >
                    <button type="reset" onClick={clearData}>clear results</button>
                    <input type="text" className="teller-search" required placeholder="enter a members userId" onChange={(e) => setMembersUserId(e.target.value) }/>
                    <button type="submit" className="teller-submit-btn" >search</button>
                </form>
            </section>
            <section className="teller-center">
               {memberData.length < 1 ? <p>{msg}</p> :  <div className="data-center">{memberData.map(bankInfo =>(<BankAccount key={bankInfo.accountNumber} bankInfo={bankInfo}/>))}</div>}
            </section>
        </section>
    );
}
