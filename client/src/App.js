import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/home' element = {<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
