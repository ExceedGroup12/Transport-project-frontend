
import React, { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  
  //set null
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  //set user to local storage , setUser = user , nevigate to home
  const setUserInfo = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    setUser(user)
    navigate("/")
  }

  //remove local storage , setUser = "" , nevigate to login
  const logout = () => {
    localStorage.removeItem("user")
    setUser({})
    navigate("/login")
  }

  //check local storage have user? home : login
  useEffect(() => {
    const oldUser = localStorage.getItem("user")
    if (oldUser) {
      navigate("/")
      setUser(JSON.parse(oldUser))
    } else {
      // navigate("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUserInfo, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider