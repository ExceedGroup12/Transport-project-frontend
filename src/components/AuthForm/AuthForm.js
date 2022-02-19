import React from "react"
import Car from '../../images/car_logo.jpg';
import './authform.css';

const AuthForm = (props) => {
  console.log(props)
  return (
    
    <form className="login-form" onSubmit={props.onSubmit}>
      <img src={Car} alt="car"/>
      {props.isRegister ? <input name="name" placeholder="name"/> : ""}

      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" type="password" />

      <button className="btn-add-todo" type="submit">
        {props.isRegister ? "register" : "login"}
      </button>

    </form>
  )
}

export default AuthForm
