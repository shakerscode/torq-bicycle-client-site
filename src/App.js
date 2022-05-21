import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './Pages/SharedPages/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
