
import React, { useState,useEffect, useMemo, ReactNode, SetStateAction } from "react";
import { createTimeline } from "animejs";
import { getW } from '../../tailwindUtils';

type CarouselProps = {
  elems:Array<React.JSX.Element>;
  nbShow: number;
  display: number;
  showPoint:boolean;
  updateShow?:Function;
  start:number;
  tag:string;
  hiddendiv:ReactNode;
  animatedDuration: number;
  disableClic?: boolean;
  darkPoint?:boolean;

}
const Carousel =({elems,nbShow,display,showPoint,updateShow,start,tag,hiddendiv,animatedDuration,disableClic,darkPoint}:CarouselProps)=>{
    // props : items:[],nbShow:number,start:number,showPoint:boolean,ratio:number,tag:string
    /* exemple d'utilisations 
    const list = [<div className={`test-0 w-[200px] h-[200px] bg-red`}>{`test-0`}</div>,<div className={`test-1 w-[200px] h-[200px] bg-red`}>{`test-1`}</div>]
    <Carousel props={{items:list,nbShow:1,showPoint:true,ratio:20,start:0,tag:'test'}}/>
    le "time" doit etre mis dans les classNames des children, + passer en props
    
    */
    const [show,setShow]= useState(0);
    const [pos,setPos]= useState(0);
    const [items,setItems] = useState<React.JSX.Element[] | undefined >();
    const [ratio,setRatio] = useState(15);
    const [animatedItems,setAnimatedItems] = useState<React.JSX.Element[] | undefined >([]);
    const [animatedPoint,setAnimatedPoints] = useState<React.JSX.Element[]  | undefined >([]);
    const [animatedDirection,setAnimatedDirection] = useState('');
    const [animated,setAnimated]=useState(false);    
    const [Mratio,setMRatio] = useState(10);
    const [itemsLenght,setItemsLenght] =useState(0);
    const isMobile = window.screen.width < 600;
    useEffect(()=>{if(start){setShow(start);setPos(start%3)}},[start])
    useEffect(() => {
        if(elems){
            
            setItemsLenght(Object.keys(elems).length - 1)
            let i;
            let list = new Array<React.JSX.Element>();
            if(typeof updateShow === "function"){
                updateShow(show);
            }
            
            for (i=show;i<nbShow+show;i++){
                if(i>=Object.keys(elems).length){
                    list.push(elems[i-Object.keys(elems).length])
                }else{
                    list.push(elems[i] )
                }
            }                
            setItems(list)
        }
        if(display) {setMRatio(display);setRatio(display)}

        }, [display, elems, nbShow, show, updateShow])

    const point = useMemo(() => {
        return (
            <>
            <img src={pos===0 ? "/images/pointbig.webp" : "/images/pointlow.webp"} alt={"point0"}/>
            <img src={pos===1 ? "/images/pointbig.webp" : "/images/pointlow.webp"} alt={"point1"}/>
            <img src={pos===2 ? "/images/pointbig.webp" : "/images/pointlow.webp"} alt={"point2"}/>
            </>
        )
    }, [pos])
    function UpdatePointAnimation(direction){

        let listpoint = new Array<React.JSX.Element>();
        let more = direction === 'next' ? 1:0;
        if(direction === 'next'){
            listpoint.push(<div style={{opacity:0}} className={`point-${tag}-0  w-[9px] sm:w-[18px] h-[10px] sm:h-[21px]`}><img src={show === itemsLenght ? `/images/pointbig${darkPoint ? "b":""}.webp` :`/images/pointlow${darkPoint ? "b":""}.webp`} alt={"point"}/></div>)
        }
        if(elems){elems.map((e,pos)=>{listpoint.push(<div className={`point-${tag}-${pos+more}  w-[9px] sm:w-[18px] h-[10px] sm:h-[21px]`}><img src={pos===show ? `/images/pointbig${darkPoint ? "b":""}.webp` :`/images/pointlow${darkPoint ? "b":""}.webp`} alt={"point"}/></div>)})
        }
            if(direction === 'back'){
            listpoint.push(<div style={{opacity:0}} className={`point-${tag}-${itemsLenght+1}  w-[9px] sm:w-[18px] h-[10px] sm:h-[21px]`}><img src={show === 0 ? `/images/pointbig${darkPoint ? "b":""}.webp` :`/images/pointlow${darkPoint ? "b":""}.webp`} alt={"point"}/></div>)
        
        }        
        setAnimatedPoints(listpoint);
    }
    function AnimationPoint(timeline,translation){
        const setting = animatedDirection === 'next' ? itemsLenght+1 : 0

        for(let i = 0;i<= itemsLenght+1;i++){
            timeline.add(`.point-${tag}-${i}`,{
                translateX:translation,
                opacity: i === setting ? 0 : 1
            },0);
        
            
        }   
    }
    function Animation(timeline,translation){
        if(animatedDirection === 'next' && !!animatedItems && Object.keys(animatedItems).length){
                animatedItems.forEach((item,pos)=>{
    
                    if(item && item.props){
                        let index = item.props.className.split(" ")[0];
                        let id = item.props.className.split(" ")[0].split('-')[1];
                        if(pos === nbShow+1){
                            const el = document.getElementsByClassName(`${index}`)[0] as HTMLElement;
                            if (el) {
                            el.style.opacity = '0';
                            }
                        }
                        timeline.add(`.${index}`,{
                            translateX:translation,
                            opacity: parseInt(id) === show ? 0 : 1
                        },0)
                    }
                
            })
        }else if(animatedDirection === 'back' && !!animatedItems && Object.keys(animatedItems).length){
            animatedItems.forEach((item,pos)=>{ 
                if(item && item.props){
                    let index = item.props.className.split(" ")[0];
                    let id = item.props.className.split(" ")[0].split('-')[1];
                    timeline.add(`.${index}`,{
                        translateX:translation,
                        opacity: parseInt(id) === show+nbShow-1 ? "0" : "1"
                    },0)
                }
            })
        }
    }
    useEffect(()=>{
        if(items && animated){
            const timeline = createTimeline({defaults:{duration:animatedDuration,onComplete:()=>{
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
                },isMobile ? 0 : 50)

                    
            }}});
            
            if(animatedDirection === 'next'){
                if(showPoint){AnimationPoint(timeline,'25px');}
                Animation(timeline,'-100%');    
            }else if (animatedDirection === 'back' && !!animatedItems && Object.keys(animatedItems).length){                
                    if(showPoint){AnimationPoint(timeline,"-25px");}
                    animatedItems.forEach((item,pos)=>{
              
                        if(item && item.props){
                            let index = item.props.className.split(" ")[0];
                            let elem = document.getElementsByClassName(index)[0] as HTMLElement;
                            if(elem){
                                elem.style.transform = 'translateX(-100%)';
                                if(pos === nbShow+1){elem.style.opacity = "0";}
                            }
                        
                        }
                    })
                    Animation(timeline,'0%')
                }
            }
    },[animated, items,animatedDirection, animatedItems, itemsLenght, animatedDuration, nbShow, show])
    
    function Back(){
        setAnimated(true);
        setAnimatedDirection('back');
        UpdatePointAnimation('back');
        let list= new Array<React.JSX.Element>();
        for(let i= show-1; i<=show+nbShow-1;i++){
            if(i < 0){
                list.push(elems[i + itemsLenght + 1 ])
            }else if(i>itemsLenght){
                list.push(elems[i - itemsLenght - 1 ])
            }else{
                list.push(elems[i])
            }
        }
        setAnimatedItems(list);
        setPos(pos === 0 ? 2:pos-1);
    }
    function Next(){
        setAnimated(true);
        setAnimatedDirection('next');
        UpdatePointAnimation('next');
        let list = new Array<React.JSX.Element>();
        for (let i=show;i<=nbShow+show;i++){
            if(i>=Object.keys(elems).length){
                list.push(elems[i-itemsLenght] )
            }else{
                list.push(elems[i])
            }
        }
        setAnimatedItems(list);
    }
    if (!isMobile) {
    let startX = 0;
    let endX = 0;
    const swipeThreshold = 50; // distance minimale en px pour valider un slide
    let e1 = document.getElementById(`carousel-${tag}`);

    e1?.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    e1?.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const deltaX = endX - startX;
        if (Math.abs(deltaX) > swipeThreshold) {
        if (deltaX < 0) {
            Next(); // swipe gauche → droite vers gauche
        } else {
            Back(); // swipe droite → gauche vers droite
        }
        }
    }
    }

        useEffect(() => {
            if(!isMobile){
                
                const verticalScrollZone = document.getElementById('Scrollref');
                const scrollZone = document.getElementById(`carousel-${tag}`);
                
                if (!scrollZone || !verticalScrollZone) return
                
                let lastScrollTime = 0;
                const throttleDuration = 1000;

                const handleWheel = (event) => {
                    event.preventDefault();
                    const now = Date.now();

                    if (now - lastScrollTime < throttleDuration) return;

                    if (event.deltaY > 0) Next();
                    else if (event.deltaY < 0) Back();

                    lastScrollTime = now;
                };

                scrollZone.addEventListener("wheel", handleWheel, { passive: false });
                return () => scrollZone.removeEventListener("wheel", handleWheel);
            }

    }, [tag,items]);
    return (
        <div className="w-full flex flex-col" id={`carousel-${tag}`}>       
            <div className="flex flex-row w-full">
                <div className={`relative ${getW(Mratio,true)} sm:${getW(ratio,true)} flex center z-10`}>
                {!disableClic && <p className="text-xl lg:text-5xl z-20 mr-[2px] " onClick={()=>{Back()}}>{"<"}</p>}
     
                </div>
                <div className={`relative flex flex-row ${getW(100-2*Mratio,true)} sm:${getW(100-2*ratio,true)}  h-full ${nbShow === 1 ? "":"center space-x-4"}`}>
                    {!animated && items}
                    {animated && <div className={`absolute top-0 left-0 w- overflow-auto flex flex-row z-0 ${nbShow === 1 ? "":" space-x-4"}`}>{animatedItems}</div>}
                    {animated && hiddendiv}
                    
                </div>
                <div className={`relative ${getW(Mratio,true)} sm:${getW(ratio,true)} flex center z-10`}>
                    {!disableClic &&<p className="text-xl lg:text-5xl ml-[2px]" onClick={()=>{Next()}}>{">"}</p>}
                    {/* <div className="absolute pl-1/4 w-3/4 h-full bg-bg-gray-dark"></div> */}
                </div>

            </div>
            {showPoint && <div className="w-full flex flex-col center mt-[5px] lg:mt-[20px]">
                <div className={`w-fit flex flex-row space-x-2 ${animatedDirection === 'next' ? 'pr-[1.6rem]':'pl-[1.55rem]'}`}>
                    
                    {animated && animatedPoint}
                </div>
                <div className="w-fit flex flex-row space-x-2">
                    {/* {point} */}
                    {!animated && elems && elems.map((e,pos)=>{return <div className={`w-[9px] sm:w-[18px] h-[10px] sm:h-[21px]`}><img src={pos === show ? `/images/pointbig${darkPoint ? "b":""}.webp` :`/images/pointlow${darkPoint ? "b":""}.webp`} alt={"point"}/></div>})}        
                </div>
                
            </div>}
        </div>
    )
}
export default Carousel