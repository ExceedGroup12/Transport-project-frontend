import React, { useState } from "react"
import { Link } from "react-router-dom"
import { AuthForm } from "../../components"
import './login.scss'
import { useAuth } from "../../contexts/AuthProvider"
import { login } from "../../service/auth"
import { getObjForm } from "../../utils/form"
import Alert from "../../components/Alert"

export default function Login() {

  const [error, setError] = useState()

  const { setUserInfo } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = getObjForm(e.target)
    login(data)
      .then((data) => {
        setUserInfo(data.user)
      })
      .catch((resError) => {
        setError(resError.response.data)
      })
  }

  return (
    <div className="login__container">
      <h1>Login</h1>
      {error && <Alert error={error} />}
      <AuthForm isRegister={false} onSubmit={handleSubmit}/>
      <Link to="/register">register</Link>
    </div>
  )
}
