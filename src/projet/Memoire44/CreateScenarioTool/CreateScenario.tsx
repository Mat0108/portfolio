import { useMemo, useState } from "react";
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

const CreateScenario = () => {
    const [erase,setErase] = useState(false)
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
        src:"terrain0.webp",
    },{
        name:"plage",
        src:"terrain1.webp"
    },{
        name:"hivernal",
        src:"terrain3.webp"
    },{
        name:'désertique',
        src:"terrain2.webp"
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
      
    function updatePlateau(item){
        setPlateau(item);
        let env = environnements.filter(value=>value.name === item.name);
        if(env.length){
            setEnvironnement(env[0]);
        }
    }
    function cloneSelection(self,current) {
        return {
            case: self.case ? self.case.clone() : erase ? current.case : null,
            bunker: self.bunker ? self.bunker.clone() : erase ? current.bunker : null,
            defense: self.defense ? self.defense.clone() : erase ? current.defense : null,
            unité: self.unité ? self.unité.clone() : erase ? current.unité : null,
            medal: self.medal ? self.medal.clone() : erase ? current.medal : null,
        };
    }
    function updatePos(x,y){
            let localgrille2 = {...grille};
            localgrille2.grille[x][y] = cloneSelection(selection,grille.grille[x][y]);
            setGrille(localgrille2);
    }


    const Display = useMemo(()=>{
        return <div className="flex flex-row relative">
                <div key={"terrain"}>
                    <img src={`images/Memoire44/${plateau.src}`} alt={"terrain"} className='w-[900px] m44:w-[1020px] m44_2:w-[1200px] h-[634px] m44:h-[719px] m44_2:h-[846px]'/>
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
                        <div className='absolute z-[50] w-full h-full'>{f.medal ? f.medal.render(): ""}</div>
                    </div>
                  
              })
          }</div>
        })}
        </div>
            <div className="w-[40%] flex flex-col p-4 ">
                <div className="w-full flex flex-row justify-between ">
                    <div className="flex flex-row relative gap-8 p-4">
                        <div className="w-fit">
                            <MenuSelector boutonStyle="bg-grey text-white " elementStyle="grid grid-cols-2 w-[140px]" options={plateaux.map((item,pos)=><div className={`${plateau.src === item.src ? "bg-blue":""} p-2 rounded-2xl ${pos % 2 ? "col-start-0":"col-start-1"}`} onClick={()=>{updatePlateau(item)}}> <img src={`./images/Memoire44/${item.src}`} alt={item.name} className="w-16" /></div>)} title="Plateau"/>
                        </div>
                        <div className="w-fit">
                            <MenuSelector boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-2 w-[120px]" options={environnements.map(item=><div className={`${environnement.src === item.src ? "bg-blue":""} p-1 rounded-2xl`} onClick={()=>{setEnvironnement(item)}}> <img src={`./images/Memoire44/${item.src}`} alt={item.name} className="w-16" /></div>)} title="Environnement"/>
                        </div>
                    </div>
                    <div className="w-fit flex flex-row gap-4 center m-4 px-2 py-1 ml-[50px] text-white font-mt-bold bg-grey  rounded-3xl ">
                        <Switch active={erase} setActive={()=>setErase(!erase)} animationDuration={600}/>
                        <p> Erase</p>
                    </div>
                </div>
                <div className="w-full flex flex-row relative flex-wrap gap-8 p-4">
                        <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-6 w-[400px]" options={environnement.case.map(item=><div className={`${selection.case === item ? "bg-blue":""} w-32 p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, case: item instanceof CountryVide ? null : item.clone()  }))}}> {item.render()}</div>)} title="Hexagone"/>
                        <ArrowTool hexa={selection.case} nbArrow={6}/>
                        <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-4 w-[300px]" options={environnement.divers.map(item=><div className={`${selection.bunker === item ? "bg-blue":""} w-32 p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, bunker: item instanceof CountryVide ? null : item}));}}> {item.render()}</div>)} title="Fortifications"/>
                        <ArrowTool hexa={selection.bunker} nbArrow={6}/> 
                </div>
                <div className="w-full flex flex-row relative flex-wrap gap-8 p-4">
                    <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-2 w-[130px]" options={environnement.defense.map(item=><div className={`${selection.defense === item ? "bg-blue":""} w-32 p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, defense: item instanceof CountryVide ? null : item}));}}> {item.render()}</div>)} title="Défense"/>
                    <ArrowTool hexa={selection.defense} nbArrow={2}/>
                    <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-4 w-[300px] " options={environnement.unité.map(item=><div className={`${selection.unité === item ? "bg-blue":""} p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, unité: item instanceof CountryVide ? null : item }));}}> {item.render(null,1,"flex -mt-4 w-20 h-20 relative","w-[50%]")}</div>)} title="Unité" />
                    <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-6 w-[400px]" options={environnement.medal.map(item=><div className={`${selection.medal === item ? "bg-blue":""} w-32 p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, medal: item instanceof CountryVide ? null : item }));}}> {item.render()}</div>)} title="Médal"/>
                    
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
                </div>
            </div>
        </div>
    },[environnement.case, environnement.defense, environnement.divers, environnement.medal, environnement.src, environnement.unité, environnements, grille.grille, grille.terrain, plateau.src, plateaux, selection, updatePlateau, updatePos])
    return Display
}
export default CreateScenario;