import React from "react"
import { Link } from "react-router-dom"
import { AuthForm } from "../../components"
import './register.scss'

export default function Register() {

  return (
    <div className="register__container" >
      <h1>Register</h1>
      <AuthForm isRegister={true} />
      <Link to="/login">login</Link>
    </div>
  )
}
