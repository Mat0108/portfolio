import { useEffect, useState } from "react";
import { getRandomColor } from "../pages/RandomColor";
import { getLaunch } from "../services/space-x";

const CapsuleComposant = ({capsule})=>{
    const [launch,setLaunch] = useState();
    useEffect(()=>{
        const fetchData = async ()=>{
            try {

                const launch = await getLaunch(capsule.launches[0])
                setLaunch(launch)
            }catch(e){
                return;
            }
        }
        fetchData();
    },[capsule])
    
    return (
        <div className={`flex flex-col text-white w-[600px] h-[200px] relative p-8 rounded-2xl`} style={{backgroundColor: getRandomColor()}}>
            <div className="  ">
                <h5 className="flex justify-between text-lg ">
                    <p><span className="font-mt-bold">Capsule : </span> {capsule.type}</p>
                    {launch && <p>  <span className='font-mt-bold'>Last mission name : </span>{launch.name} </p>}
                </h5>
                    
                <div className="mt-2 w-full flex flex-col">
                    <div className="w-[80%] text-justify"><span className="font-mt-bold ">last update :</span> {capsule.last_update}</div>
                    <div><span className="font-mt-bold ">status :</span> {capsule.status}</div>
                    {capsule.details != null && <div>details : {capsule.details}</div>}
                    {capsule.original_launch && <div>launch date : {capsule.original_launch}</div>}
                </div>
                {launch && 
                        <div className="absolute right-2 top-1/3">
                    {launch.links.patch.small !== null && <img src={launch.links.patch.small} alt={launch.name} className="h-[100px]" ></img>}
                </div>}
            </div>
        </div>
    )
}
export default CapsuleComposant;