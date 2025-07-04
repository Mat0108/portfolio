import { createTimeline } from "animejs";
import { act, useEffect, useState } from "react";

type switchprops = {
    active: boolean;
    setActive: ()=> void;
    animationDuration?: number ;
    tag:string;
    update:number;
}
const Switch = ({active,setActive,animationDuration = 400,tag,update }:switchprops)=>{
    const [localActive,setLocalActive] = useState(active)

    function Animation(){
        const timeline = createTimeline({defaults:{duration:animationDuration,onComplete:setActive}})
        if(active === true){
            timeline.add(`.round-${tag}`,{
                translateX:'32px',
                backgroundColor:'#419047'
            },0)
            // timeline.add('.back',{
            //    backgroundColor:'#201f25' 
            // },0)
        }else{
            timeline.add(`.round-${tag}`,{
                translateX:'0px',
                backgroundColor:'#ffffff'
            },0)
            timeline.add(`.back-${tag}`,{
               backgroundColor:'#2C2D33' 
            },0)
        }
        
    }
    
    useEffect(()=>{Animation()},[localActive,update])
    return <div onClick={()=>{setLocalActive(!localActive)}} className={`back-${tag} w-16 h-8 rounded-[32px] p-1 shadow flex ${false ? 'justify-end':'justify-start'} `} style={{backgroundColor:'#2C2D33'}}>
        <div className={`round-${tag} w-6 h-6 rounded-full `} style={{backgroundColor: "#ffffff" }} ></div>
    </div>
}
export default Switch;