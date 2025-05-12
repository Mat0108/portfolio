import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';
import "./index.css"
import Home from './Home';
import Navbar from './Navbar';
import Memoire44Presentation from './projet/Memoire44/presentation';

const App = ()=>{
    return (
    <div className="w-screen h-screen bg-blue_dark font-mt text-white_blue " key="main">
      <Router>
        <div className='sticky top-0 z-50'>

        <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/memoire44" element={<Memoire44Presentation/>}></Route>
        </Routes>
 
      </Router>   
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

