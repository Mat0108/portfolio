import React, { useRef } from 'react';
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
import ScrollToTop from './composant/ScrollToTop';
import { CVDisplay } from './composant/cv';

const App = ()=>{
    const workRef = useRef(null);
    const projetRef = useRef(null);
    const techRef = useRef(null);

    return (
    <div className="fixed w-screen h-screen bg-blue_dark font-mt text-white_blue " key="main" >
      <Router>
        <div className='sticky top-0 z-50'>
          <Navbar workRef={workRef} projetRef={projetRef} techRef={techRef}/>
        </div>
        <ScrollToTop />
        <div className="bg-blue_dark relative h-full overflow-y-auto overflow-x-hidden " id={"Scrollref"}>
          <Routes>
            <Route path="/" element={<Home workRef={workRef} projetRef={projetRef} techRef={techRef}/>}></Route>
            <Route path="/Memoire44" element={<Memoire44Presentation/>}></Route>
            <Route path="/PoSkin" element={<PoSkinPresentation/>}></Route>
            <Route path="/SpaceX" element={<SpaceXPresentation/>}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Cv" element={<CVDisplay/>}></Route>
          </Routes>
        </div>
 
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


