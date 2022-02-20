import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components';
import { login, register } from '../../service/auth';
import './register.scss';

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(username, fullName, password);
    await login(username, password);
    navigate('/');
  };

  return (
    <div className='register__container'>
      <h1>Register</h1>
      <AuthForm
        isRegister={true}
        onSubmit={handleSubmit}
        name={fullName}
        setName={setFullName}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <Link to='/login'>login</Link>
    </div>
  );
}
