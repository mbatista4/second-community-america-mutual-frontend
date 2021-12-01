import React, {useContext, useState, createContext} from "react";
import axios from "axios";
import { useHistory } from "react-router";

const LoginContext = createContext();
const ErrorMsgContext = createContext();
const SetErrorMsgContext = createContext();

export function useLogin() {
    return useContext(LoginContext);
}

export function useErrorMsg() {
    return useContext(ErrorMsgContext);
}

export function useSetErrorMsg() {
    return useContext(SetErrorMsgContext);
}

export function LoginProvider({children})  {
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState("");

    const login = async (e) => {
        e.preventDefault();
        const loginData = {
            userId: e.target[0].value,
            password: e.target[1].value
        }
        try {
            let res = await axios.post(`${process.env.REACT_APP_API_URL}/member/login_member`, loginData);
            console.log(res)
            localStorage.setItem("token", res.data)
            console.log(e.target[0].value);
            console.log(e.target[1].value);
            history.push("/overview");
        } catch (error) {
            console.log(error.response.data.msg);
            setErrorMsg(error.response.data.msg);
        }
        // setLoggedIn(true);
        
    }

    return(
        <LoginContext.Provider value={login}>
            <SetErrorMsgContext.Provider value={setErrorMsg}>
                <ErrorMsgContext.Provider value={errorMsg}>
                    {children}
                </ErrorMsgContext.Provider>
            </SetErrorMsgContext.Provider>
        </LoginContext.Provider>
    )

}