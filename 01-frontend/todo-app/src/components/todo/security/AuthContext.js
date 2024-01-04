import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

export const useAuth = () => useContext(AuthContext)

// Create a Context
export const AuthContext = createContext()

export default function AuthProvider({ children }){
  // Put Some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState(null)

  // function login(username, password){
  //   if(username === 'in28minutes' && password === 'dummy'){
  //     setAuthenticated(true)
  //     setUsername(username)
  //     return true
  //   }else{
  //     setAuthenticated(false)
  //     return false
  //   }
  // }

  function login(username, password){
    const baToken = 'Basic ' + window.btoa(username + ":" + password)

    executeBasicAuthenticationService('basicauth', baToken)
    .then(response => console.log(response))
    .catch(error => console.log(error))

    setAuthenticated(false)

    // if(username === 'in28minutes' && password === 'dummy'){
    //   setAuthenticated(true)
    //   setUsername(username)
    //   return true
    // }else{
    //   setAuthenticated(false)
    //   return false
    // }
  }

  function logout(){
    setAuthenticated(false)
    setUsername(null)
  }

  // Share the created context with other components
  return (
    <AuthContext.Provider value={ { isAuthenticated, login, logout, username } }>
      {children}
    </AuthContext.Provider>
  )
}