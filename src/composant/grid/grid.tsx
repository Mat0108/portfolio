import { createTimeline } from "animejs";
import React, { ReactNode, SetStateAction, useRef, useState } from "react"
import { useEffect } from "react"

interface GridProps{
    items: any[];
    tag:string;
}
type GridItemProps = {
    tag: string;
    id: number;
    isActive: boolean;
    onClick: () => void;
    div:ReactNode ;
  };
  const GridItem = ({tag, id, isActive, onClick,div }: GridItemProps) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            const timeline = createTimeline({defaults:{duration:600}})
            timeline.add(ref.current,{
                flex: isActive ? 3 : 1,
                duration: 500,
                easing: "easeInOutQuad",
            },0)
        }

   
    }, [isActive]);
  
    return (
      <div
        ref={ref}
        onClick={onClick}
      >
        {div}
      </div>
    );
  };
export const Grid = (props:GridProps) => {
    const [gridElem,setGridElem] = useState(new Array());
    const [animatedGridElem,setAnimatedGridElem] = useState(new Array());
    const [animated,setAnimated] = useState(false);
    const [id,setId]= useState<number|null>();
    const [lastGrow,setLastGrow] = useState<number|undefined>();
    function grow(){
        const timeline = createTimeline({defaults:{duration:600}})
        timeline.add(`.${props.tag}-${id}`,{
            width:800
        },0)
    }

    const handleClick = (index: number) => {
        setId(id === index ? null : index);
      };
    useEffect(()=>{
        let list = props.items.map((item,i)=>{
            return <div
            key={i}
            className="flex-grow basis-1/4 transition-all"
            style={{ flex: id === i ? 3 : 1 }}
          >
            <GridItem
                tag={"test"}
                id={i}
                isActive={id === i}
                onClick={() => handleClick(i)}
                div={item}
            />
          </div>
        })
        setGridElem(list);
    },[props,id])
    return <div className="w-full h-full p-4 flex flex-wrap max-w-6xl mx-auto ">
        {gridElem}
    </div>
}
    
export const ExempleGrid = ()=>{
    const colors = [
        "bg-[#31344e]",
        "bg-[#46485A]",
        "bg-[#4C75FF]",
        "bg-[#b8c6f5]",
        "bg-[#4e4b31]",
        "bg-[#828069]",
        "bg-[#B7B5A0]",
        "bg-[#072E25]",
        "bg-[#245F36]",
        "bg-[#419047]",
        "bg-[#96BD90]"
      ];
    const size = "w-full h-[200px]"
    let list = new Array();
    for(let i = 0;i<10;i++){
        list.push(<div className={`${size} ${colors[i]}`}></div>)
    }
    return <Grid items={list} tag="test"/>

}