import { createTimeline } from "animejs";
import { useEffect, useState } from "react";

type switchprops = {
    active: boolean;
    setActive: ()=> void;
    animationDuration?: number ;
}
const Switch = ({active,setActive,animationDuration = 400}:switchprops)=>{
    const [localActive,setLocalActive] = useState(active)
    useEffect(()=>{
        
        const timeline = createTimeline({defaults:{duration:animationDuration,onComplete:setActive}})
        if(localActive === true){
            timeline.add('.round',{
                translateX:'32px',
                backgroundColor:'#419047'
            },0)
            // timeline.add('.back',{
            //    backgroundColor:'#201f25' 
            // },0)
        }else{
            timeline.add('.round',{
                translateX:'0px',
                backgroundColor:'#ffffff'
            },0)
            timeline.add('.back',{
               backgroundColor:'#2C2D33' 
            },0)
        }

    },[localActive])
    return <div onClick={()=>{setLocalActive(!localActive)}} className={`back w-16 h-8 rounded-[32px] p-1 shadow flex ${false ? 'justify-end':'justify-start'} `} style={{backgroundColor:'#2C2D33'}}>
        <div className={`round w-6 h-6 rounded-full `} style={{backgroundColor:'#ffffff'}} ></div>
    </div>
}
export default Switch;