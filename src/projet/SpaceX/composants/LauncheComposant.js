import React, { useMemo } from 'react';

import { useEffect, useState } from 'react';
import { getRocket,getLaunchpads,getOneCapsule, getPayload } from '../services/space-x';
import Loading from './Loading';

const LauncheComposant = ({launch,color}) => {
        
        // console.log('launche : ', launche)
        const [launchpads, setlaunchpads] = useState([]);
        const [rocket, setRockets] = useState([]); 
        const [capsule,setCapsule] = useState([]);
        const [payload,setPayload] = useState([])
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            // console.log(launch)

            const fetchData = async(launchpad,rocket,capsule,payload) => {
                setlaunchpads(await getLaunchpads(launchpad).name)
                setRockets(await getRocket(rocket))
                if(capsule){
                    setCapsule(await getOneCapsule(capsule))
                }
                // if(payload){
                //     setPayload(await getPayload(payload));
                // }
                
                setIsLoading(false);
            };

            fetchData(launch.launchpad,launch.rocket,launch.capsules[0],launch.payloads[0])
        }, [launch]);
    function convertBurnTime(time){
        return "temps de combustion :   "+Math.floor(time/60)+" min et "+time%60+" s"
    }
    const elem = useMemo(()=>{
        if(isLoading ){
            return <div className={`w-[630px] h-[290px] flex center  text-white relative p-8 rounded-2xl`} style={{backgroundColor: color}}>
                <Loading />
            </div>
        }else{
            return (
            <div className={`flex flex-col ${color ??  "bg-black_grey"} text-white w-[630px] h-[290px] relative p-8 rounded-2xl`} style={{backgroundColor: color}}>
                <h5 className="">
                    <span className='font-mt-bold'>Mission name : </span>{launch.name} 
                </h5>
                <p><span className='font-mt-bold'>Flight number : </span> {launch.flight_number} - <span className='font-mt-bold'>Launch year : </span> {launch.date_utc.slice(0, 4)} </p>
                {capsule.type ? <> <p><span className='font-mt-bold'>type de capsule :</span> {capsule.type}</p></>: ""}
                <p><span className='font-mt-bold'>Site name :</span> {launchpads} </p>
                <div className="">
                    <p><span className='font-mt-bold'>Rocket name :</span> {rocket.name}</p>
                    <div className='flex flex-row gap-8 pt-2'>
                        <div className=''>
                            <p>Premier Stage : </p> 
                            {rocket.first_stage ?<>
                            <p className=''>- {rocket.first_stage.engines+" moteurs"} </p>
                            <p className='text-nowrap'>- {convertBurnTime(rocket.first_stage.burn_time_sec)} </p>
                            <p className=''> - {rocket.first_stage.fuel_amount_tons} T de carburants </p>
                        </>:""}       
                        </div>
                        <div className='col-5'>
                            <p>Second Stage : </p>    
                            {rocket.second_stage ?<> 
                            <p className=''>- {rocket.second_stage.engines+" moteurs"} </p>
                            <p className='text-nowrap'>- {convertBurnTime(rocket.second_stage.burn_time_sec)} </p>
                            <p className=''> - {rocket.second_stage.fuel_amount_tons} T de carburants </p></>:""}    
                        </div>
                    </div>
                </div>
                <div className="absolute right-2 top-4">
                    {launch.links.patch.small !== null && <img src={launch.links.patch.small} alt={launch.name} className="h-[100px]" ></img>}
                </div>
            </div>
        )}
    },[capsule.type, isLoading, launch.date_utc, launch.flight_number, launch.links.patch.small, launch.name, launchpads, rocket.first_stage, rocket.name, rocket.second_stage])
    
    return elem
}

export default LauncheComposant;
