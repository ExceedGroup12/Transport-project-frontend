import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, StationDetail, Login, Register } from './pages';
import { Navbar } from './components';
import { getToken } from './service/auth';
import './App.scss';

function App() {
  const token = getToken();

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={token ? <Home /> : <Navigate to='/login' />} />
        <Route
          path='/login'
          element={!token ? <Login /> : <Navigate to='/' />}
        />
        <Route
          path='/register'
          element={!token ? <Register /> : <Navigate to='/' />}
        />
        <Route
          path='/:station/detail'
          element={token ? <StationDetail /> : <Navigate to='/login' />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
