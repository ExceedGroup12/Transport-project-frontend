import { Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:station/detail' element={<StationDetail />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
