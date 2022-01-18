import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import React from 'react';
import {AuthProvider} from './contexts/AuthContext';


function App() {
 
  return (
    
    <div className="App">
      <Router> 
      <AuthProvider>
        <Navbar />

        <Routes>
        
            <Route path="/" element= {<Main/>}/>
            <Route path="/signin" element={<Signin/>}/>     
            <Route path="/signup" element ={<Signup/>}/> 
            <Route path="/dashboard" element = {<Dashboard/>}/>
        </Routes>
        </AuthProvider>
      </Router>
    
    </div>
   
  );
}

export default App;
