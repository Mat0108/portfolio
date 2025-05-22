import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';
import "./index.css"
import Home from './Home';
import Navbar from './Navbar';
import Memoire44Presentation from './projet/Memoire44/presentation';
import PoSkinPresentation from './projet/PoSkin/presentation';
import { SpaceXPresentation } from './projet/SpaceX/presentation';
import { Contact } from './Contact';

const App = ()=>{
    return (
    <div className="bg-blue_dark font-mt text-white_blue overflow-x-auto overflow-y-hidden " key="main">
      <Router>
        <div className='sticky top-0 z-50'>

        <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Memoire44" element={<Memoire44Presentation/>}></Route>
          <Route path="/PoSkin" element={<PoSkinPresentation/>}></Route>
          <Route path="/SpaceX" element={<SpaceXPresentation/>}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
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

