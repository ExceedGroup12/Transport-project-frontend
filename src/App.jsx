import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, StationDetail, Login, Register } from './pages';
import { Navbar } from './components';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/:station/detail' element={<StationDetail />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
