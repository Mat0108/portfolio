import { createTimeline } from "animejs";
import { useEffect, useRef, useState } from "react";
export const Card = ({props})=>{

    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef(null);
    const handleFlip = isFlipped === true && props.onlyArrow ? null : () => { setIsFlipped(!isFlipped);}


    useEffect(() => {
        if (cardRef.current) {
            const timeline = createTimeline({defaults:{duration:600,sync:true,onComplete:()=>{
              if(typeof props.onComplete === "function" ){
                props.onComplete();
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
      }, [isFlipped,props.divref]);
    
      useEffect(()=>{
        if(props.unflipped ){
          setIsFlipped(false)
        }
      },[props])
      const handleOnlyArrow = ()=>{
        if(props.onlyArrow){
          props.onlyArrowHandle();
          setIsFlipped(false)
        } 
        
      }
      return   <div className="perspective">
      <div
        ref={cardRef}
        className={`relative${isFlipped ? "w-[735px]":"w-full"} h-full cursor-pointer transition-transform duration-800 transform-3d`}
        onClick={handleFlip}
        style={{transformStyle: 'preserve-3d'}}
      >
        {/* Face avant de la carte */}
        {/* <div className="w-fit h-fit flex flex-col backface-hidden" style={{transform:''}}>
            {props.frontContent}
        </div> */}
        <div className="front flex flex-col center backface-hidden " style={{transform:''}} >
            {props.frontContent}
        </div>

        {/* Face arrière de la carte */}
        <div className="back absolute top-0 left-0 flex flex-col center h-full " style={{transform: 'rotateY(180deg)',backfaceVisibility:"hidden"}}>
            <div className="relative">
            {!!props.onlyArrow && <div className="absolute bottom-2 right-5" onClick={()=>handleOnlyArrow()}>
                    <img src={"/images/retour.png"} alt={"retour"} className="w-8"/>
                </div>}
            {props.backContent}
            </div>
        </div>
      </div>
    </div>

    
}