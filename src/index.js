import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router';
import { ToastContainer } from 'react-toastify';

import "./index.css"
import Home from './Home.tsx';
import Navbar from './Navbar';
import { LanguageProvider } from './languages';
import ScrollToTop from './composant/ScrollToTop';
import Loading from './projet/SpaceX/composants/Loading';
import RocketAnimation from './composant/RocketAnimation.tsx';

const Memoire44Presentation = lazy(() => import('./projet/Memoire44/presentation'));
const PoSkinPresentation = lazy(() => import('./projet/PoSkin/presentation'));
const SpaceXPresentation = lazy(() => import('./projet/SpaceX/presentation'));
const Contact = lazy(() => import('./Contact'));
const CVDisplay = lazy(() => import('./composant/cv'));
const SelecteurScenario = lazy(() => import('./projet/Memoire44/scenario'));
const Play = lazy(() => import('./projet/Memoire44/play/play.js'));
const CreateScenario = lazy(() => import('./projet/Memoire44/CreateScenarioTool/CreateScenario.tsx'));
const About = lazy(() => import('./projet/Memoire44/About'));
const Progress = lazy(() => import('./projet/Memoire44/Progress'));
const Tuto = lazy(() => import('./projet/Memoire44/scenario/tuto'));

const Capsules = lazy(() => import('./projet/SpaceX/pages/Capsules'));
const Launches = lazy(() => import('./projet/SpaceX/pages/Launches'));
const SpaceXHome = lazy(() => import('./projet/SpaceX/pages/Home'));

const Diagnostic = lazy(() => import('./projet/PoSkin/Diagnostic'));
const DiagnosticStart = lazy(() => import('./projet/PoSkin/DiagnosticStart'));
const PoSkinHome = lazy(() => import('./projet/PoSkin/Home'));
const Blog = lazy(() => import('./projet/PoSkin/Blog'));
const Compte = lazy(() => import('./projet/PoSkin/Compte'));
const MesRdv = lazy(() => import('./projet/PoSkin/MesRdv'));
const PriseDeRdv = lazy(() => import('./projet/PoSkin/PriseDeRdv'));
const Expertise = lazy(() => import('./projet/PoSkin/Expertise'));
const B2B = lazy(() => import('./projet/PoSkin/B2B'));
const QuiSommesNous = lazy(() => import('./projet/PoSkin/QuiSommesNous'));

const App = ()=>{
    const workRef = useRef(null);
    const projetRef = useRef(null);
    const techRef = useRef(null);
    const newsletterRef = useRef(null);
    
    const scrollRef = useRef(null);
  
    function ScrollNewsletter() {
      if (newsletterRef.current) {
        newsletterRef.current.scrollIntoView({
          behavior: "smooth", // Vous pouvez également utiliser 'auto' à la place de 'smooth'
          block: "start", // Vous pouvez utiliser 'start', 'center', 'end', ou 'nearest'
        });
      }
    }
   
    return (
    <div className="fixed w-screen h-screen bg-blue_dark font-mt text-white_blue " key="main" >
      <LanguageProvider>     
        <Router>
        <div className='sticky top-0 z-50'>
          <Navbar workRef={workRef} projetRef={projetRef} techRef={techRef}/>
        </div>
        <ScrollToTop />
        
        <Suspense fallback={<div className='w-full h-full flex center'><Loading /></div>}>
            {/* <RocketAnimation scrollRef={scrollRef}/> */}
            <Routes>
              <Route path="/" element={<Home workRef={workRef} projetRef={projetRef} techRef={techRef} scrollRef={scrollRef}/>}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/Cv" element={<CVDisplay/>}></Route>
              
              {/* Route dedié pour le projet Memoire 44*/}
              <Route path="/Memoire44" element={<Memoire44Presentation/>}></Route>
              <Route path="/Memoire44/play" element={<SelecteurScenario/>}></Route>
              <Route path="/Memoire44/play/:debug" element={<SelecteurScenario/>}></Route> 
              <Route path="/Memoire44/scenario/:name/" element={<Play />}></Route>
              <Route path="/Memoire44/scenario/:name/:debug" element={<Play />}></Route>
              <Route path="/Memoire44/create" element={<CreateScenario/>}></Route>
              <Route path="/Memoire44/about" element={<About/>}></Route>
              <Route path="/Memoire44/progress" element={<Progress/>}></Route>
              <Route path="/Memoire44/tuto" element={<Tuto/>}></Route>

              {/* Route dedié pour le projet PoSkin */}
              <Route path="/PoSkin" element={<PoSkinPresentation/>}></Route>
              <Route path="/PoSkin/Home" element={<PoSkinHome scroll={() => {ScrollNewsletter();}}/>}></Route>
              <Route path="/PoSkin/Diagnostic" element={<Diagnostic />}></Route>
              <Route path="/PoSkin/Diagnostic/start/" element={<DiagnosticStart />}  ></Route>
              <Route exact path="/PoSkin/Blog/:BlogId" element={<Blog />}></Route>
              <Route path="/PoSkin/Compte" element={<Compte />}></Route>
              <Route path="/PoSkin/MesRdv" element={<MesRdv />}></Route>
              <Route path="/PoSkin/PriseDeRdv" element={<PriseDeRdv /> }></Route>
              <Route path="/PoSkin/Expertise" element={<Expertise />}></Route>
              <Route path="/PoSkin/B2B" element={<B2B />}></Route>
              <Route path="/PoSkin/APropos" element={<QuiSommesNous /> }></Route>

              {/* Route dedié pour le projet SpaceX*/}
              <Route path="/SpaceX" element={<SpaceXPresentation/>}></Route>
              <Route path="/SpaceX/Home" element={<SpaceXHome />}></Route>
              <Route path="/SpaceX/Capsules" element ={<Capsules />}></Route>
              <Route path="/SpaceX/Launches" element={<Launches />}></Route>

            </Routes>
          </Suspense>

           <ToastContainer
            icon={(type) =>
                <img
                  src={`./images/toast/${type.type}.svg`}
                  alt={type.type}
                />
            }
            position="bottom-center"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className={"w-fit"}
            />
      </Router>  
      </LanguageProvider>
 
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


