import React,{ useState, useRef, useEffect, ReactNode, useMemo } from "react";
import  {  createTimeline } from "animejs";
import { Card } from "../card/card.tsx";


type GridProps = {
    frontItems: Array<ReactNode>;
    backItems: Array<ReactNode>;  
    onlyArrow: Array<number>;
    background: string;
    hiddendiv: string;
    hiddendivgrow: string;
    isGrow: Array<number>;
    
  }
export default function ExpandingGrid({frontItems,backItems,onlyArrow,background,hiddendiv,hiddendivgrow,isGrow}:GridProps) {
  const [active, setActive] = useState<number | null>(null);
  const [oldActive,setOldActive] = useState<number | null>(null);
  const [newActive,setNewActive] = useState<number | null>(null);
  const [flipActive,setFlipActive] = useState<number | null>(null);

  
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  

  const handleClick = (index: number) => {
    // setFlipActive(flipActive !== index ? index : -1);
    if(!!active && active && active !== index){
        setOldActive(active);
        setNewActive(index);

    }else{
        if(onlyArrow && onlyArrow[index] === 1){
          if(active !== index){
            setNewActive(index);
          }
        }else{
          setNewActive(active && active === index ? -1 : index);
        }    
        
    }
  };
  const handleOnlyArrow = ()=>{
    setNewActive(-1);
    setFlipActive(-1);
  }
  const handleOnComplete = ()=>{
    
    if(newActive === -1){setActive(null)}
    else if(newActive){setActive(newActive);setNewActive(null);}
  }
  const cardItems = useMemo(()=>{
    const list = new Array<ReactNode>();
    if(frontItems && backItems && frontItems.length && backItems.length){
        frontItems.forEach((item,i) => {
            if(i === 0){
              list.push(item)
            }else{
              const hiddiv = isGrow[i] === 1 ? `${hiddendivgrow} grow` : `${hiddendiv} flex-none`
              const isActive = active === i ? hiddiv : "flex-none";
              list.push(<div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className={` ${background} ${isActive} mb-4`}
                style={{ transformStyle: 'preserve-3d'}}
                onClick={()=>{handleClick(i)}}
                
              >
                <Card frontContent={item} backContent={backItems[i]} unflipped={oldActive === i } onComplete={()=>handleOnComplete()} onlyArrow={onlyArrow[i] === 1}  onlyArrowHandle={()=>handleOnlyArrow()} hiddendiv={hiddendiv} animatedDuration={600} />
              </div>)
            }
            
    })}
    return list;
   
   
  },[frontItems, backItems, background, active, oldActive, onlyArrow, newActive])
  return (
    <div className={`flex flex-row flex-wrap justify-around w-full `}>
        {cardItems}

    </div>
  );
}
