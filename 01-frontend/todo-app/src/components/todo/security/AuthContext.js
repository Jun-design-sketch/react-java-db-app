import { createContext, useContext, useState } from "react";

export const useAuth = () => useContext(AuthContext)

// Create a Context
export const AuthContext = createContext()

export default function AuthProvider({ children }){
  // Put Some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false)

  function login(username, password){
    if(username === 'in28minutes' && password === 'dummy'){
      setAuthenticated(true)
      return true
    }else{
      setAuthenticated(false)
      return false
    }
  }

  function logout(){
    setAuthenticated(false)
  }

  // Share the created context with other components
  return (
    <AuthContext.Provider value={ { isAuthenticated, login, logout } }>
      {children}
    </AuthContext.Provider>
  )
}