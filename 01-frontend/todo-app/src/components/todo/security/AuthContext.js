import { createContext, useState } from "react";

// Create a Context
export const AuthContext = createContext()

export default function AuthProvider({ children }){
  // Put Some state in the context
  const [number, setNumber] = useState(10)

  // Share the created context with other components
  return (
    <AuthContext.Provider value={ {number} }>
      {children}
    </AuthContext.Provider>
  )
}