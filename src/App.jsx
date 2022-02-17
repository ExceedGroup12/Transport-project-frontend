import { Route, Routes } from 'react-router-dom';
import { Home, StationDetail } from './pages';
import { Navbar } from './components';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:station/detail' element={<StationDetail />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
