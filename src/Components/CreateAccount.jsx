import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function CreateAccount({setShowForm,userId}) {

    const [accountType, setAccountType] = useState("checkings");
    const history = useHistory();

    const handleCreateBankAccount = (e) => {
        e.preventDefault();
        setShowForm(false);

        let token = localStorage.getItem('token');
        console.log(userId);

        axios.post(`${process.env.REACT_APP_API_URL}/account/create_account`,
             { userId , accountType},
             {headers: {"x-auth-token" : token}})
            .then(res => {
                sessionStorage.setItem("accountId",res.data._id);
                history.push('/w/detailed');
            })
            .catch((error)  => {
                console.log(error.response);
               // setMsg(error.response.data.msg);
            })

    }

    return (
        <form className='create-account' onSubmit={handleCreateBankAccount}>
            <select name="accountType" onChange={(e)=> setAccountType(e.target.value)} >
                <option defaultValue value="checkings">checkings</option>
                <option value="savings">savings</option>
            </select>
            <button type="submit">submit Form</button>
        </form>
    )
}
