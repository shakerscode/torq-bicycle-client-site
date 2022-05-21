import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
