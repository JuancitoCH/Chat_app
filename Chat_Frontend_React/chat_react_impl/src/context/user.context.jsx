import { useContext } from 'react';
import { createContext } from 'react'
import {useMemo, useState} from 'react'

const UserContext = createContext();

export function UserProvider(props) {
  const [username,setUsername] = useState(null)
  
  const setUserData=({name})=>{
    setUsername(name)
  }

  const value = useMemo(()=>{
    return{
      username,
      setUserData
    }
  },[username])

  return <UserContext.Provider value={value} {...props}/>
}

export function useUserContext(){
  const context = useContext(UserContext)
  if (!context){
    throw new Error("useUserContext debe estar dentro del proveedor UserContext")
  }
  return context
}