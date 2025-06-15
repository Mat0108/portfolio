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
import { SelecteurScenario } from './projet/Memoire44/scenario'
import { Play } from './projet/Memoire44/play/play'
import { CreateScenario } from './projet/Memoire44/scenario/createScenario'
import About from './projet/Memoire44/About'
import Progress from './projet/Memoire44/Progress'
import Tuto from './projet/Memoire44/scenario/tuto'
import Capsules from './projet/SpaceX/pages/Capsules';
import Launches from './projet/SpaceX/pages/Launches';
import SpaceXHome from './projet/SpaceX/pages/Home';
import Diagnostic from './projet/PoSkin/Diagnostic';
import DiagnosticStart from './projet/PoSkin/DiagnosticStart';
import PoSkinHome from './projet/PoSkin/Home';
import Blog from './projet/PoSkin/Blog';
import { LanguageProvider } from './languages';
import Compte from './projet/PoSkin/Compte';
import MesRdv from './projet/PoSkin/MesRdv';
import PriseDeRdv from './projet/PoSkin/PriseDeRdv';
import Expertise from './projet/PoSkin/Expertise';
import B2B from './projet/PoSkin/B2B';
import QuiSommesNous from './projet/PoSkin/QuiSommesNous';
import { ToastContainer } from 'react-toastify';

import "./ReactToastify.css";
const App = ()=>{
    const workRef = useRef(null);
    const projetRef = useRef(null);
    const techRef = useRef(null);
    const newsletterRef = useRef(null);
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
      <LanguageProvider>      <Router>
        <div className='sticky top-0 z-50'>
          <Navbar workRef={workRef} projetRef={projetRef} techRef={techRef}/>
        </div>
        {/* <ScrollToTop /> */}


          <Routes>
            <Route path="/" element={<Home workRef={workRef} projetRef={projetRef} techRef={techRef}/>}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Cv" element={<CVDisplay/>}></Route>
            
            {/* Route dedié pour le projet Memoire 44*/}
            <Route path="/Memoire44" element={<Memoire44Presentation/>}></Route>
            <Route path="/Memoire44/play" element={<SelecteurScenario/>}></Route>
            <Route path="/Memoire44/play/:debug" element={<SelecteurScenario/>}></Route> 
            <Route path="/Memoire44/scenario/:name/" element={<Play />}></Route>
            <Route path="/Memoire44§scenario/:name/:debug" element={<Play />}></Route>
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


