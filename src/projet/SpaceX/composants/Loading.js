import { animate } from "animejs";
import { useEffect } from "react";

const Loading = ({size,darkMode}) =>{

    const elem = <div className="w-fit h-full flex flex-col center">
        <img src={darkMode ? "/images/loading-darkmode.webp" :"/images/loading.webp"} alt={"loading"} className={`loading ${size ?? "w-20"}`}/>
        <p className={`text-center font-mt-bold-italic mt-2 ${darkMode ? 'text-black' : 'text-white'}`}>Loading</p>
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