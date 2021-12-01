import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPage.css';
import { useHistory } from 'react-router';

export default function RegisterPage() {

    
    const history = useHistory();
    const [userId,setUserId] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [birthDate,setBirthDate] = useState('');
    const [address,setAddress] = useState('');
    const [ssn,setSsn] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/member/register_member`,{
            firstName,
            lastName,
            address,
            userId,
            password,
            socialSecurityNumber: ssn,
            dateOfBirth: birthDate
        }).then((res)=>{
            console.log(res);
            history.push('/login');
        }).catch((error)=>{
            console.log(error.response.data.msg);
            setErrorMsg(error.response.data.msg);
        })

        }


        return (

            <body className="registerBody">
            <><h1 className="registerTitle">Membership Creation</h1>
            <p className="registerPara">Thank you for choosing Second Community American Mutual.</p>

            <div className="divForm">

                <form className="form" onSubmit={handleSubmit}>

                    <p> To continue please fill out the fields below.</p>

                    <label>First Name: </label>
                    <input className="formName" 
                        type="text"
                        id="fname"
                        placeholder="Enter Your First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required>
                    </input>
                    
                    <label>Last Name: </label>
                    <input className="formName" 
                        type="text"
                        id="lname"
                        placeholder="Enter Your Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required>
                    </input>

                    <label>Enter a Username: </label>
                    <input type="text"
                        className="formInput"
                        placeholder="Please Enter a Username"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required>
                    </input>
                    

                    <label>Enter a Password: </label>
                    <input className="formInput"
                        type="password"
                        id="password"
                        placeholder="Please Enter a Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required>
                    </input>


                    <label>Date of Birth: </label>
                    <input type="date"
                        id="birthDate"
                        className="formDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required>
                    </input>


                    <label>Please Enter Your Social Security Number: </label>
                    <input className="formDate" 
                        type="password"
                        id="ssn"
                        placeholder="012-34-567"
                        value={ssn}
                        onChange={(e) => setSsn(e.target.value)}
                        required
                        minLength={9}
                        maxLength={9}>
                    </input>

                    

                    <label>Please Enter Your Address: </label>
                    <input className="formInput"
                        type="text"
                        id="address"
                        placeholder="Enter Your Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required>
                    </input>

                    

                    <input type="submit" className = "formRegister" value="Register"></input>


                    <a href="/login" className="open-link">Already have a membership? Click here to login.</a>
                </form>

            </div></>
            </body>
        )

}