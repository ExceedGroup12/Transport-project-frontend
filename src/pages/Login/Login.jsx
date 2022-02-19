import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from '../../components';
import './login.scss';
import Alert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/auth';

export default function Login() {
  const [error, setError] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className='login__container'>
      <h1>Login</h1>
      {error && <Alert error={error} />}
      <AuthForm
        isRegister={false}
        onSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <Link to='/register'>register</Link>
    </div>
  );
}
