import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Signin from './components/Signin';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import React, {useState} from 'react';

function App() {
 
  return (
    <div className="App">
      <Router> 
        <Navbar />
        
        <Routes>
          <Route path="/" element= {<Main/>}/>
          <Route path="/signin" element={<Signin/>}/>    
          <Route path="/signup" element ={<Signup/>}/> 
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
