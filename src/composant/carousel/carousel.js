
import { useState,useEffect, useMemo } from "react";
import { createTimeline } from "animejs";
import { getW } from '../../tailwindUtils';
import React from "react";

// interface CarouselProps{
//   items:[],
//   nbShow: number,
//   ratio: number,
//   showPoint:boolean,
//   setShow:Function,
//   start:number,
//   tag:string,
//   hiddendiv:HTMLElement

// }
const Carousel =({props})=>{
    // props : items:[],nbShow:number,start:number,showPoint:boolean,ratio:number,tag:string
    /* exemple d'utilisations 
    const list = [<div className={`test-0 w-[200px] h-[200px] bg-red`}>{`test-0`}</div>,<div className={`test-1 w-[200px] h-[200px] bg-red`}>{`test-1`}</div>]
    <Carousel props={{items:list,nbShow:1,showPoint:true,ratio:20,start:0,tag:'test'}}/>
    le "time" doit etre mis dans les classNames des children, + passer en props
    
    */
    const [show,setShow]= useState(0);
    const [pos,setPos]= useState(0);
    const [items,setItems] = useState();
    const [ratio,setRatio] = useState(15);
    const [animatedItems,setAnimatedItems] = useState([]);
    const [animatedPoint,setAnimatedPoints] = useState([]);
    const [animatedDirection,setAnimatedDirection] = useState('');
    const [animated,setAnimated]=useState(false);    
    const [Mratio,setMRatio] = useState(10);
    const itemsLenght = Object.keys(props.items).length -1;
    
    useEffect(()=>{if(props.start){setShow(props.start);setPos(props.start%3)}},[props.start])
    useEffect(() => {
        if(props.items){
            let i;
            let list = [];
            if(typeof props.setShow === "function"){
                props.setShow(show);
            }
            
            for (i=show;i<props.nbShow+show;i++){
                if(Object.keys(props.items).length === 2){
                    list.push(props.items[i])
                }else{
                    if(i>=Object.keys(props.items).length){
                        list.push(props.items[i-Object.keys(props.items).length])
                    }else{
                        list.push(props.items[i])
                    }
                }
                
            }
            setItems(list)
        }
        if(props.ratio) {setMRatio(props.ratio);setRatio(props.ratio)}

        }, [props,show])

    const point = useMemo(() => {
        return (
            <>
            <img src={pos===0 ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point0"}/>
            <img src={pos===1 ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point1"}/>
            <img src={pos===2 ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point2"}/>
            </>
        )
    }, [pos])
    function UpdatePointAnimation(direction){

        let listpoint = [];
        let more = direction === 'next' ? 1:0;
        if(direction === 'next'){
            listpoint.push(<div style={{opacity:0}} className={`point-${props.tag}-0  w-[9px] sm:w-[18px] h-[10px] sm:h-[21px]`}><img src={show === Object.keys(props.items).length-1 ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point"}/></div>)
        }
        props.items.map((e,pos)=>{listpoint.push(<div className={`point-${props.tag}-${pos+more}  w-[9px] sm:w-[18px] h-[10px] sm:h-[21px]`}><img src={pos===show ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point"}/></div>)})
        if(direction === 'back'){
            listpoint.push(<div style={{opacity:0}} className={`point-${props.tag}-${Object.keys(props.items).length}  w-[9px] sm:w-[18px] h-[10px] sm:h-[21px]`}><img src={show === 0 ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point"}/></div>)
        
        }        
        setAnimatedPoints(listpoint);
    }
    function AnimationPoint(timeline,translation){
        const setting = animatedDirection === 'next' ? itemsLenght+1 : 0

        for(let i = 0;i<= itemsLenght+1;i++){
            timeline.add(`.point-${props.tag}-${i}`,{
                translateX:translation,
                opacity: i === setting ? 0 : 1
            },0);
        
            
        }   
    }
    function Animation(timeline,translation){
        if(animatedDirection === 'next'){
                animatedItems.forEach((item,pos)=>{  
                let index = item.props.className.split(" ")[0];
                let id = item.props.className.split(" ")[0].split('-')[1];
                if(pos === props.nbShow+1){document.getElementsByClassName(`${index}`).style.opacity = 0;}
                timeline.add(`.${index}`,{
                    translateX:translation,
                    opacity: id === show ? 0 : 1
                },0)
            })
        }else if(animatedDirection === 'back'){
            animatedItems.forEach((item,pos)=>{  
                let index = item.props.className.split(" ")[0];
                let id = item.props.className.split(" ")[0].split('-')[1];
                timeline.add(`.${index}`,{
                    translateX:translation,
                    opacity: id === show+props.nbShow-1 ? 0 : 1
                },0)
            })
        }
    }
    useEffect(()=>{
        if(props.items ){
            const timeline = createTimeline({defaults:{duration:props.animatedDuration,sync:true,onComplete:()=>{
                setTimeout(()=>{
                    if(animatedDirection === 'next'){
                        setShow(show>=itemsLenght ? 0:show+1);
                        setAnimated(false);
                        setAnimatedDirection('');
                    }else if(animatedDirection === 'back'){
                        setShow(show === 0 ? itemsLenght : show-1);
                        setAnimated(false);
                        setAnimatedDirection('');
                    }
                },50)

                    
            }}});
            
            if(animatedDirection === 'next'){
                AnimationPoint(timeline,'25px');
                Animation(timeline,'-100%');    
            }else if (animatedDirection === 'back'){                
                    AnimationPoint(timeline,"-25px");
                    animatedItems.forEach((item,pos)=>{
                       
                        let index = item.props.className.split(" ")[0];
                        let elem = document.getElementsByClassName(index);
                        elem[0].style.transform = 'translateX(-100%)';
                        if(pos === props.nbShow+1){elem[0].style.opacity = 0;}
                    })
                    Animation(timeline,'0%')
                }
            }
    },[animated,animatedDirection,animatedItems])
    
    function Back(){
        setAnimated(true);
        setAnimatedDirection('back');
        UpdatePointAnimation('back');
        let list=[];
        for(let i= show-1; i<=show+props.nbShow-1;i++){
            if(i < 0){
                list.push(props.items[i + itemsLenght + 1 ])
            }else if(i>itemsLenght){
                list.push(props.items[i - itemsLenght - 1 ])
            }else{
                list.push(props.items[i])
            }
        }
        setAnimatedItems(list);
        setPos(pos === 0 ? 2:pos-1);
    }
    function Next(){
        setAnimated(true);
        setAnimatedDirection('next');
        UpdatePointAnimation('next');
        let list = [];
        for (let i=show;i<=props.nbShow+show;i++){
            if(i>=Object.keys(props.items).length){
                list.push(props.items[i-Object.keys(props.items).length])
            }else{
                list.push(props.items[i])
            }
        }
        setAnimatedItems(list);
    }
    
    return (
        <div className="w-full flex flex-col">       
            <div className="flex flex-row w-full">
                <div className={`relative ${getW(Mratio,true)} sm:${getW(ratio,true)} flex center z-10`}>
                {!props.disableClic && <p className="text-5xl z-20" onClick={()=>{Back()}}>{"<"}</p>}
     
                </div>
                <div className={`relative flex flex-row ${getW(100-2*Mratio,true)} sm:${getW(100-2*ratio,true)}  h-full ${props.nbShow === 1 ? "":"center space-x-4"}`}>
                    {!animated && items}
                    {animated && <>
                    <div className={`absolute top-0 left-0 w- overflow-auto flex flex-row z-0 ${props.nbShow === 1 ? "":" space-x-4"}`}>{animatedItems}</div>
                    {props.hiddendiv}
                    </>}
                </div>
                <div className={`relative ${getW(Mratio,true)} sm:${getW(ratio,true)} flex center z-10`}>
                    {!props.disableClic &&<p className="text-5xl" onClick={()=>{Next()}}>{">"}</p>}
                    {/* <div className="absolute pl-1/4 w-3/4 h-full bg-bg-gray-dark"></div> */}
                </div>

            </div>
            {props.showPoint && <div className="w-full flex flex-col center mt-[20px]">
                <div className={`w-fit flex flex-row space-x-2 ${animatedDirection === 'next' ? 'pr-[1.6rem]':'pl-[1.55rem]'}`}>
                    
                    {animated && animatedPoint}
                </div>
                <div className="w-fit flex flex-row space-x-2">
                    {/* {point} */}
                    {!animated && props.items.map((e,pos)=>{return <div className={`w-[9px] sm:w-[18px] h-[10px] sm:h-[21px]`}><img src={pos===show ? "/images/pointbig.png" : "/images/pointlow.png"} alt={"point"}/></div>})}        
                </div>
                
            </div>}
        </div>
    )
}
export default Carousel