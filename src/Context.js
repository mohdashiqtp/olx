import {createContext} from 'react'
import {useState} from 'react'

export const Context=createContext(null);
export const AuthContext=createContext(null)

export default function Contexts ({children}){
    const [user,setUser]=useState(null);

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}