import React, { useState } from 'react';
import bcryptjs from 'bcryptjs';
import axios from 'axios';
import './RegisterPage.module.css';

export default function RegisterPage() {

    
    const [userId,setUserId] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [birthDate,setBirthDate] = useState('');
    const [address,setAddress] = useState('');
    const [ssn,setSsn] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        let salt = await bcryptjs.genSalt(15);
        let encrpytedPassword = await bcryptjs.hash(password,salt)
        axios.post(`${process.env.REACT_APP_API_URL}member/register_member`,{
            firstName,
            lastName,
            address,
            userId,
            password: encrpytedPassword,
            socialSecurityNumber: ssn,
            dateOfBirth: birthDate
        }).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error.message);
        })

        }

        return (
            <div className = "divForm">

                <form onSubmit={handleSubmit}>
                    
                    <label>Please enter a user name:</label>
                    <input type="text" 
                        className="userName" 
                        value={userId}
                        onChange = {(e) => setUserId(e.target.value)}
                        required>
                    </input>
                    <br></br>

                    <label>Please enter a password: </label>
                    <input type="password" 
                        id="password"
                        value ={password}
                        onChange = {(e) => setPassword(e.target.value)} 
                        required>
                    </input>
                    
                    <br></br>

                    <label>First Name:</label>
                    <input type="text" 
                        id="fname"
                        value ={firstName} 
                        onChange = {(e) => setFirstName(e.target.value)}
                        required>
                    </input>

                    <label>Last Name:</label>
                    <input type="text" 
                        id="lname"
                        value ={lastName} 
                        onChange = {(e) => setLastName(e.target.value)}
                        required>
                    </input>

                    <br></br>
                    
                    <label>Date of Birth:</label>
                    <input type="date" 
                        id="birthDate"
                        value ={birthDate} 
                        onChange = {(e) => setBirthDate(e.target.value)}
                        required>
                    </input>

                    <br></br>

                    <label>Please enter your Social Security Number:</label>
                    <input type="password" 
                        id="ssn"
                        value ={ssn} 
                        onChange = {(e) => setSsn(e.target.value)}
                        required
                        minLength = {9}
                        maxLength = {9}>
                    </input>
                    
                    <br></br>

                    <label>Please enter your address:</label>
                    <input type="text" 
                        id="address"
                        value ={address} 
                        onChange = {(e) => setAddress(e.target.value)}
                        required>
                    </input>

                    

                    

                    <br></br>
                    
                    <input type ="submit" value="Register"></input>

                    <br></br>

                    <a href="/login" className="open-link">Already have a membership? Click here to login.</a>
                </form>
                
    
            </div>
        )

}

/* function example(){
    //do function

    //functions return html tags
    return (
        <div>
            <form>
                <input type="text" id="fname"></input>
                <label for="fname">First Name:</label>
            
            </form>

        </div>
    )
} */