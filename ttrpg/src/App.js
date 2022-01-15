import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Signin from './components/Signin';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        
        <Routes>
          <Route path="/" element= {<Main/>}/>
          <Route path="/signin" element={<Signin/>}/>      
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
