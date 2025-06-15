import React from 'react';


import { useEffect, useState } from 'react';
import { getLaunches } from '../services/space-x';
import { Link } from "react-router-dom";
import LauncheComposant from './../composants/LauncheComposant';
import { getRandomColor } from './RandomColor';

const Launches = () => {
    const [launchs, setLaunchs] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const leslaunchs = await getLaunches();

            setLaunchs(leslaunchs);
        };
        fetchData();
    }, []);




    return (
        <div className="relative w-full h-full">
            <div className='absolute top-2 left-2  z-10'><Link to="/SpaceX/Home" className='text-2xl font-mt-bold px-2 py-1 bg-blue text-white rounded-full z-10 '>{"<"}</Link></div>
            <h1 className="text-center text-white font-mt-bold text-[30px] bg-black border-b-2 border-white">Liste des Launches </h1>
            <div className=" h-full flex flex-row flex-wrap gap-8 justify-around  z-0 p-12 overflow-y-auto overflow-x-hidden custom-scrollbar" id={"Scrollref"}>
                {launchs.length !== 0 && launchs.map((launch,pos) => <LauncheComposant launch={launch} color={getRandomColor()}/>)}
            </div>
        </div>
    )
            }

export default Launches;
