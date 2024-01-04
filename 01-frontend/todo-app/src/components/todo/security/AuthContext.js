import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

export const useAuth = () => useContext(AuthContext)

// Create a Context
export const AuthContext = createContext()

export default function AuthProvider({ children }){
  // Put Some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState(null)
  const [token, setToken] = useState(null)

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

  async function login(username, password){
    const baToken = 'Basic ' + window.btoa(username + ":" + password)

    try {

      const response = await executeBasicAuthenticationService('basicauth', baToken)

      if(response.status == 200){
        setAuthenticated(true)
        setUsername(username)
        setToken(baToken)
        return true
      }else{
        logout()
        return false
      }

    } catch(error) {
      logout()
      return false
    }

  }

  function logout(){
    setAuthenticated(false)
    setUsername(null)
    setToken(null)
  }

  // Share the created context with other components
  return (
    <AuthContext.Provider value={ { isAuthenticated, login, logout, username, token } }>
      {children}
    </AuthContext.Provider>
  )
}