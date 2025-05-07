import { createTimeline } from "animejs";
import React, { useEffect, useRef, useState,ReactNode } from "react";

type CardProps = {
  frontContent: ReactNode;
  backContent: ReactNode;
  onlyArrow: boolean;
  onlyArrowHandle: ()=> void;
  unflipped: boolean;
  flipped?: boolean;
  onComplete: ()=>void;
  hiddendiv: string;
  animatedDuration:number;
  
}
export const Card = ({frontContent,backContent,onlyArrow,onlyArrowHandle,unflipped,flipped,onComplete,hiddendiv,animatedDuration}:CardProps)=>{

    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef(null);
    const handleFlip = ()=>{
      if(!(isFlipped && onlyArrow) ){
        setIsFlipped(!isFlipped);
      }
      // isFlipped === true && onlyArrow ? null : () => { setIsFlipped(!isFlipped);}
    }

    useEffect(() => {
        if (cardRef.current) {
            const timeline = createTimeline({defaults:{duration:animatedDuration,onComplete:()=>{
              if(typeof onComplete === "function" ){
                onComplete();
              }
            }}})
        
            if (isFlipped) {
                timeline.add(cardRef.current,{
                    rotateY:180,
                    easing: 'easeInOutSine',
                    },0);
            } else{
              timeline.add(cardRef.current,{
                      rotateY:0,
                      easing: 'easeInOutSine',
              }, 0) 
     
            }
        }
      }, [isFlipped, onComplete]);
    
      useEffect(()=>{
        if(unflipped ){
          setIsFlipped(false)
        }
        if(flipped){
          setIsFlipped(true)
        }
      },[unflipped,flipped])
      const handleOnlyArrow = ()=>{
        if(onlyArrow){
          onlyArrowHandle();
          setIsFlipped(false)
        } 
        
      }
      
      return   <div className="perspective">
      <div
        ref={cardRef}
        className={`relative ${isFlipped ? "":""} w-full h-full cursor-pointer transition-transform duration-800 transform-3d`}
        onClick={handleFlip}
        style={{transformStyle: 'preserve-3d'}}
      >
        {/* Face avant de la carte */}
        {/* <div className="w-fit h-fit flex flex-col backface-hidden" style={{transform:''}}>
            {props.frontContent}
        </div> */}
        <div className="front flex flex-col center backface-hidden " style={{transform:''}} >
            {/* {isFlipped ? <div className={`${hiddendiv} flex center`}>{frontContent}</div> : frontContent} */}
            {frontContent}
        </div>

        {/* Face arrière de la carte */}
     
        <div className="back absolute top-0 left-0 flex flex-col center w-full h-full " style={{transform: 'rotateY(180deg)',backfaceVisibility:"hidden"}}>
            <div className="relative w-full">
             <div className="absolute bottom-2 right-5" onClick={()=>handleOnlyArrow()}>
                    <img src={"/images/retour.png"} alt={"retour"} className="w-8"/>
              </div>
            {backContent}
            </div>
        </div>
      </div>
    </div>

    
}