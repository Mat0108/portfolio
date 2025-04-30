import React,{ useState, useRef, useEffect, ReactNode, useMemo } from "react";
import  {  createTimeline } from "animejs";
import { Card } from "../composant/card/card";

type GridItemProps = {
  id: number;
  isActive: boolean;
  onClick: () => void;
  frontContent: ReactNode;
  backContent: ReactNode;
};

const GridItem = ({ id, isActive, onClick,frontContent,backContent }: GridItemProps) => {
  return (
    <div
      onClick={onClick}
      className={``}
    >
        <div className="front flex flex-col center backface-hidden" style={{transform:''}} >
            {frontContent}
        </div>

        {/* Face arrière de la carte */}
        <div className="back absolute top-0 left-0 flex flex-col center " style={{transform: 'rotateY(180deg)',backfaceVisibility:"hidden",flexGrow: isActive ? 5 : 1 , transformStyle: 'preserve-3d'}}>
            {backContent}
        </div>
    </div>
  );
};

type GridProps = {
    frontItems: Array<ReactNode>;
    backItems: Array<ReactNode>;
}
export default function ExpandingGrid({frontItems,backItems}:GridProps) {
  const [active, setActive] = useState<number | null>(null);
  const [oldActive,setOldActive] = useState<number | null>(null);
  const [newActive,setNewActive] = useState<number | null>(null);

  
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  

  const handleClick = (index: number) => {
    console.log(active,index)
    if(active !== index){
        setOldActive(active);
        setNewActive(index);

    }else{    
        setActive(active === index ? null : index);
    }
  };
  const cardItems = useMemo(()=>{
    const list = new Array<ReactNode>();
    console.log('active : ', active)
    if(frontItems && backItems && frontItems.length && backItems.length){
        frontItems.forEach((item,i) => {
            list.push(<div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="transition-all"
              style={{ flexGrow: active === i ? 6 : 1 , transformStyle: 'preserve-3d'}}
              onClick={()=>{handleClick(i)}}
              
            >
                <Card props={{frontContent:item,backContent:backItems[i],unflipped:oldActive === i ? true:null,onComplete:()=>{if(newActive){setActive(newActive);setNewActive(null);}}}}/>
    
            </div>)
    })}
    return list;
   
   
  },[active,oldActive,newActive])
  return (
    <div className="flex w-full  mx-auto">
        {cardItems}

    </div>
  );
}
