import { useState,useMemo } from "react";
import { Scenariovide } from "./scenariovide";
import { Scenariotest } from './Testing/scenariotest';

import {Assaultsurvassieuxenvercours,Batailledesaintnizier,Marquisdemalleval,SacrificeaValchevrière,Défensedespas} from "./batailleduvercors/index"
import {PegasusBridge,PointeDuHoc,SainteMereEglise,SwordBearch,OmahaBeach,MontMouchet } from "./batailledebarquement/index"
import {alpha_yellow,carrière_cleurie,citerna_di_littoria, contre_attaque_holtzwihr,ligne_san_fratello,mignato_monte_lungo,prise_biesheim,volturno} from './campagnedaudiemurphy/index'


import { Link, useParams } from 'react-router-dom';
import { LigneDeMire } from "./Testing/LigneDeMire";
import { LigneDeMire2 } from "./Testing/LigneDeMire2";
import { Deplacement } from "./Testing/Deplacement";
import { LigneDeMire3 } from "./Testing/LigneDeMire3";
import '../../../index.css'
import { Game, GridCell } from "../divers/game";


export function loadScenario(scenario){
    let x = 13;
    let y = 9;
    let grille = new Array(y).fill(0).map(() => new Array(x).fill({case:null,defense:null,unité:null,action:null,highlight:null}));   
    if(scenario){
        //case: null,bunker: null,defense: null, unité:null,medal:null
        scenario.hexa.forEach(hex=>{
        grille[hex.x][hex.y] = new GridCell(hex.contenu.case,hex.contenu.bunker,hex.contenu.defense,hex.contenu.unité,hex.contenu.medal)  //hex.contenu
    })
    }
    return () => new Game(x,y,grille,scenario.terrain,scenario.campMine)

    // return {terrain:scenario.terrain,grille:grille,campMine:scenario.campMine}
}
const listScenario = [
    {name:"Merci de choisir un scénario ",url:"Scenariovide",image:"Scenariovide"},
    {name:"Bataille du Vercors",url:"Scenariovide",image:"Scenariovide"},
    {name:"Bataille de Saint-Nizier",url:"Batailledesaintnizier",image:"/batailleduvercors/batailledesaintnizier"},
    {name:"Marquis de Malleval",url:"Marquisdemalleval",image:"batailleduvercors/marquisdemalleval"},
    {name:"Assault sur Vassieux en Vercors",url:"Assaultsurvassieuxenvercours",image:"batailleduvercors/assaultsurvassieuxenvercours"},
    {name:"Sacrifice à Valchevrière",url:"SacrificeaValchevrière",image:"batailleduvercors/sacrificeavalchevrière"},
    {name:"Défense des pas",url:"Défensedespas",image:"batailleduvercors/Défensedespas"},
    {name:"Bataille du débarquement",url:"Scenariovide",image:"Scenariovide"},
    {name:"Pegasus Bridge",url:"PegasusBridge",image:"batailledebarquement/pegasusBridge"},
    {name:"Sainte Mère Eglise",url:"SainteMereEglise",image:"batailledebarquement/sainteMereEglise"},
    {name:"Sword Beach",url:"Swordbeach",image:"batailledebarquement/swordbeach"},
    {name:"Pointe du hoc",url:"Pointeduhoc",image:"batailledebarquement/Pointeduhoc"},
    {name:"Omaha Beach",url:"OmahaBeach",image:"batailledebarquement/omahabeach"},
    {name:"Mount Mouchet",url:"MontMouchet",image:"batailledebarquement/montmouchet"},
    {name:'Campagne Audie Murphy',url:"Scenariovide",image:"Scenariovide"},
    {name:'La ligne de San Fratello',url:'San_Fratello',image:"campagneAudieMurphy/SanFratello"},
    {name:'Le volturno',url:'volturno',image:"campagneAudieMurphy/volturno"},
    {name:'Mignano Monte Lungo',url:'mignano',image:"campagneAudieMurphy/mignano"},
    {name:'Cisterna Di Littorio',url:'citerna_di_littoria',image:"campagneAudieMurphy/cisterna_di_littoria"},
    {name:'Alpha Yellow',url:'alpha_yellow',image:"campagneAudieMurphy/alpha_yellow"},
    {name:'La carrière de Cleurie',url:'carriere_cleurie',image:"campagneAudieMurphy/carriere_cleurie"},
    {name:'Contre-attaque à Holtzwihr',url:'contre_attaque_holtzwihr',image:"campagneAudieMurphy/contre_attaque_holtzwihr"},
    {name:'La prise de Beisheim',url:'prise_biesheim',image:"campagneAudieMurphy/prise_biesheim"},
    {name:" Testing ",url:"Scenariotest",image:"Scenariovide"},
    {name:"Scenario de test",url:"Scenariotest",image:"/test/Scenariotest"},
    {name:"Ligne de Mire",url:"LigneDeMire",image:"/test/LigneDeMire"},
    {name:"Ligne de Mire",url:"LigneDeMire2",image:"/test/LigneDeMire"},
    {name:"Ligne de Mire",url:"LigneDeMire3",image:"/test/LigneDeMire"},
    {name:"Deplacement",url:"Deplacement",image:"/test/Deplacement"},
    
]
const SelecteurScenario = ()=>{
    const [image,setImage] = useState("Scenariovide");
    const [url,setUrl] = useState("Scenariovide");
    const LoadImage = useMemo(()=>{
        return<div className="w-[900px] p-[50px] bg-black rounded-[4rem] shadow"><div className="w-[800px]"><img src={`images/Memoire44/scenario/${image}.webp`} alt={"imagescenario"} className="w-[800px] h-[566px]"/></div></div>
    },[image])
    const {debug} = useParams();
    return (
        <div className="h-screen w-screen flex flex-row relative " >
            <div className="w-[500px] h-full bg-dark_grey  border-black overflow-y-auto overflow-x-hidden custom-scrollbar" >{listScenario.map((e,pos)=>{
            return <div key={pos} onMouseEnter={()=>{setImage(e.image);setUrl(e.url)}}  className={`text-left p-2 w-full  h-[50px] text-2xl ${e.image === "Scenariovide" ? "text-center":"bg-black_grey px-8"}`}>{e.name}</div>})}
          
            {process.env.NODE_ENV !=="testproduction" && <> <div onMouseEnter={()=>{setImage("Scenariovide")}} className={`text-left p-2 w-full bg-dark_grey  h-[50px] text-2xl text-center`}>Createur de scenario</div>
            <div onMouseEnter={()=>{setImage("Scenariovide")}} className={`text-left p-2 w-full bg-lightgrey h-[50px] text-2xl px-8 text-center`}><Link to={"/Memoire44/create"}>Go</Link></div></>}
        
            <div onMouseEnter={()=>{setImage("Scenariovide")}} className={`text-left p-2 w-full bg-gray  h-[50px] text-2xl px-8 text-center`}><Link to={"/Memoire44/about"}>A propos</Link></div>
            </div>
            <div className="relative w-[1200px] h-full bg-gray px-4  flex flex-col center space-2">
                <div className="absolute w-full h-fit top-0 h-[60px] flex center gap-2  ">
                    <Link  to={`/Memoire44/about`} className="w-[180px] h-fit mt-[10px] py-1 px-2 rounded-xl text-white bg-blue text-2xl text-center">A propos</Link>
                    <Link  to={`/Memoire44/CardsPC`} className="w-[200px] h-fit mt-[10px] py-1 px-2 rounded-xl text-white bg-blue text-2xl text-center">Hand Manager</Link>
                    
                    <Link  to={`/Memoire44/progress`} className="w-fit h-fit mt-[10px] py-1 px-5 rounded-xl text-white bg-blue text-2xl text-center">Progression du dévellopement</Link>
                    <Link  to={`/Memoire44/tuto`} className="w-fit h-fit mt-[10px] py-1 px-5 rounded-xl text-white bg-blue text-2xl text-center">Comment jouer ? </Link>
                    
                </div>
                {LoadImage}  
                {image === "Scenariovide" ? <div className="w-[180px] h-[60px] mt-[30px]"></div> : <Link  to={`/Memoire44/scenario/${url}/${debug ?? ""}`} className="w-[180px] h-[60px] mt-[30px] p-2 rounded-3xl text-white bg-green text-2xl text-center">Play</Link>}
            
            </div>  
            
        </div>)
}
export default SelecteurScenario;
export function ReturnScenario(scenarioname){
    switch(scenarioname){
        case "Assaultsurvassieuxenvercours":
            return Assaultsurvassieuxenvercours;
        case "Batailledesaintnizier":
            return Batailledesaintnizier;
        case "Marquisdemalleval":
            return Marquisdemalleval; 
        case "SacrificeaValchevrière":
            return SacrificeaValchevrière;
        case "Défensedespas":
            return Défensedespas;
        case "PegasusBridge":
            return PegasusBridge;
        case "Scenariotest":
            return Scenariotest;
        case "SainteMereEglise":
            return SainteMereEglise;
        case "Swordbeach":
            return SwordBearch;
        case "Pointeduhoc":
            return PointeDuHoc;
        case "OmahaBeach":
            return OmahaBeach;
        case "MontMouchet":
            return MontMouchet;
        case "San_Fratello":
            return ligne_san_fratello;
        case "mignano":
            return mignato_monte_lungo;
        case 'citerna_di_littoria':
            return citerna_di_littoria;
        case 'volturno':
            return volturno;
        case 'alpha_yellow':
            return alpha_yellow;
        case 'carriere_cleurie':
            return carrière_cleurie;
        case 'contre_attaque_holtzwihr':
            return contre_attaque_holtzwihr;
        case 'prise_biesheim':
            return prise_biesheim;
        case "LigneDeMire":
            return LigneDeMire;
        case "LigneDeMire2":
            return LigneDeMire2;
        case "LigneDeMire3":
            return LigneDeMire3;
        case "Deplacement":
            return Deplacement;
        default:
            return Scenariovide;
    }
}