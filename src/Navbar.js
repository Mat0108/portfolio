// import { useEffect } from "react";
// import { useLocation } from "react-router";

import { Link } from "react-router-dom";

const Navbar = () => {
    // const location = useLocation();
    // useEffect(()=>{
    //     console.log(location.pathname)
    // },[location])
    return <div className="w-full flex center bg-black_grey">
        <div className="flex flex-row justify-between p-2 w-[90%] ">
            <Link to="/"  className="text-xl font-mt-bold">{true ? "Matthieu Barnabé":""}</Link>
            <div className="flex flex-row gap-8">
                <div className="text-lg font-mt-demi">Expériences professionnelles</div>
                <div className="text-lg font-mt-demi">Projets</div>
                <div className="text-lg font-mt-demi">Compétences</div>
                <div className="text-lg font-mt-demi">CV</div>
                <div className="text-lg font-mt-demi">Contact</div>
            </div>
        </div>
    </div>
}

export default Navbar;