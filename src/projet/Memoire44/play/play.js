import React, { useEffect, useMemo, useState } from 'react';

import {CardGenerique, Dice, Flag, LogList, VerificationLineOfSight, isCombatRapproche, pointproche, showPortee} from '../divers/Generique'
import { ReturnScenario, loadScenario } from '../scenario';
import { Attacking, Selected, Move, Retreat, SelectHexa, Target } from '../haxagone/highlight';
import { AddDice, HitUnit, UnitGenieAllies } from '../army/army';
import { AirPower, Barrage, CampAffichage, CardSelect} from '../divers/Card';


import { useParams } from 'react-router';
import { Hills, Mine, SandBag, Wire } from '../haxagone/base';
import { FormControlLabel, Switch } from '@mui/material';
import { RoadRight, RoadCurve, RoadHillRight, RoadHillCurve, RoadBranchRight,RoadBranchLeft,RoadX,RoadY  } from '../haxagone/terrain';
import { Link } from 'react-router-dom';
import { object } from 'motion/react-client';
import { AnimationFigurine } from '../animation/animation';


const Play =()=> {
  const [card, setCard] = useState(new CardGenerique("Choisir une carte","back-fr"))
    // new CardGenerique("Attaque centre","attack-center-fr",3,2,"ALL"),);
  const { name , debug: enabledebug} = useParams();
  
  const selectedScenerio = ReturnScenario(name);
  const [status,setStatus ] = useState(1)
  const [grille, setGrille ] = useState(loadScenario(ReturnScenario(name)));
  const [animation,setAnimation] = useState(new Array(6))
  const [animationShow,setAnimationShow] = useState(false)
  const [camp, setCamp ]  = useState(selectedScenerio.camp) // false alliés true axis
  const [camp2, setCamp2 ]  = useState(selectedScenerio.camp === "Allies" ? "Axis" : "Allies")
  const [medalAlliésList,setMedalAlliésList] = useState([])
  const [medalAxisList,setMedalAxisList]  = useState([])
  const [modal, setModal] = useState(<></>)
  const [debug, setDebug] = useState(enabledebug === "debug" ? true : false);
  
  let x = 13;
  let zone1 = {min:0,max:3,min2:0,max2:3}
  let zone2 = {min:3,max:8,min2:3,max2:8}
  let zone3 =  {min:8,max:12,min2:8,max2:12}

  useEffect(() => {
    setGrille(loadScenario(selectedScenerio));
}, [selectedScenerio])


  function StateButton(text,textvalider,status,action,showvalider){
    return <div className='mt-[20px] w-[276px] h-[50px] relative p-2 flex flex-row bg-light_gray rounded-lg'><div className={`w-5 h-5 rounded-full mt-[6px] mr-[10px] border-[5px] ${status ? "border-green":"border-red"}`}></div><div className='text-white text-[18px] '>{text}</div>{showvalider ? <div className="absolute right-2 top-[7px] text-white ml-[30px] text-[16px] border-2 border-black hover:bg-lightgrey rounded-lg p-1"  onClick={action}>{textvalider}</div>:""}</div>
  } 
  function RemoveHighlightAtPos(x,y){
    let f = grille.grille[x][y]
    let localgrille = {...grille};
    localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:f.action,highlight:null,select:null}
    setGrille(localgrille)        
  }
  //fonction pour retirer les highlight 
  function RemoveHighlight(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    localgrille.grille.forEach((e,pos)=>{
      e.forEach((f,pos2)=>{
        if(f.highlight && (f.highlight instanceof Move  || f.highlight instanceof Target || f.highlight instanceof Retreat)){
          localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:null,highlight:null,select:f.select}
        }
      })})
    setGrille(localgrille2)

  }
  function switchCamp(){
    let localcamp = camp;
    setCamp(camp2);
    setCamp2(localcamp);
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    localgrille.grille.forEach((e,pos)=>{
      e.forEach((f,pos2)=>{
        if(f.select !== null | f.highlight !== null | f.action !== null){              
          localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:null,highlight:null,select:null}
        }
      })})
    setGrille(localgrille2)

  }
  function UpdateMedal(f,nb){
    if(nb < 1){
      if(camp === "Allies"){
        medalAlliésList.push(HitUnit(f.unité,1));
        
      }else{
        medalAxisList.push(HitUnit(f.unité,1));
        }
    }
  }
  function updateAttackUnit(x,y,x2,y2,unité,dicenb,star,refire,ambuscade){
    let localgrille = {...grille};
    let dice = Dice(dicenb,unité,setAnimation,star ? true:false,true)
    let result = dice.LoseLife;
    setAnimationShow(true)
    setTimeout(() => {
      setAnimationShow(false)
    }, 2100);

    setTimeout(() => {
      setAnimation([])
    }, 6000);
    setTimeout(() => {
      RemoveHighlight()
      let f = localgrille.grille[x][y];
      if(f.unité._nombre - result <= 0){
        if(camp === "Allies"){
          let medal = medalAlliésList.map(object => ({ ...object}))
          medal.push(HitUnit(f.unité,1));
          setMedalAlliésList(medal);
        }else{
          let medal = medalAxisList.map(object => ({ ...object}))
          modal.push(HitUnit(f.unité,1));
          setMedalAxisList(medal+1);
        }
        localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:null,action:null,highlight:null,select:null}
        
      }else if(dice.nbflag > 0 && localgrille.grille[x][y]._ignoreflag ? dice.nbflag > 1 : true){
        let flaglist = Flag(x,y,dice.nbflag,camp2);
        if(!Object.keys(flaglist).length ){
          localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité._nombre - result > 0 ? HitUnit(f.unité,f.unité._nombre - result ):null,action:ambuscade ? ()=>{calculDés(x,y,grille.grille[x][y].unité,false)}:null,highlight:null,select:ambuscade ? new Attacking() : null}
        }else{
          let chooseflag = 0
          flaglist.forEach(item=>{
            if(localgrille.grille[item.x][item.y].unité){
              chooseflag += 1;
            }
          })
          if(chooseflag === Object.keys(flaglist).length  ){
            localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité._nombre - result-dice.nbflag > 0 ? HitUnit(f.unité,f.unité._nombre - result - dice.nbflag ):null,action:null,highlight:null,select:null}
          }else if(chooseflag === Object.keys(flaglist).length-1  ){
            flaglist.forEach(item=>{
              if(!localgrille.grille[item.x][item.y].unité){
                let g = localgrille.grille[item.x][item.y];
                localgrille.grille[item.x][item.y] = {case:g.case,defense:g.defense,unité:f.unité._nombre - result > 0 ? HitUnit(f.unité,f.unité._nombre - result):null,action:null,highlight:null,select:null}
                localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:null,action:null,highlight:null,select:null}
      
              }
            })
          
          }else{
            localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{moveUnit(x,y,x,y,f.unité._nombre - result -dice.nbflag,x2,y2);UpdateMedal(f,f.unité._nombre - result -dice.nbflag)},highlight:new Retreat(0,-1*dice.nbflag),select:null}
            flaglist.forEach(item=>{
              if(!localgrille.grille[item.x][item.y].unité){
                let g = localgrille.grille[item.x][item.y];
                localgrille.grille[item.x][item.y] = {case:g.case,defense:g.defense,unité:g.unité,action:()=>{moveUnit(x,y,item.x,item.y,f.unité._nombre - result+(item.flag-dice.nbflag),x2,y2);UpdateMedal(f,f.unité._nombre - result+(item.flag-dice.nbflag))},highlight:new Retreat(item.flag,item.flag-dice.nbflag),select:null}
              }  
            })
          }
        }
        
      }
      if(x2 >= 0){
        let f2 = localgrille.grille[x2][y2];
        if(card._image === "artillery-bombard-fr" && refire ){
          localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:f2.unité,action:()=>{calculDés(x2,y2,null,null,f2.unité,false)},highlight:null,select:new Attacking()}
        }else if(card._image === "behind-enemy-lines-fr"){
          localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:AddDice(f2.unité,f2.unité._nombre,[4,3,2],[2,2,2]),action:()=>{ShowPortéeUnit(x2,y2,AddDice(f2.unité,f2.unité._nombre,[4,3,2],[2,2,2]))},highlight:null,select:new SelectHexa()}
        
        }else{
          localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:f2.unité,action:null,highlight:null,select:null}
        }  
      }
      
      
      setGrille(localgrille)
    }, 2200);
    
  }


  function calculDés(x,y,unité,refire){
    RemoveHighlight()
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    let portée = unité._portée
    let wire = localgrille.grille[x][y].defense instanceof Wire  
    if(wire && unité instanceof UnitGenieAllies){
      portée = unité.portée.map(item=>item-1)
    }
    let list = showPortee(grille,Object.keys(unité._portée).length,x,y,portée,null)
    
    list.forEach(item=>{
      if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp === camp2 ){
        if( VerificationLineOfSight(x,y,item.x,item.y,grille)){
        let malus = 0;
        
        if(!(unité instanceof UnitGenieAllies) && localgrille.grille[item.x][item.y].case && localgrille.grille[item.x][item.y].case._malus){
          if(unité._type === "Soldat"){malus = localgrille.grille[item.x][item.y].case._malus.Soldat}
          else if(unité._type === "Tank"){malus = localgrille.grille[item.x][item.y].case._malus.Tank}
        }
        if(!(unité instanceof UnitGenieAllies) && localgrille.grille[item.x][item.y].defense && localgrille.grille[item.x][item.y].defense._malus){
          if(unité._type === "Soldat"){malus = localgrille.grille[item.x][item.y].case._malus.Soldat+malus}
          else if(unité._type === "Tank"){malus = localgrille.grille[item.x][item.y].case._malus.Tank+malus}
        }
        if(item.dés + malus > 0){
          let f = localgrille2.grille[item.x][item.y];
          let cond = false;
          if(card._image === "armor-assault-fr"){
            let ptproche = pointproche(x,y)
            ptproche.forEach(pt=>{
              if(item.x === pt.x && item.y === pt.y){cond = true}
            })
          } 
          let dice = cond ? item.dés+malus+1 : item.dés+malus
          localgrille2.grille[item.x][item.y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{updateAttackUnit(item.x,item.y,x,y,f.unité,dice,false,refire)},highlight:new Target(dice),select:null}
          

        }

      }
    }})
    localgrille.grille.forEach((e,pos)=>{
      e.forEach((f,pos2)=>{
        if(f.select && (f.select instanceof Selected )){
          localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{calculDés(pos,pos2,f.unité,card._image === "artillery-bombard-fr" ? true:false)},highlight:f.highlight,select:new Attacking()}
        }})})
    let g = localgrille.grille[x][y]; 
    localgrille.grille[x][y] = {case:g.case,defense:wire && unité instanceof UnitGenieAllies ? null : g.defense,unité:g.unité,action:g.action,highlight:null,select:new Selected()};
    setGrille(localgrille2)
  }
  //fonction pour montrer les unités pouvant attacker une untié adverse
  function selectedAttackUnit(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    RemoveHighlight()
    localgrille.grille.forEach((e,pos)=>{
      e.forEach((f,pos2)=>{
        if(f.select && (f.select instanceof SelectHexa || f.select instanceof Attacking)){
          let list = showPortee(grille,Object.keys(f.unité._portée).length,pos,pos2,f.unité._portée,null)
          let cond = false;
          list.forEach(item=>{
            if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp === camp2 ){
              if(f.unité._type === "Artillerie" ? localgrille.grille[item.x][item.y].unité  : VerificationLineOfSight(pos,pos2,item.x,item.y,grille)){
                cond = true;
              }
            }
            
          })
          localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{calculDés(pos,pos2,f.unité,card._image === "artillery-bombard-fr" ? true:false)},highlight:f.highlight,select:cond ? new Attacking():null}
       
        
        }    
      })})
      setGrille(localgrille2)
  }


  function persée(x,y,x2,y2,Refire){
    let localgrille = {...grille};
    let f = localgrille.grille[x][y];
    let f2 = localgrille.grille[x2][y2];
    let list = showPortee(grille,Object.keys(f.unité._portée).length,x2,y2,f.unité._portée,null)
    let cond = false;
    if(Refire){
      list.forEach(item=>{
        if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp === camp2 ){
          if(VerificationLineOfSight(x2,y2,item.x,item.y,grille)){
            cond = true;
          }
        }
      })  
    }
    if(Refire && cond){
      localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:f.unité,action:()=>{calculDés(x2,y2,f.unité,false)},highlight:null,select:new Attacking()}
    }else{
      localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:f.unité,action:null,highlight:null,select:null}
    }
    localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:null,action:null,highlight:null,select:null}
    setGrille(localgrille);
    setModal(<></>)
  }
  //Move functions 
  function moveUnit(x,y,x2,y2,nbunit,originx,originy){
    
    RemoveHighlight();
    let localgrille = {...grille};
    let f = localgrille.grille[x][y];
    let f2 = localgrille.grille[x2][y2];
    if(x !== x2 || y !== y2){

      localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:null,action:null,highlight:null,select:null}
      localgrille.grille[x2][y2] = {case:f2.case,defense:f2.defense,unité:HitUnit(f.unité,nbunit),action:null,highlight:null,select:null}
        
      if(localgrille.grille[originx][originy].unité && isCombatRapproche(x,y,originx,originy) ){
        if(localgrille.grille[originx][originy].unité._type === "Soldat"){
          setModal(
            <div className='relative w-screen h-screen flex center z-[350] '>
            <div className='absolute w-[400px] h-[100px] rounded-3xl flex flex-col bg-gray z-[350]'>
              <div className='text-center w-full h-1/2 p-4'>Voulez vous faire une prise de terrain ? </div>
              <div className='w-full h-1/2 flex justify-around'>
                <div className='w-[80px] h-10 p-2 bg-red text-white rounded-2xl text-center hover:cursor-pointer' onClick={()=>{setModal(<></>)}}>Annuler</div>  
                <div className='w-[80px] h-10 p-2 bg-green text-white rounded-2xl text-center hover:cursor-pointer' onClick={()=>{persée(originx,originy,x,y,false)}}>Valider</div>  
              
              </div>
            </div>
          </div>
          )
        }else if(localgrille.grille[originx][originy].unité._type === "Tank"){
          setModal(
            <div className='relative w-screen h-screen flex center z-[350] '>
            <div className='absolute w-[400px] h-[100px] rounded-3xl flex flex-col bg-gray z-[350]'>
              <div className='text-center w-full h-1/2 p-4'>Voulez vous faire une persée de blindés ? </div>
              <div className='w-full h-1/2 flex justify-around'>
                <div className='w-[80px] h-10 p-2 bg-red text-white rounded-2xl text-center hover:cursor-pointer' onClick={()=>{setModal(<></>)}}>Annuler</div>  
                <div className='w-[80px] h-10 p-2 bg-green text-white rounded-2xl text-center hover:cursor-pointer' onClick={()=>{persée(originx,originy,x,y,true)}}>Valider</div>  
              
              </div>
            </div>
          </div>
          )
        }
      }
    }
    
    setGrille(localgrille)
  }
  function HitMine(nbDés,unit,x,y){
    let localgrille = {...grille}
    let localgrille2 = {...grille}
    let dice = Dice(nbDés,unit,setAnimation,false,true)
    let result = dice.LoseLife;
    setAnimationShow(true)
    setTimeout(() => {
      setAnimationShow(false)
    }, 2100);
    //soldat 
    setTimeout(() => {
      setAnimation([])
    }, 6000);
    setTimeout(()=>{
      if(unit._nombre - result <= 0){
        if(camp === "Allies"){
          let medal = medalAlliésList.map(object => ({ ...object}))
          medal.push(HitUnit(unit,1));
          setMedalAlliésList(medal);
        }else{
          let medal = medalAxisList.map(object => ({ ...object}))
          modal.push(HitUnit(unit,1));
          setMedalAxisList(medal+1);
        } 
      }
      let f = localgrille.grille[x][y] 
      localgrille2.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:unit._nombre - result <= 0 ? null : HitUnit(unit,unit._nombre-result),action:null,highlight:null,select:null}
      setGrille(localgrille2)
    },2100)
    
  }
  
  //function pour deplacer une unité 
  function MoveAction(oldposx,oldposy,posx,posy,action){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    RemoveHighlight()
    

    let f = localgrille.grille[oldposx][oldposy]
    
    let list = showPortee(grille,Object.keys(f.unité._portée).length,posx,posy,f.unité._portée,null)

    localgrille2.grille[oldposx][oldposy] = {case:f.case,bunker:f.bunker,defense:null,unité:null,action:null,highlight:null,select:null}
    // UnitCanAttack.push({x:posx,y:posy})
   
    let cond = false;
    list.forEach(item=>{
      if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp === camp2){
        if(VerificationLineOfSight(posx,posy,item.x,item.y,grille)){    
          cond = true;
        }
      }
    })

    //gestion des mines
    let newPos = localgrille2.grille[posx][posy]
    let removeMine = newPos.bunker instanceof Mine && f.unité instanceof UnitGenieAllies

    if(newPos.bunker instanceof Mine && !removeMine){
      if(f.unité._camp !== grille.campMine){
        let nb = 0;
        if(!newPos.bunker.getNb()){
          let newMine = newPos.bunker.reveal()  
          newPos.bunker = newMine.bunker;
          nb = 3 //newMine.nb;
        }else{  
          nb = newPos.bunker.getNb()
        }
        
        HitMine(nb,f.unité,posx,posy)
      }
    }
    localgrille2.grille[posx][posy] = {case:newPos.case,bunker:removeMine ? null:newPos.bunker,defense:null,unité:f.unité,action:null,highlight: null,select: removeMine ? null : action === 1 ? (cond ? new Attacking():null ):null}
    setGrille(localgrille2)
  }
  function isRoad(item){
    return grille.grille[item.x][item.y].case instanceof RoadRight || 
    grille.grille[item.x][item.y].case instanceof RoadCurve || 
    grille.grille[item.x][item.y].case instanceof RoadHillRight || 
    grille.grille[item.x][item.y].case instanceof RoadHillCurve || 
    grille.grille[item.x][item.y].case instanceof RoadBranchRight || 
    grille.grille[item.x][item.y].case instanceof RoadBranchLeft || 
    grille.grille[item.x][item.y].case instanceof RoadX || 
    grille.grille[item.x][item.y].case instanceof RoadY
  }
  function AllPathIsRoad(list,updateList,deplacement){
    list.map((item,pos)=>{
      let cond = true;
      if(item.path){
      item.path.map(item=>{
        if(!isRoad(item)){
          cond = false
        }
      })
    }
    if(cond && item.path.length-1 >= deplacement){
      
      
      let pts = pointproche(item.item.x,item.item.y);
      pts.forEach(pt=>{
        let lpath = [...item.path]
        let cond2 = true;
        list.forEach(item2 => {
          if(item2.item.x === pt.x && item2.item.y === pt.y){
            cond2 = false
          }
        })

        if(cond2){ 
          if(pt.x !== item.x && pt.y !== item.y ){
              if(isRoad(pt)){
                lpath.push(pt)
                
                updateList.push({item:{x:pt.x,y:pt.y,dés:null,deplacement:item.item.deplacement === 2 ? 2 : 1},path:lpath})
              }
          } 
        }

      })
      if(item.item.deplacement === 2){
        updateList[pos].item.deplacement = 1;
      }
    }    
  })

}
  //function pour montrée la portée de deplacmeent
  function ShowPortéeUnit(posx,posy,unité){
    RemoveHighlight();
    
    let list = showPortee(grille,Object.keys(unité._deplacement).length,posx,posy,null,unité._deplacement,true,isRoad)
    let updatedList = [...list]
    AllPathIsRoad(list,updatedList,Object.keys(unité._deplacement).length)
  
    let localgrille = {...grille};
    let localgrille2 = {...grille};

   
    localgrille.grille.forEach((e,pos)=>{
      e.forEach((f,pos2)=>{
        updatedList.forEach(item=>{
          if(item.item.x === pos && item.item.y === pos2 && !debug ? !f.unité :item.item.x === pos && item.item.y === pos2 && !f.unité){  
            localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{AnimationFigurine(item.path,800,()=>MoveAction(posx,posy,pos,pos2,item.item.deplacement),()=>{RemoveHighlight();setTimeout(()=>RemoveHighlightAtPos(posx,posy),10)})},highlight: new Move(item.item.deplacement),select:f.select}
            
          }
          
        })
      })})

    setGrille(localgrille2)
  }

  function updateSelectedUnit(x,y,isSelected,selectOther){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    let f = localgrille.grille[x][y];
    let nb = 0;
    let cond = true;
    let zone1 = {min:0,max:3,min2:0,max2:3}
    let zone2 = {min:3,max:8,min2:3,max2:8}
    let zone3 =  {min:8,max:12,min2:8,max2:12}
    if(isSelected){

      localgrille.grille.forEach((e,pos)=>{
        e.forEach((f,pos2)=>{
          if(card._image === "general-advance-fr" || card._image === "pincer-move-fr"){
            if(y >= zone1.min && y <= zone1.max && pos2 >= zone1.min && pos2 <= zone1.max){
              if(f.select && f.select instanceof SelectHexa){
                nb += 1;
              }

            }
          else if(card._image !== "pincer-move-fr" && y > zone2.min && y < zone2.max && pos2 > zone2.min && pos2 < zone2.max){

            if(f.select && f.select instanceof SelectHexa){
              nb += 1;
            }

          }else if(y >= zone3.min && y <= zone3.max && pos2 >= zone3.min && pos2 <= zone3.max){
          if(f.select && f.select instanceof SelectHexa){
            nb += 1;
          }

          }
        }else if(f.select && f.select instanceof SelectHexa){
            nb += 1;
          }
        });
      });
      if(selectOther ? nb < 1 : nb < card._nbunit && cond){
        
        localgrille2.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{updateSelectedUnit(x,y,false)},highlight:f.highlight,select:new SelectHexa()}   
      } 
    }else{
      localgrille2.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{updateSelectedUnit(x,y,true)},highlight:f.highlight,select:null}      
    }
    
    setGrille(localgrille2);
  }

  //function pour selectionner les unités 
  function selectedUnit(selectOther){
    let filtrecol = {min:0,max:12}
    switch(card._zone){
      case 1:
        filtrecol = {min:0,max:3,min2:0,max2:3}
        break;
      case 2:
        filtrecol = {min:3,max:8,min2:3,max2:8}
        break;
      case 3:
        filtrecol = {min:8,max:12,min2:8,max2:12}
        break;
      case 4:
        filtrecol = {min:0,max:3,min2:8,max2:12}
        break;
      default:
        break; 
    }
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    let cond = true
    localgrille.grille.forEach((e,pos)=>{
      e.forEach((f,pos2)=>{
            
        if((pos2 >= filtrecol.min2 && pos2 <=filtrecol.max2 )||(pos2 >= filtrecol.min && pos2 <=filtrecol.max)){
          if(card._nbunit === "ALL"){

             
            if(f.unité && (card._type === "ALL" || f.unité._type === card._type) && f.unité._camp === camp){
              localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:null,highlight:f.highlight,select:new SelectHexa()}
              cond = false;
            }
          }else{
            if(f.unité && (card._type === "ALL" || f.unité._type === card._type) && f.unité._camp === camp){
              localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{updateSelectedUnit(pos,pos2,true,false)},highlight:f.highlight,select:null}
              cond = false
            }

          }
        }
      })})
    if(cond && selectOther){
      localgrille.grille.forEach((e,pos)=>{
        e.forEach((f,pos2)=>{
              
          if((pos2 >= filtrecol.min2 && pos2 <=filtrecol.max2 )||(pos2 >= filtrecol.min && pos2 <=filtrecol.max)){ 
            if(f.unité && f.unité._camp === camp){
              localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{updateSelectedUnit(pos,pos2,true,selectOther)},highlight:f.highlight,select:null}
              cond = false
            }
          }
        })})
    }
    setGrille(localgrille2);
  }
  function showPortéeALL(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    
    localgrille.grille.forEach((e,pos)=>{
      e.forEach((f,pos2)=>{
        if(f.select && f.select instanceof SelectHexa){
          localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{ShowPortéeUnit(pos,pos2,f.unité)},highlight:f.highlight,select:f.select}
        }
      })
    })
    setGrille(localgrille2);
  }
  function InfantryAssault(x,y){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    localgrille.grille.forEach((e,pos)=>{
      e.forEach((f,pos2)=>{
        if((y>= zone1.min && y<= zone1.max && pos2>=zone1.min && pos2 <= zone1.max)||(y>= zone2.min && y<= zone2.max && pos2>=zone2.min && pos2 <= zone2.max)||(y>= zone3.min && y<= zone3.max && pos2>=zone3.min && pos2 <= zone3.max)){
          if(f.unité && f.unité._camp === camp && f.unité._type === "Soldat"){
            localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:f.action,highlight:f.highlight,select:new SelectHexa()}
          }
        }else{
          localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:f.action,highlight:f.highlight,select:null}
          
        }

      })
    })
    
    setGrille(localgrille2);
  }
  function Heal(x,y,unité){
    let dicenb = camp === "Allies" ? selectedScenerio.cardAllies : selectedScenerio.cardAxis;
    let dice = Dice(dicenb,unité,setAnimation,true,false)
    let result = dice.LoseLife
    setAnimationShow(true)
    setTimeout(() => {
      setAnimationShow(false)
    }, 2100);

    setTimeout(() => {
      setAnimation([])
    }, 6000);
    setTimeout(() => {
      let localgrille = {...grille};
      let f = localgrille.grille[x][y];
      if(result > 0){
        if(unité._type === "Soldat"){
          if(unité._nombre + result <=4){
            localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:HitUnit(unité,unité._nombre + result),action:null,highlight:null,select:new SelectHexa()}
          }else{
            localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:HitUnit(unité,4),action:null,highlight:null,select:new SelectHexa()}
          }
        }else if(unité._type === "Tank"){
          if(unité._nombre + result <=3){
            localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:HitUnit(unité,unité._nombre + result),action:null,highlight:null,select:new SelectHexa()}
          }else{
            localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:HitUnit(unité,4),action:null,highlight:null,select:new SelectHexa()}
          }
        }else if(unité._type === "Artillerie"){
          if(unité._nombre + result <=2){
            localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:HitUnit(unité,unité._nombre + result),action:null,highlight:null,select:new SelectHexa()}
          }else{
            localgrille.grille[x][y] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:HitUnit(unité,4),action:null,highlight:null,select:new SelectHexa()}
          }
        }
      }
      setGrille(localgrille);
    }, 2200);

  }
  function selectCard(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    switch(card._image){
      case "air-power-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
                if(f.unité && f.unité._camp === camp2){
                  localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{AirPower(grille,setGrille,pos,pos2,()=>updateAttackUnit(pos,pos2,null,null,f.unité,f.unité._camp === "Allies" ? 1 : 2,true))},highlight:null,select:null}
              }
          })})
        setGrille(localgrille2);
        break;
      case "artillery-bombard-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
                if(f.unité && f.unité._camp === camp && f.unité._type === "Artillerie"){
                  localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:AddDice(f.unité,f.unité._nombre,null,[2,2,2]),action:null,highlight:null,select:null}
                }
          })})
        
        setGrille(localgrille2);
        selectedUnit(true);
        break;
      case "barrage-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
                if(f.unité && f.unité._camp === camp2){
                  localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{Barrage(grille,setGrille,pos,pos2,()=>{updateAttackUnit(pos,pos2,null,null,f.unité,4);setStatus(5)})},highlight:null,select:null}
              }
          })})
        setGrille(localgrille2);
      
        break;
      case "behind-enemy-lines-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
                if(f.unité && f.unité._camp === camp && f.unité._type === "Soldat"){
                  localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:AddDice(f.unité,f.unité._nombre,[4,3,2],[1,1,1]),action:null,highlight:null,select:null}
                }
          })})
        setGrille(localgrille2);
        selectedUnit(true);
        break;
      case "close-assault-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
                if(f.unité && f.unité._camp === camp){
                  let ptproches = pointproche(pos,pos2);
                  let cond = false
                  ptproches.forEach(pt=>{
                    if(localgrille.grille[pt.x][pt.y].unité && localgrille.grille[pt.x][pt.y].unité._camp === camp2){
                      cond = true
                    }
                  })
                  if(cond){
                    if(f.unité._type === "Soldat"){
                      localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:AddDice(f.unité,f.unité._nombre,[4,3,2],[]),action:null,highlight:null,select:new Attacking()}
                    }else if(f.unité._type === "Tank"){
                      localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:AddDice(f.unité,f.unité._nombre,[4,4,4],[]),action:null,highlight:null,select:new Attacking()}
                    
                    }

                  }
                }
          })})
        setGrille(localgrille2);
        setTimeout(() => {
          selectedAttackUnit();
          setStatus(5);
        }, 1500);
        break;
      case "firefight-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
            if(f.unité && f.unité._camp === camp){
              let cond = true;
              let pts = pointproche(pos,pos2);
              pts.forEach(item=>{
                if(localgrille.grille[item.x][item.y].unité && localgrille.grille[item.x][item.y].unité._camp === camp2){
                  cond = false
                }
              })   
              if(cond){
                localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:AddDice(f.unité,f.unité._nombre,f.unité._portée.map(item=>{return item+1}),[1,1,1]),action:()=>{updateSelectedUnit(pos,pos2,true,false)},highlight:null,select:null}
              }
            }
          })})
        setGrille(localgrille2);
        break;
      case "infantry-assault-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
                if(f.unité && f.unité._camp === camp && f.unité._type === "Soldat"){
                  localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{InfantryAssault(pos,pos2)},highlight:null,select:null}
                }
          })})
        setGrille(localgrille2);
        break;
      case "medics-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
                if(f.unité && f.unité._camp === camp){
                  localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:()=>{Heal(pos,pos2,f.unité)},highlight:null,select:null}
                }
          })})
        setGrille(localgrille2);
      break;
      case "their-finest-hour-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
                if(f.unité && f.unité._camp === camp){
                  let ptproches = pointproche(pos,pos2);
                  let cond = false
                  ptproches.forEach(pt=>{
                    if(localgrille.grille[pt.x][pt.y].unité && localgrille.grille[pt.x][pt.y].unité._camp === camp2){
                      cond = true
                    }
                  })
                  if(cond){
                    if(f.unité._type === "Soldat"){
                      localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:AddDice(f.unité,f.unité._nombre,[4,3,2],[1,2]),action:null,highlight:null,select:new Attacking()}
                    }else if(f.unité._type === "Tank"){
                      localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:AddDice(f.unité,f.unité._nombre,[4,4,4],[1,1,1]),action:null,highlight:null,select:new Attacking()}
                    }else if(f.unité._type === "Artillerie"){
                      localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:AddDice(f.unité,f.unité._nombre,[4,4,3,3,2,2],[2]),action:null,highlight:null,select:new Attacking()}
                    
                    }

                  }
                }
          })})
        setGrille(localgrille2);
        break;
      default:
        selectedUnit();
        break;
    }
  }
  function ValiderCard(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    switch(card._image){
      case "dig-in-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
            if(f.select && f.select instanceof SelectHexa){
              localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:new SandBag(camp !== "Allies"),unité:f.unité,action:null,highlight:null,select:null}
            }
          })})
        setGrille(localgrille2);
        switchCamp();
        setStatus(1);
        break;
      
    case "firefight-fr":
      selectedAttackUnit();
      setStatus(5);
      break;
    default:
        showPortéeALL()
    }
  }
  function resetActionCard(){
    RemoveHighlight();
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    switch(card._image){
      case "armor-assault-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
                if(f.unité && f.unité._camp === camp && f.unité._type === "Tank"){
                  localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:AddDice(f.unité,f.unité._nombre,[3,3,3]),action:null,highlight:null,select:null}
                }
          })})
        setGrille(localgrille2);
        switchCamp()
        break;
      case "behind-enemy-lines-fr":
        localgrille.grille.forEach((e,pos)=>{
          e.forEach((f,pos2)=>{
                if(f.unité && f.unité._camp === camp && f.unité._type === "Soldat"){
                  localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:AddDice(f.unité,f.unité._nombre,[3,2,1],[1,2]),action:null,highlight:null,select:null}
                }
          })})
        setGrille(localgrille2);
        switchCamp()
        break;
        case "close-assault-fr":
            function arraysEqual(arr1, arr2) {
              if (arr1.length !== arr2.length) {
                  return false;
              }
              for (let i = 0; i < arr1.length; i++) {
                  if (arr1[i] !== arr2[i]) {
                      return false;
                  }
              }
              return true;
          }
          localgrille.grille.forEach((e,pos)=>{
            e.forEach((f,pos2)=>{
                  if(f.unité && f.unité._camp === camp && (arraysEqual(f.unité._portée, [4,3,2])   || arraysEqual(f.unité.portée ,[4,4,4]))){
                    localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:HitUnit(f.unité,f.unité._nombre),action:null,highlight:null,select:null}
                  }
            })})
          setGrille(localgrille2);        
          switchCamp()
          break;
      default:
        switchCamp()
    }
  }

  function Embuscade(){
    let localgrille = {...grille};
    let localgrille2 = {...grille};
    localgrille.grille.forEach((e,pos)=>{
      e.forEach((f,pos2)=>{
        if(f.select && f.select instanceof Selected ){
          let ptproches = pointproche(pos,pos2);
          let cond = false
          let malus = 0;
          let localx = 0;
          let localy = 0;
          ptproches.forEach(pt=>{
            if(localgrille.grille[pt.x][pt.y].unité && localgrille.grille[pt.x][pt.y].unité._camp === camp2){
              
              if(localgrille.grille[pos][pos2].case && localgrille.grille[pos][pos2].case._malus){
                if(localgrille.grille[pt.x][pt.y].unité._type === "Soldat"){malus = localgrille.grille[pos][pos2].case._malus.Soldat}
                else if(localgrille.grille[pt.x][pt.y].unité._type === "Tank"){malus = localgrille.grille[pos][pos2].case._malus.Tank}
              }
              if(localgrille.grille[pos][pos2].defense && localgrille.grille[pos][pos2].defense._malus){
                if(localgrille.grille[pt.x][pt.y].unité._type === "Soldat"){malus = localgrille.grille[pos][pos2].case._malus.Soldat+malus}
                else if(localgrille.grille[pt.x][pt.y].unité._type === "Tank"){malus = localgrille.grille[pos][pos2].case._malus.Tank+malus}
              }
              cond = true;
              localx = pt.x;
              localy = pt.y;
            }
          })
          if(cond){
            let g = localgrille2.grille[localx][localy]
            
            let f = localgrille2.grille[pos][pos2]
            localgrille2.grille[localx][localy] = {case:g.case,defense:g.defense,unité:g.unité,action:()=>{updateAttackUnit(pos,pos2,localx,localy,f.unité,3,false,false,true)},highlight:null,select:new Attacking()}
              // console.log(pos,pos2,x,y)
              // let g = localgrille.grille[x][x]
              // let h = localgrille.grille[pos][pos2]
              // console.log(h.unité._portée[0])
              
              // localgrille2.grille[pos][pos2] = {case:f.case,bunker:f.bunker,defense:f.defense,unité:f.unité,action:null,highlight:null,select:null}
          }
        } 
        
      })})
    setGrille(localgrille2);
  }
  const showingCard = useMemo(() => {
    return <div className='h-[430px] ml-8 flex flex-row font-mt-bold text-[14px]'>
      <div className='flex flex-col w-[276px] '>
        {<CardSelect onChange={setCard}/> }
        {<CampAffichage camp={camp}/>}
        {StateButton("Selection",status === 1 ? "Commencer":"Valider",status === 2 ? true:false,status === 1 ? ()=>{setStatus(2);selectCard();}:()=>{setStatus(3);ValiderCard();},status < 3 ? true:false)}
        {StateButton("Deplacement",status === 3 ? "Continuer":"Valider",status === 3 ? true:false,status === 4 ? ()=>{setStatus(4)}:()=>{setStatus(5);selectedAttackUnit();},status === 3 ? true:false)}
        {StateButton("Combat",status === 5 ? "Continuer":"Valider",status === 5 ? true:false,status === 4 ? ()=>{setStatus(6)}:()=>{setStatus(1);resetActionCard();},status === 5 ? true:false)}
        <div className='mt-[20px] w-[276px] h-[50px] relative p-2 flex bg-light_gray rounded-lg text-[20px] text-white flex center border-2 border-black hover:bg-lightgrey ' onClick={()=>Embuscade()}>
          <div>Embuscade</div>
        </div>
      </div>
      <div className="w-fit h-fit m-[20px]">
        {enabledebug && <div className='flex center'><FormControlLabel
          control={
            <Switch checked={debug} onChange={()=>{setDebug(!debug)}} name={'debug'} className={'text-white '}/>
          }
          label="Debug"
          className='text-white text-[20px]'
        /></div>}
            
         <img src={`images/Memoire44/cards/commandement/${card._image}-large.webp`} alt={card._titre} className="w-[278px] h-[432px] ml-[20px] "/>
      </div>
    
    </div>

  }
    
    , [card,status,debug,camp,grille])



  
  const DiceAnimation = useMemo(()=>{
    return <div className='flex flex-col gap-4 w-[276px] h-[418px] p-2 bg-light_gray ml-8 rounded-xl'>
      {animationShow ? <>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px]  ${`s${animation[0]}`}`}></div>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[1]}`}`}></div>
        
      </div>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[2]}`}`}></div>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[3]}`}`}></div>
        
      </div>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[4]}`}`}></div>
        <div className={`w-[128px] h-[128px]  ${`Dice${animation[5]}`}`}></div>
        
      </div>
      </>:<>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px] `}>{animation[0] && <img src={`images/Memoire44/dice/die_${animation[0].toLowerCase()}.webp`} alt={"dice"} className='w-[128px] h-[128px]'/>}</div>
        <div className={`w-[128px] h-[128px] `}>{animation[1] && <img src={`images/Memoire44/dice/die_${animation[1].toLowerCase()}.webp`} alt={"dice"} className='w-[128px] h-[128px]'/>}</div>
        
      </div>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px] `}>{animation[2] && <img src={`images/Memoire44/dice/die_${animation[2].toLowerCase()}.webp`} alt={"dice"} className='w-[128px] h-[128px]'/>}</div>
        <div className={`w-[128px] h-[128px] `}>{animation[3] && <img src={`images/Memoire44/dice/die_${animation[3].toLowerCase()}.webp`} alt={"dice"} className='w-[128px] h-[128px]'/>}</div>
        
      </div>
      <div className='w-full flex flex-row'>
        <div className={`w-[128px] h-[128px] `}>{animation[4] && <img src={`images/Memoire44/dice/die_${animation[4].toLowerCase()}.webp`} alt={"dice"} className='w-[128px] h-[128px]'/>}</div>
        <div className={`w-[128px] h-[128px] `}>{animation[5] && <img src={`images/Memoire44/dice/die_${animation[5].toLowerCase()}.webp`} alt={"dice"} className='w-[128px] h-[128px]'/>}</div>
        
      </div>
      
      </>}
     
    </div>
  },[animation,animationShow])
  


  const global = useMemo(()=>{
      return (
      <div className="relative w-fit h-fit">
        <div className='absolute -top-2 mr-[50px] right-0 z-[10] w-[550px] h-[54px] flex flex-row'>
          {medalAxisList.length > 0 && medalAxisList.map((medal,pos)=>{
            return <div className='w-1/6 h-full flex center' key={`axis-${pos}`}>{medal.render("w-[38%]")}</div>
          })}
        </div>
        <div className='absolute mb-[38px]  ml-[50px] bottom-0 left-0 z-[10] w-[550px] h-[54px] flex flex-row'>
        {medalAlliésList.length > 0 && medalAlliésList.map((medal,pos)=>{
            return <div className='w-1/6 h-full flex center' key={`allies-${pos}`}>{medal.render("w-[38%]")}</div>
          })}
        </div>
        {debug ? <div className='absolute z-[4100] top-0 left-8 text-vivid_tangerine text-[20px] font-av-bold'><span className='text-white text-[20px] font-av-bold'>posx</span> posy</div>:""}
        <div key={"terrain"}><img src={`images/Memoire44/${grille.terrain}.webp`} alt={"terrain"} className='w-full h-full'/></div>
        <div className="absolute flex flex-col z-[200] top-[58px] left-[10px]">
          {grille.grille.map((e,pos)=>{
            return <div className={`${pos % 2 === 1 ? "ml-[45px]":""} w-full flex flex-row`} key={`ligne-${pos}`}>{
              e.map((f,pos2)=>{
                      return <div className={`relative w-[91px] h-[78px] border-0 border-white ${f.action ? "hover:cursor-pointer":""}`} onClick={f.action}  key={`${pos}${pos2}`} id={`${pos}${pos2}`} >
                        {debug ? <div className='absolute z-[1000] bottom-0 left-8 text-vivid_tangerine text-[28px] font-av-bold'><span className='text-white'>{pos}</span> {pos2}</div> :""}
                        <div className='absolute z-10 w-full h-full'>{f.case ? f.case.render(): ""}</div>
                        <div className='absolute z-20 w-full h-full'>{f.defense ? f.defense.render(): ""}</div>
                        <div className='absolute z-30 w-full h-full'>{f.bunker ? f.bunker.render(): ""}</div>
                        <div className={`pion-${pos}-${pos2} absolute z-40 w-full h-full`}>{f.unité ? f.unité.render(): ""}</div>
                        <div className='absolute z-[50] w-full h-full'>{f.medal ? f.medal.render(): ""}</div>
                        <div className={`absolute z-[60] w-full h-full ${f.highlight && (f.highlight instanceof Target || f.highlight instanceof Move ) ? "opacity-50":""}`}>{f.highlight ? f.highlight.render(): ""}</div>
                        <div className='absolute z-[70] w-full h-full '>{f.select ? f.select.render(): ""}</div>
                        </div>
                  
              })
          }</div>
        })}
        </div>
      </div>)
     },[medalAxisList, medalAlliésList, debug, grille])
     
     const Modal = useMemo(() => <div className='absolute top-0 '>{modal}</div>, [modal])
     return (
      <div className="w-full h-full relative " >
        <div className="absolute bottom-20 right-5">
          <Link to="/tuto" className="w-fit h-fit mt-[10px] py-1 px-5 rounded-xl text-white bg-blue text-2xl text-center">Comment jouer ? </Link>
        </div>
        <div className='absolute top-0 flex flex-row'>
          {global} 
          <div className='flex flex-col'>
            {showingCard}
            {DiceAnimation}
          </div>
        </div>
        {Modal}
          
      </div>)
  }

  export default Play;