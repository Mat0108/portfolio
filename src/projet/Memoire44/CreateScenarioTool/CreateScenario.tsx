import { useEffect, useMemo, useState } from "react";
import MenuSelector from "../../../composant/MenuSelector.tsx";
import { DiversPlaine, HexaDefense, HexagonePlaine, HexaMedal, HexaUnité } from "./HexagonePlaine.tsx";
import { CaseGenerique, SoldatGenerique } from "../divers/Generique.js";
import { DiversHiver, HexagoneHiver } from './HexagoneHiver.tsx';
import { CountryVide, RiversCurve, RiversRight, Bunker } from './../haxagone/base';
import { HexaVide } from "../haxagone/highlight.js";
import { Scenariovide } from "../scenario/scenariovide.js";
import { loadScenario } from "../scenario/index.js";
import { ArrowTool } from "./ArrowTool.tsx";

import CaseRenderer from "../haxagone/CaseRenderer.jsx";
import Switch from "../../../composant/button/switch.tsx";
import { SaveScenario } from "../scenario/saveScenario.js";
import keyboardJS  from 'keyboardjs';

const CreateScenario = () => {
    const [erase,setErase] = useState(false)
    const [erasenb,setErasenb] = useState(0);
    const [clear,setClear] = useState(false)
    const [clearnb,setClearnb] = useState(0);
    const [modal, setModal] = useState(<></>)
    const environnements =[{
        name:"plaine",
        src:"base/h_village.webp",
        case: HexagonePlaine(),
        divers: DiversPlaine(),
        defense: HexaDefense(),
        unité: HexaUnité(),
        medal: HexaMedal()

    },{
        name:"pacifique",
        src:"pacific/h_pvillage.webp",
        case: HexagonePlaine(),
        divers: DiversPlaine(),
        defense: HexaDefense(),
        unité: HexaUnité(),
        medal: HexaMedal()
    },{
        name:"hivernal",
        src:"snow/h_wvillage.webp",
        case: HexagoneHiver(),
        divers: DiversHiver(),
        defense: HexaDefense(),
        unité: HexaUnité(),
        medal: HexaMedal()

    },{
        name:"désertique",
        src:"mediterranean/h_bled.webp",
        case: HexagonePlaine(),
        divers: DiversPlaine(),
        defense: HexaDefense(),
        unité: HexaUnité(),
        medal: HexaMedal()
    }]
    const plateaux = [{
        name:"plaine",
        src:"terrain0",
    },{
        name:"plage",
        src:"terrain1"
    },{
        name:"hivernal",
        src:"terrain3"
    },{
        name:'désertique',
        src:"terrain2"
    }]
    const [environnement,setEnvironnement] = useState(environnements[0]);
    const [plateau,setPlateau] = useState(plateaux[0]); 
    type SelectionType = {
        case: CaseGenerique | null; 
        bunker: CaseGenerique | null;
        defense: CaseGenerique | null;
        unité: SoldatGenerique | CountryVide | null;
        medal: CaseGenerique | null;
    };
    const [selection,setSelection] = useState<SelectionType>({case: null,bunker: null,defense: null, unité:null,medal:null})
    const [grille, setGrille ] = useState(loadScenario(Scenariovide));
    const [oldgrille,setOldGrille] = useState(loadScenario(Scenariovide))
    const [nbSoldat,setNbSoldat] = useState<number|null>(null);
    const nbSoldatOption = [null,4,3,2,1];
    function updatePlateau(item){
        let localgrille2 = {...grille};
        localgrille2.terrain = item.src;
        setGrille(localgrille2);
        setPlateau(item);
        let env = environnements.filter(value=>value.name === item.name);
        if(env.length){
            setEnvironnement(env[0]);
        }
    }
    function cloneSelection(self,current) {
        return {
            case: clear ? self.case ? self.case.clone() : erase ? current.case : null : null,
            bunker: clear ? self.bunker ? self.bunker.clone() : erase ? current.bunker : null : null ,
            defense: clear ? self.defense ? self.defense.clone() : erase ? current.defense : null : null ,
            unité: clear ? self.unité ? self.unité.clone() : erase ? current.unité : null : null ,
            medal: clear ? self.medal ? self.medal.clone() : erase ? current.medal : null : null ,
        };
    }
    function grilleCopy(obj) {
        let newGrille = {
            terrain: obj.terrain,
            grille:obj.grille.map(e=>{
                return e.map(f=>{return {case: f.case ? f.case.clone() : null,bunker: f.bunker ? f.bunker.clone() : null, defense: f.defense ? f.defense.clone() : null,unité: f.unité ? f.unité.clone() :null,medal: f.medal ? f.medal.clone() : null}})
            })
        }
        return newGrille
    }
    function updatePos(x,y){
            setOldGrille(grilleCopy(grille));
            let localgrille2 = {...grille};
            localgrille2.grille[x][y] = cloneSelection(selection,grille.grille[x][y]);
            setGrille(localgrille2);
    }

    function Cancel(){
        setGrille(grilleCopy(oldgrille));
    }

    function ResetSelection(){
        setSelection({
            case: null,
            bunker: null ,
            defense: null ,
            unité: null ,
            medal: null ,
        })
    }

    keyboardJS.bind('ctrl + z', function(e) {
        // Prevent the default browser undo action
        e?.preventDefault();
        Cancel()
    });

    // Listen for the 'command + z' combination (for macOS)
    keyboardJS.bind('command + z', function(e) {
        // Prevent the default browser undo action
        e?.preventDefault();
        Cancel()
    });

     keyboardJS.bind('ctrl + e', function(e) {
        // Prevent the default browser undo action
        e?.preventDefault();
        setErasenb(erasenb+1)
    });
    

    // Listen for the 'command + z' combination (for macOS)
    keyboardJS.bind('command + e', function(e) {
        // Prevent the default browser undo action
        e?.preventDefault();
        setErasenb(erasenb+1)
    });
         keyboardJS.bind('ctrl + c', function(e) {
        // Prevent the default browser undo action
        e?.preventDefault();
        setClearnb(clearnb+1)
    });
    

    // Listen for the 'command + z' combination (for macOS)
    keyboardJS.bind('command + c', function(e) {
        // Prevent the default browser undo action
        e?.preventDefault();
        setClearnb(clearnb+1)
    });
    
    const Modal = useMemo(() => <div className='absolute top-0 '>{modal}</div>, [modal]);

    const MenuPlateaux = useMemo(()=>{
        return <MenuSelector boutonStyle="bg-grey text-white " elementStyle="grid grid-cols-2 w-[140px]" options={plateaux.map((item,pos)=><div className={`${plateau.src === item.src ? "bg-blue":""} p-2 rounded-2xl ${pos % 2 ? "col-start-0":"col-start-1"}`} onClick={()=>{updatePlateau(item)}} key={item.src}> <img src={`./images/Memoire44/${item.src}.webp`} alt={item.name} className="w-16" /></div>)} title="Plateau" key="plateaux"/>
    },[plateau.src,plateaux,updatePlateau])

    const MenuEnvironnement = useMemo(()=>{
        return  <MenuSelector boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-2 w-[120px]"  options={environnements.map(item=><div className={`${environnement.src === item.src ? "bg-blue":""}  p-1 rounded-2xl`} onClick={()=>{setEnvironnement(item)}} key={item.name}> <img src={`./images/Memoire44/${item.src}`} alt={item.name} className="w-16" /></div>)} title="Environnement" key="environnements"/>
    },[environnement.src, environnements])

    const MenuErase = useMemo(()=>{

    return <div className="w-full flex flex-row mt-4 gap-8">
    <div className="w-[217px] flex flex-row gap-2  px-2 py-1 text-white font-mt-bold bg-grey text-[12px] rounded-3xl ">
        <Switch active={erase} setActive={()=>setErase(!erase)} animationDuration={600} tag="erase" update={erasenb}/>
        <div><p>Mode Erase </p><p>ctrl/cmd + e</p></div>
    </div>
        <div className="w-[337px] flex flex-row gap-4 px-2 py-1 text-white font-mt-bold bg-grey text-[12px] rounded-3xl ">
        <Switch active={clear} setActive={()=>setClear(!clear)} animationDuration={600} tag="clear" update={clearnb}/>
        <div className="flex center"><p>Mode Clear ctrl/cmd + c</p></div>
    </div>
    </div>
    },[erase, erasenb, clear, clearnb])
    
    const MenuHexagone = useMemo(()=>{
        return <>
            <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-6 w-[400px]" options={environnement.case.map(item=><div className={`${selection.case === item ? "bg-blue":""} w-32 p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, case: item instanceof CountryVide ? null : item  }))}}> {item.render()}</div>)} title="Hexagone"/>
            <ArrowTool hexa={selection.case} nbArrow={6}/>
        </>
    },[environnement.case,selection.case])

    const MenuFortifications = useMemo(()=>{
        return <>
            <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-4 w-[300px]" options={environnement.divers.map(item=><div className={`${selection.bunker === item ? "bg-blue":""} w-32 p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, bunker: item instanceof CountryVide ? null : item}));}}> {item.render()}</div>)} title="Fortifications"/>
            <ArrowTool hexa={selection.bunker} nbArrow={6}/> 
        </>
    },[environnement.divers, selection.bunker])

    const MenuDefense = useMemo(()=>{
        return <>
            <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-2 w-[130px]" options={environnement.defense.map(item=><div className={`${selection.defense === item ? "bg-blue":""} w-32 p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, defense: item instanceof CountryVide ? null : item}));}}> {item.render()}</div>)} title="Défense"/>
            <ArrowTool hexa={selection.defense} nbArrow={2}/>
        </>
    },[environnement.defense,selection.defense])

    const MenuUnité = useMemo(()=>{
        return <>
            <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-4 w-[300px] " options={environnement.unité.map(item=><div className={`${selection.unité === item ? "bg-blue":""} p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, unité: item instanceof CountryVide ? null : item.clone(nbSoldat) }));}}> {item.render(null,1,"flex -mt-4 w-20 h-20 relative","w-[50%]")}</div>)} title="Unité" />
            <MenuSelector menuPosition="right-0" boutonStyle="bg-grey text-white" elementStyle="" options={nbSoldatOption.map(soldat=><div className={`${nbSoldat === soldat ? "bg-blue":""} w-full text-center p-1 rounded-2xl`} onClick={()=>setNbSoldat(soldat)} key={`NbSoldat-${soldat}`}>{soldat ?? "default"}</div>)} title="Nb soldat" key="NbSoldat"/>
        </>
    },[environnement.unité, nbSoldat, nbSoldatOption, selection.unité])

    const MenuMédal = useMemo(()=>{
        return <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-6 w-[400px]" options={environnement.medal.map(item=><div className={`${selection.medal === item ? "bg-blue":""} w-32 p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, medal: item instanceof CountryVide ? null : item }));}}> {item.render()}</div>)} title="Médal"/> 
    },[environnement.medal, selection.medal])

    
    const Display = useMemo(()=>{
        return <div className="flex flex-row relative">
                {Modal}        
                <div key={"terrain"}>
                    <img src={`images/Memoire44/${plateau.src}.webp`} alt={"terrain"} className='w-[900px] m44:w-[1020px] m44_2:w-[1200px] h-[634px] m44:h-[719px] m44_2:h-[846px]'/>
                </div>
        <div className="absolute flex flex-col z-[200] top-[58px] left-[10px]">
          {grille.grille.map((e,pos)=>{
            return <div className={`${pos % 2 === 1 ? "ml-[45px]":""} w-full flex flex-row`} key={`ligne-${pos}`}>{
              e.map((f,pos2)=>{
                      return pos%2 === 1 && pos2 === 12 ? <></> : <div className={`relative w-[91px] h-[78px] border-0 border-white hover:cursor-pointer`} onClick={()=>updatePos(pos,pos2)}  key={`${pos}${pos2}`} id={`${pos}${pos2}`} >
                       <div className='absolute z-10 w-full h-full'>{f.case ? f.case.render(): ""}</div>
                        <div className='absolute z-20 w-full h-full'>{f.defense ? f.defense.render(): ""}</div>
                        <div className='absolute z-30 w-full h-full'>{f.bunker ? f.bunker.render(): ""}</div>
                        <div className={`pion-${pos}-${pos2} absolute z-40 w-full h-full`}>{f.unité ? f.unité.render(): ""}</div>
                        <div className='absolute z-[50] w-full h-full'>{f.medal ? f.medal.medal(): ""}</div>
                    </div>
                  
              })
          }</div>
        })}
        </div>
            <div className="w-[40%] flex flex-col p-4 ">
                <div className="w-full flex flex-row justify-between ">
                    <div className="flex flex-row relative gap-8 p-4">
                        <div className="w-fit">
                            {MenuPlateaux}
                        </div>
                        <div className="w-fit">
                           {MenuEnvironnement}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row relative flex-wrap gap-8 p-4">
                        {MenuHexagone}
                        {MenuFortifications}
                </div>
                <div className="w-full flex flex-row relative flex-wrap gap-8 p-4">
                    {MenuDefense}
                    {MenuUnité}
                    {MenuMédal}
                </div>
                
                <div>
                    
                </div>
                <div className="w-full flex flex-row relative gap-8 p-4 px-16">
                    <div className={`relative w-[91px] h-[78px] border-0 border-white `}   >
                        <div className='absolute z-10 w-full h-full'>{new HexaVide().render()}</div>
                        <CaseRenderer instance={selection.case} className="z-10" />
                        <CaseRenderer instance={selection.defense} className="z-20" />
                        <CaseRenderer instance={selection.bunker} className="z-30" />
                        <div className={`absolute z-40 w-full h-full`}>{selection.unité ? selection.unité.render(): ""}</div>
                    </div>
                    <div className="h-[105px] flex center"><div className="font-mt-bold  p-2 text-white bg-grey rounded-3xl hover:cursor-pointer" onClick={()=>{ResetSelection()}}>reset Selection</div></div>
                </div>
                <div className="mt-20 flex flex-row gap-8">
                    <div className="bg-grey rounded-3xl p-2 text-white font-mt-bold w-fit hover:cursor-pointer" onClick={()=>{setModal(<SaveScenario close={()=>{setModal(<></>)}} grille={grille.grille}/>)}} >Sauvegarder le scenario</div>
                    <div className="bg-grey rounded-3xl p-2 text-white font-mt-bold w-fit hover:cursor-pointer" onClick={()=>{Cancel()}} >Annuler la derniere action ctrl/cmd + z</div>
                </div>
                
                {MenuErase}
            </div>
        </div>
    },[Cancel,erase, MenuDefense, MenuEnvironnement, MenuErase, MenuFortifications, MenuHexagone, MenuMédal, MenuPlateaux, MenuUnité, Modal, grille.grille, plateau.src, selection.bunker, selection.case, selection.defense, selection.unité, updatePos])
    return Display
}
export default CreateScenario;