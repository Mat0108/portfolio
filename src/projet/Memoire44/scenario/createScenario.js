import { Scenariovide } from "./scenariovide";
import { loadScenario } from './index';
import { useEffect, useMemo, useState } from "react";

import { Country, returnHexagone } from "../haxagone/base";
import { SelectHexa } from './../haxagone/highlight';
import { ReturnArmy } from "../army/army";
import { SaveScenario } from './saveScenario';
import keyboardjs from "keyboardjs";
import { ListeDivers, ListeHexagone } from "./listeHexagone";
import { ArtillerieAxis, CharAxis, SoldatAxis } from "../army/army";
import { ArtillerieAllies, CharAllies, SoldatAllies } from "../army/army";

export const CreateScenario = () =>{

  const status = useState(1);
  const [grille, setGrille ] = useState(loadScenario(Scenariovide));
  const [delta, setDelta] = useState(1)
  const [orientation, setOrientation ] = useState(1);
  const [mouse,setMouse] = useState({case:null,bunker:null,defense:null,unité:null,medal:null});
  const [final,setFinal] = useState({case:null,bunker:null,defense:null,unité:null,medal:null});
  const [actualx,setActualX]  = useState(0);
  const [actualy,setActualY] = useState(0);
  const [modal, setModal] = useState(<></>)
  const [typeHexagone,setTypeHexagone] = useState(0)
  const screenwidth = document.getElementById("maindiv") ? document.getElementById("maindiv").clientWidth : null;
  const debug = false;
  let nbItemByLigne = screenwidth < 2500 ? 14 : 18;
  let wheel = 1;
  let layoutPetitEcran = false;

  
  let listDefense = [
    "Country",
    "SandBag",
    "Hedgehog",
    "Wire",
    "Country"
  ]
  let listunité = [
    new Country(),
    new SoldatAxis(),
    new CharAxis(),
    new ArtillerieAxis(),
    new SoldatAllies(),
    new CharAllies(),
    new ArtillerieAllies()
  ]
  let listmodal = [
    "Country",
    "MedalAllies",
    "MedalAxe"
  ]
  window.addEventListener("wheel", event => {
      let delta2 = Math.sign(event.deltaY);

      setDelta(delta2 >0? delta+1 : delta-1);
  });
  // useEffect(() => {
  //   console.log(delta)
  // }, [delta])


  keyboardjs.bind('d',(e)=>{
    e.preventRepeat();
    Valider();
  })
  keyboardjs.bind('q',(e)=>{
    e.preventRepeat();
    Reculer();
  })
  
  
  useEffect(() => {
    // console.log('orientation : ', orientation,delta,orientation <= 1)
    if(Math.abs(delta) > wheel){
      setDelta(0);
      let localgrille = {...grille}
      if(mouse.case && mouse.case.orientation){
        if(delta > 0 ){
          if(orientation >= mouse.case.orientation){
            setOrientation(1);
          }else{
            setOrientation(orientation+1);
          }
        }else{
          if(orientation <= 1){
            setOrientation(mouse.case.orientation);
          }else{
            setOrientation(orientation+1);
          }
        }
        if(mouse.case.hexagone.constructor.name){
          localgrille.grille[actualx][actualy].case = returnHexagone(mouse.case.hexagone.constructor.name,orientation).hexagone;
          setGrille(localgrille)
        }
      }
      if(mouse.bunker && mouse.bunker.orientation){
        if(delta > 0 ){
          if(orientation >= mouse.bunker.orientation){
            setOrientation(1);
          }else{
            setOrientation(orientation+1);
          }
        }else{
          if(orientation <= 1){
            setOrientation(mouse.bunker.orientation);
          }else{
            setOrientation(orientation+1);
          }
        }
        if(mouse.bunker.hexagone.constructor.name){
          localgrille.grille[actualx][actualy].bunker = returnHexagone(mouse.bunker.hexagone.constructor.name,orientation).hexagone;
          setGrille(localgrille)
        }
      }
      if(mouse.defense && mouse.defense.orientation){
        if(delta > 0 ){
          if(orientation >= mouse.defense.orientation){
            setOrientation(1);
          }else{
            setOrientation(orientation+1);
          }
        }else{
          if(orientation <= 1){
            setOrientation(mouse.defense.orientation);
          }else{
            setOrientation(orientation+1);
          }
        }
        if(mouse.defense.hexagone.constructor.name){
          localgrille.grille[actualx][actualy].defense = returnHexagone(mouse.defense.hexagone.constructor.name,mouse.defense.hexagone.constructor.name ? orientation === 1 : orientation).hexagone;
          setGrille(localgrille)
        }
      }
      if(mouse.unité && mouse.unité.max){
        if(delta > 0 ){
          if(orientation >= mouse.unité.max){
            setOrientation(1);
          }else{
            setOrientation(orientation+1);
          }
        }else{
          if(orientation <= 1){
            setOrientation(mouse.unité.max);
          }else{
            setOrientation(orientation+1);
          }
        }
        if(mouse.unité.hexagone.constructor.name){
          localgrille.grille[actualx][actualy].unité = ReturnArmy(mouse.unité.hexagone.constructor.name,orientation).hexagone;
          setGrille(localgrille)
        }
      }
      if(mouse.medal && mouse.medal.orientation){
        if(delta > 0 ){
          if(orientation >= mouse.medal.orientation){
            setOrientation(1);
          }else{
            setOrientation(orientation+1);
          }
        }else{
          if(orientation <= 1){
            setOrientation(mouse.medal.orientation);
          }else{
            setOrientation(orientation+1);
          }
        }
        if(mouse.medal.hexagone.constructor.name){
          localgrille.grille[actualx][actualy].medal = returnHexagone(mouse.medal.hexagone.constructor.name,orientation).hexagone;
          setGrille(localgrille)
        }
      }
    }
  }, [delta,mouse,actualx,actualy,orientation,grille,wheel])
  // useEffect(() => {
  //   console.log("mouse : ",mouse)
  // }, [mouse])
  function Reset(){
    setFinal({case:null,bunker:null,defense:null,unité:null,medal:null});
    setMouse({case:null,bunker:null,defense:null,unité:null,medal:null});
    let localgrille = {...grille}
    setDelta(0);
    localgrille.grille[actualx][actualy] = {case:null,bunker:null,defense:null,unité:null,medal:null}
    setGrille(localgrille)
  }

  function UpdateGrille(type,object){
    let localgrille = {...grille}
    setDelta(0)
    if(object){
      switch(type){
        case "case":
          if(!final.case){
            setMouse({case:object,bunker:null,defense:null,unité:null,medal:null});
            setOrientation(1);
            localgrille.grille[actualx][actualy].case = object.hexagone;
          }
          break;
        case "bunker":
          setMouse({case:null,bunker:object,defense:null,unité:null,medal:null});
          setOrientation(1);
          localgrille.grille[actualx][actualy].bunker = object.hexagone;
          break;
        case "defense":
          setMouse({case:null,bunker:null,defense:object,unité:null,medal:null});
          setOrientation(1);
          localgrille.grille[actualx][actualy].defense = object.hexagone;
          break;
        case "unité":
          setMouse({case:null,bunker:null,defense:null,unité:object,medal:null});
          setOrientation(1);
          localgrille.grille[actualx][actualy].unité = object.hexagone;
          break;
        case "medal":
          setMouse({case:null,bunker:null,defense:null,unité:null,medal:object});
          setOrientation(1);
          localgrille.grille[actualx][actualy].medal = object.hexagone;
          break;
        default:
          break;
      }
    }else{
      switch(type){
        case "case":
          if(!final.case){
            localgrille.grille[actualx][actualy].case = null
          }
          break;
        case "bunker":
          localgrille.grille[actualx][actualy].bunker = null
          break;
        case "defense":
          localgrille.grille[actualx][actualy].defense = null
          break;
        case "unité":
          localgrille.grille[actualx][actualy].unité = null
          break;
        case "medal":
          localgrille.grille[actualx][actualy].medal = null
          break;
        default:
          break;
      }
      
    }
    
    setGrille(localgrille)
  }

  function Valider(cond){
    setFinal({case:null,bunker:null,defense:null,unité:null,medal:null})
    setMouse({case:null,bunker:null,defense:null,unité:null,medal:null})
    
    if((actualx % 2 === 1 ? actualy === 11 : actualy === 12) || cond){
      setActualX(actualx+1);
      setActualY(0);
    }else{
      setActualY(actualy+1);
    }
  }
  function Reculer(cond){

    setFinal({case:null,bunker:null,defense:null,unité:null,medal:null})
    setMouse({case:null,bunker:null,defense:null,unité:null,medal:null})
    console.log(actualx,actualy)
    if( actualy === 0 ){
      if(actualx === 0){
        setActualX(8);
        setActualY(12);
      }else{
        setActualX(actualx-1);
        setActualY(actualx % 2 === 1 ? 12 :11);
      }

    }else{
      if(actualy === 0){
        setActualX(actualx-1);
        setActualY(actualx % 2 === 1 ? 12 :11);
      }
      setActualY(actualy-1);
    }
  }
 
  const showingCard = useMemo(() => {
    let listHexagoneFinal = [];
    let listDiversFinal = [];
    for(let i = 0;i<=parseInt(Object.keys(ListeHexagone(typeHexagone)).length/nbItemByLigne);i++){
      let local = ListeHexagone(typeHexagone).slice(i*nbItemByLigne,(i+1)*nbItemByLigne)
      listHexagoneFinal.push(
        <div className={`flex flew-row mb-[20px]`} key={`hexagone-${i}`}>
        {local.map((item,pos)=>{return <div className={`${screenwidth < 2000 ? "w-[50px]" : "w-[65px]"} relative`} key={item === "Country" ? `Country-${Math.random()}`: item} onMouseEnter={()=>{UpdateGrille("case",item === "Country" ? null : returnHexagone(item,orientation))}}   onClick={()=>{setFinal({...final,case:final.case ? null : returnHexagone(item,0)})}} >{returnHexagone(item,0).hexagone.render()}</div>})}
      </div> 
      ) 
    }  
    for(let i = 0;i<=parseInt(Object.keys(ListeDivers(typeHexagone)).length/nbItemByLigne);i++){
      let local = ListeDivers(typeHexagone).slice(i*nbItemByLigne,(i+1)*nbItemByLigne)
      listDiversFinal.push(
        <div className={`flex flew-row mb-[20px]`} key={`bunker-${i}`}>
        {local.map((item,pos)=>{return <div className={`${screenwidth < 2000 ? "w-[50px]" : "w-[65px]"} relative`} key={item === "Country" ? `Country-${Math.random()}`: item} onMouseEnter={()=>{UpdateGrille("bunker",item === "Country" ? null : returnHexagone(item,orientation))}}   onClick={()=>{setFinal({...final,case:final.case ? null : returnHexagone(item,0)})}} >{returnHexagone(item,0).hexagone.render()}</div>})}
      </div> 
      ) 
    }  
    return <div className='ml-8 mt-8 flex flex-row'>
      <div className='flex flex-col '>
        <div className="flex flex-row gap-8"> 
          <div className="bg-lightgrey w-fit p-2 rounded-full flex flex-row gap-4 hover:cursor-pointer" onClick={()=>{setTypeHexagone(0)}}>
            <div className="flex center"><div className={`w-4 h-4 rounded-full ${typeHexagone === 0 ? "bg-white border-4 border-green":"bg-gray"}`}></div></div>
            <label> Plaine</label>
          </div>
          <div className="bg-lightgrey w-fit p-2 rounded-full flex flex-row gap-4 hover:cursor-pointer" onClick={()=>{setTypeHexagone(3)}}>
            <div className="flex center"><div className={`w-4 h-4 rounded-full ${typeHexagone === 3 ? "bg-white border-4 border-green":"bg-gray"}`}></div></div>
            <label> Snow</label>
          </div>
        </div>
        <h1 className="text-[24px] text-white mb-[10px] "> Choissiez l'hexagone : </h1>
        <div className="flex flex-col ">
          {listHexagoneFinal}
        </div>
        <h1 className="text-[24px] text-white mb-[10px]"> Choissiez l'item : </h1>
        <div className="flex flex-row " >
          {listDiversFinal}
          {/* {listDivers.map(item=>{return <div className="w-[70px] relative" key={item} onMouseEnter={()=>{UpdateGrille("bunker",item === "Country" ? null :returnHexagone(item,orientation))}}  onClick={()=>{setFinal({...final,bunker:final.bunker ? null : returnHexagone(item,0)})}}>{returnHexagone(item,0).hexagone.render()}</div>})} */}
        </div>
        <div className="w-full h-full flex flex-row gap-8">
          <div className={`${layoutPetitEcran ? "w-full" : "w-1/2" }`}>
          <h1 className="text-[24px] text-white mt-[20px] mb-[10px] "> Choissiez l'item de défense : </h1>
            <div className="flex flex-row ">
              {listDefense.map((item,pos)=>{return <div className={`${screenwidth < 2000 ? "w-[50px]" : "w-[65px]"} relative`} key={item === "Country" ? `Country-${pos}`: item} onMouseEnter={()=>{UpdateGrille("defense",item === "Country" ? null :returnHexagone(item,orientation))}}  onClick={()=>{setFinal({...final,defense:final.defense ? null : returnHexagone(item,0)})}}>{returnHexagone(item,0).hexagone.render()}</div>})}
            </div>
            <h1 className="text-[24px] text-white mt-[20px] mb-[10px] " > Choissiez l'unité : </h1>
            <div className="flex flex-row ">
              {listunité.map((item,pos)=>{return <div className={`w-[70px] relative`} key={item === "Country" ? `Country-${pos}`: item} onMouseEnter={()=>{UpdateGrille("unité",item === "Country" ? null :ReturnArmy(item,0))}} onClick={()=>{setFinal({...final,unité:final.unité ? null : ReturnArmy(item,1)})}} >{ReturnArmy(item,0).hexagone.render()}</div>})}
            </div>
            <h1 className="text-[24px] text-white mt-[20px] mb-[10px] " > Choissiez la medaille : </h1>
            <div className="flex flex-row ">
              {listmodal.map((item,pos)=>{return <div className={`${screenwidth < 2000 ? "w-[50px]" : "w-[65px]"} relative`} key={item === "Country" ? `Country-${pos}`: item} onMouseEnter={()=>{UpdateGrille("medal",item === "Country" ? null :returnHexagone(item,0))}} onClick={()=>{setFinal({...final,medal:final.medal ? null : returnHexagone(item,0)})}} >{returnHexagone(item,0).hexagone.render()}</div>})}
            </div>
          </div>
          {!layoutPetitEcran && <div className="w-1/2">
            <div className="w-full mt-[20px] grid grid-cols-2 gap-4 " id={"menu"}>
            <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer"  onClick={()=>{Valider(false)}}>Avancer</div>
            <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{Reculer(false)}}>Reculer</div>
            
            
            <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{setActualX(actualx+1);setFinal({case:null,bunker:null,defense:null,unité:null})}}>Ligne suivant</div>
            <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{setActualX(actualx-1);setFinal({case:null,bunker:null,defense:null,unité:null})}}>Ligne précédente </div>
            <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{Reset()}}>Reset Selection</div>
            
            <div className="w-fit p-4 bg-white border-2 border-green rounded-full text-[18px] text-green hover:cursor-pointer" onClick={()=>{setModal(<SaveScenario close={()=>{setModal(<></>)}} grille={grille.grille}/>)}}>Sauvegarder </div>
          
          </div>
          </div>}
        </div>
        
      </div>
    </div>

  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [status,actualx,actualy,final,mouse,typeHexagone,layoutPetitEcran,screenwidth,orientation,grille])
  const Modal = useMemo(() => <div className='absolute top-0 '>{modal}</div>, [modal]);

  const global = useMemo(()=>{
      {
        
        return (
        <div className="relative w-fit h-fit">
          {debug ? <div className='absolute z-[4100] top-0 left-8 text-vivid_tangerine text-[20px] font-av-bold'><span className='text-white text-[20px] font-av-bold'>posx</span> posy</div>:""}
          <div key={"terrain"} className="mt-[1px] ml-[1px]"><img src={`images/Memoire44/terrain${typeHexagone}.webp`} alt={"terrain"} className='w-full h-full'/></div>
          <div className="absolute w-full flex flex-col z-[200] top-[58px] left-[10px]">
            {grille.grille.map((e,pos)=>{
              return <div className={`${pos % 2 === 1 ? "ml-[45px]":""} w-full flex flex-row`} key={`ligne-${pos}`}>{
                e.map((f,pos2)=>{
  
  
                    if(pos2 != (pos % 2 === 1 ? 12 : 13)){
                        
                        return <div className={`relative w-[91px] h-[78px] border-0 border-white ${f.action ? "hover:cursor-pointer":""}`} onClick={f.action}  key={`${pos}${pos2}`} id={`${pos}${pos2}`} >
                          {debug ? <div className='absolute z-50 bottom-0 left-8 text-vivid_tangerine text-[24px] font-av-bold'><span className='text-white text-[24px] font-av-bold'>{pos}</span> {pos2}</div> :""}
                          <div className='absolute z-10 w-full h-full'>{f.case ? f.case.render(): ""}</div>
                        <div className='absolute z-20 w-full h-full'>{f.defense ? f.defense.render(): ""}</div>
                        <div className='absolute z-30 w-full h-full'>{f.bunker ? f.bunker.render(): ""}</div>
                        <div className='absolute z-40 w-full h-full'>{f.unité ? f.unité.render(): ""}</div>
                        <div className='absolute z-[50] w-full h-full'>{f.medal ? f.medal.render(): ""}</div>
                          {pos === actualx && pos2 === actualy && <div className='absolute z-[60] w-full h-full'>{new SelectHexa().render()}</div>}
                          {/* <div className='absolute z-40 w-full h-full'>{f.highlight ? f.highlight.render(): ""}</div>
                          <div className='absolute z-[50] w-full h-full'>{f.select ? f.select.render(): ""}</div> */}
  
                          </div>
                    
                }})
            }</div>
          })}
          </div>
          {layoutPetitEcran && <div className="w-full mt-[20px] flex justify-around " id={"menu"}>
          <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{setActualX(actualx-1);setFinal({case:null,bunker:null,defense:null,unité:null})}}>Ligne précédente </div>
          <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{Reculer(false)}}>Reculer</div>
          <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{Reset()}}>Reset Selection</div>
          <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer"  onClick={()=>{Valider(false)}}>Avancer</div>
          <div className="w-fit p-4 bg-gray rounded-full text-[18px] text-white hover:cursor-pointer" onClick={()=>{setActualX(actualx+1);setFinal({case:null,bunker:null,defense:null,unité:null})}}>Ligne suivant</div>
          <div className="w-fit p-4 bg-white border-2 border-green rounded-full text-[18px] text-green hover:cursor-pointer" onClick={()=>{setModal(<SaveScenario close={()=>{setModal(<></>)}} grille={grille.grille}/>)}}>Sauvegarder </div>
          
        </div>}
        </div>)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[grille,actualx,actualy,typeHexagone])
    return <div className="w-full h-fit relative flex flex-row bg-gray-dark" id={"maindiv"} >
    {global} 
    {showingCard}
    {Modal}
      
  </div>
}