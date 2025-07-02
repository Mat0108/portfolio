import { createTimeline } from "animejs";
import { VerList } from "../divers/Generique";

function OrientationAnimlation(item,item2){
    function values(x,y){
        return VerList([
        {x:x-1,y: x %2  === 1 ? y : y-1,deplX:-50,deplY:-100,id:0},
        {x:x+1,y: x %2  === 1 ? y : y-1,deplX:-50,deplY:100,id:1},
        {x:x,y:y-1,deplX:-100,deplY:0,id:2},
        {x:x,y:y+1,deplX:100,deplY:0,id:3},
        {x:x-1,y:x %2  === 1 ? y+1:y,deplX:50,deplY:-100,id:4},
        {x:x+1,y:x %2  === 1 ? y+1:y,deplX:50,deplY:100,id:5}
    ])
    }
    let value = values(item.x,item.y).filter(val=>val.x === item2.x && val.y === item2.y)
    if(value.length !== 1){
        console.log("error animation")
    }
    return value[0]
    
}
export function AnimationFigurine(path,animatedDuration,onCompletef,onBeginf){
    if(path.length >=1 ){
        let deplX = 0;
        let deplY = 0;
        const timeline = createTimeline({defaults:{duration:animatedDuration*path.length},onComplete:()=>{onCompletef()},onBegin:()=>{if(typeof onBeginf === "function" ){onBeginf()}}})        
        path.map((item,pos)=>{
            if(pos !== path.length - 1){
                let nextitem = path[pos+1];
                let value = OrientationAnimlation(item,nextitem)
                deplX = deplX + value.deplX;
                deplY = deplY + value.deplY;

                timeline.add(`.pion-${path[0].x}-${path[0].y}`,{
                    translateX:`${deplX}%`,
                    translateY:`${deplY}%`,
                    duration:animatedDuration
                },animatedDuration*pos)
            }
          })
    }

    
}

export function AnimationBullet(start,end,animatedDuration){

}
