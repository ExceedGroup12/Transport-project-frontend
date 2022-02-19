import React from 'react';
import Car from '../../images/car_logo.jpg';
import './authform.css';

const AuthForm = (props) => {
  return (
    <form className='login-form' onSubmit={props.onSubmit}>
      <img src={Car} alt='car' />
      {props.isRegister ? (
        <input
          name='name'
          placeholder='name'
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
      ) : (
        ''
      )}

      <input
        name='username'
        placeholder='username'
        value={props.username}
        onChange={(e) => props.setUsername(e.target.value)}
      />
      <input
        name='password'
        placeholder='password'
        type='password'
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />

      <button className='btn-add-todo' type='submit'>
        {props.isRegister ? 'register' : 'login'}
      </button>
    </form>
  );
};

export default AuthForm;
