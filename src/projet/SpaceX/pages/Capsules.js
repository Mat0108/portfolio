import React , { useEffect, useState } from 'react';
import { getCapsules } from '../services/space-x';
import { Link } from "react-router-dom";
import CapsuleComposant from '../composants/CapsuleComposant';

const Capsules = () => {
    const [capsules, setCapsules] = useState([]);   
    useEffect(()=>{
        const fetchData = async() =>{
            const lescapsules = await getCapsules();            
            setCapsules(lescapsules);
        };
        fetchData();
    },[]);

    return (
        <div className="relative w-full h-full">
            <div className='absolute top-2 left-2  z-10'><Link to="/SpaceX/Home" className='text-2xl font-mt-bold px-2 py-1 bg-blue text-white rounded-full z-10 '>{"<"}</Link></div>
            <h1 className="text-center text-white font-mt-bold text-[30px] bg-black border-b-2 border-white ">Liste des Capsules </h1>
            <div className=" h-full flex flex-row flex-wrap gap-8 justify-around overflow-auto z-0 p-12">
                {capsules.map((capsule) => <CapsuleComposant capsule={capsule}/>)}
            </div>
        </div>
    )

}

export default Capsules;
