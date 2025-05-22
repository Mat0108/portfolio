// import { useEffect } from "react";
// import { useLocation } from "react-router";

import { Link } from "react-router-dom";
import { useScrollToElement } from "./composant/ScrollToTop";

const Navbar = ({workRef,projetRef,techRef}) => {
    const scrollToElement = useScrollToElement();
    const isMobile = window.screen.width < 600;
    return <div className="w-full flex center bg-black_grey">
        <div className="flex flex-row justify-between p-2 w-[90%] ">
            <Link to="/"  className="text-xl font-mt-bold">{true ? "Matthieu Barnabé":""}</Link>
            {!isMobile && 
            <div className="flex flex-row gap-8">
                <div className="text-lg font-mt-demi px-4 py-1 border-2 border-black_grey rounded-3xl hover:text-blue hover:border-blue hover:cursor-pointer" onClick={() =>scrollToElement(workRef,"/")}>Expériences professionnelles</div>
                <div className="text-lg font-mt-demi px-4 py-1 border-2 border-black_grey rounded-3xl hover:text-blue hover:border-blue hover:cursor-pointer" onClick={()=>scrollToElement(projetRef,"/")}>Projets</div>
                <div className="text-lg font-mt-demi px-4 py-1 border-2 border-black_grey rounded-3xl hover:text-blue hover:border-blue hover:cursor-pointer" onClick={()=>scrollToElement(techRef,"/")}>Compétences</div>
                <Link to="/Cv" className="text-lg font-mt-demi px-4 py-1 border-2 border-black_grey rounded-3xl hover:text-blue hover:border-blue hover:cursor-pointer">CV</Link>
                <Link to="/contact" className="text-lg font-mt-demi px-4 py-1 border-2 border-black_grey rounded-3xl hover:text-blue hover:border-blue hover:cursor-pointer">Contact</Link>
            </div>
            }
        </div>
    </div>
}

export default Navbar;