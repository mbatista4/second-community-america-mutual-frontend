import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import {useLoggedInUpdate } from '../../Context/LoggedContext';
import './WorkerLoginStyle.css';

export default function WorkerLogin() {
    
    const history = useHistory();
    const [userId,setUserId] = useState('');
    const [password,setPassword] = useState('');
    const [workerType,setWorkerType] = useState('teller');
    const [errorMsg, setErrorMsg] = useState('');
    const setLoggedIn = useLoggedInUpdate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        setErrorMsg('');
        setUserId(e.target[0].value);
        setPassword(e.target[1].value);
        setWorkerType(e.target[2].value);
        axios.post(`${process.env.REACT_APP_API_URL}/${workerType}/login`,{
            userId,
            password,
        }).then((res)=>{
            console.log(res);
            localStorage.setItem('token',res.data);
            setLoggedIn(true);
            history.push('/w/home');
        }).catch((error)=>{
            console.log(error.response.data.msg);
            setErrorMsg(error.response.data.msg);
        })

        }

    useEffect(() => {
        const token= localStorage.getItem("token");
        if(token && token.length > 1) {
            history.push("/w/login");
        }
    }, []);

    return (
        <div className="wrapper">
            <form className="login-page" onSubmit={handleSubmit} >
            <p className="error-message" >{errorMsg}</p>
                <input className="input-box-login" name="userId" type="text" required placeholder="Username" onChange={(e) => setUserId(e.target.value)} />
                <input className="input-box-login" name="password" type="password" required minLength={8} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <select className='worker-type' name="workerType" id="type" onChange={(e) => setWorkerType(e.target.value)} >
                    <option value="teller" defaultValue >Teller</option>
                    <option value="admin">Admin</option>
                </select>
                <div className="btn-box">
                <button type="submit" className="login-btn">Login</button>
                </div>
            </form>
        </div>
    )
}
