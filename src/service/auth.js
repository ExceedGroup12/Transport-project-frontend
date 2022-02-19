import axios from 'axios';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

export async function register(username, fullName, password) {
  await axios.post('https://ecourse.cpe.ku.ac.th/exceed12/api/register', {
    username: username,
    full_name: fullName,
    hashed_password: password,
  });
}
export async function login(username, password) {
  await axios
    .post('https://ecourse.cpe.ku.ac.th/exceed12/api/token', {
      username: username,
      password: password,
    })
    .then((res) => {
      Cookies.set('token', res.data.token);
    })
    .then(() => {
      return <Navigate to='/' />;
    });
}

export function getToken() {
  const token = Cookies.get('token');
  return token;
}

export function logout() {
  Cookies.remove('token');
  return <Navigate to='/login' />;
}
