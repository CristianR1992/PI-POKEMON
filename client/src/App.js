import { Routes, Route, Navigate } from 'react-router-dom';
import LandindPage from './components/LandingPage/LandingPage';
import FormCreate from './components/FormCreate/FormCreate';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail.jsx';
import NavBar from './components/Nav/Nav';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  // const isAuthenticated = useSelector(state => state.isAuthenticated);


 
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<LandindPage />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        <Route path="/registro" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} /> */}
        {/* {isAuthenticated ? ( */}
          
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<><NavBar /><Detail /></>} />
            <Route path="/createPokemon" element={<><NavBar /><FormCreate /></>} />

        {/* ) : (
          <Route path="/home" element={<Navigate to="/" />} />
        )} */}
      </Routes>
    </div>
  );
}

export default App;
