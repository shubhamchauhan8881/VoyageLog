import React, { useState } from 'react'
import AuhtContext from './AuthContext';


export default function AuthProvider({children}) {
    const [user, setUser] = useState(false);
    const val = {
        user
    }
  return (
    <AuhtContext.Provider value={val}>{children}</AuhtContext.Provider>
  )
}
