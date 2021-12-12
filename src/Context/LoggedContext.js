import React, {useContext, useState, createContext} from "react";

const LoggedInContext = createContext();
const LoggedInUpdateContext = createContext();

export function useLogged() {
    return useContext(LoggedInContext);
}


export function useLoggedInUpdate() {
    return useContext(LoggedInUpdateContext);
}

export function LoggedProvider({children})  {
    const [isLoggedIn,setLoggedIn] = useState(false);

    return(
        <LoggedInContext.Provider value={isLoggedIn}>
            <LoggedInUpdateContext.Provider value={setLoggedIn}>
                {children}
            </LoggedInUpdateContext.Provider>
        </LoggedInContext.Provider>
    )

}