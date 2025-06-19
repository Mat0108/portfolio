import { animate } from "animejs";
import { useEffect } from "react";

const Loading = () =>{

    const elem = <div className="w-fit flex flex-col">
        <img src={"/images/loading.webp"} alt={"loading"} className="w-20 loading"/>
        <p className="text-center font-mt-bold-italic mt-2">Loading</p>
    </div>
    useEffect(()=>{    
        animate(".loading",{
        rotateZ:360*4,  
        duration: 10000,
        autoplay:true,
        loop:true

    })},[elem])
    return elem
    
}
export default Loading;