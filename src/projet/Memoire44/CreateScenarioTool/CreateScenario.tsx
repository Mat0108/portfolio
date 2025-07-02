import { useMemo, useState } from "react";
import MenuSelector from "../../../composant/MenuSelector.tsx";
import HexagonePlaine from "./HexagonePlaine.tsx";
import { CaseGenerique } from "../divers/Generique.js";
import HexagoneHiver from "./HexagoneHiver.tsx";

const CreateScenario = () => {
    const environnements =[{
        name:"plaine",
        src:"base/h_village.webp",
        case: HexagonePlaine()
    },{
        name:"pacifique",
        src:"pacific/h_pvillage.webp",
        case: HexagonePlaine()
    },{
        name:"hivernal",
        src:"snow/h_wvillage.webp",
        case: HexagoneHiver()

    },{
        name:"désertique",
        src:"mediterranean/h_bled.webp",
        case: HexagonePlaine()
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
    const [plateau,setPlateau] = useState(plateaux[1]); 
    type SelectionType = {
    case: CaseGenerique | null; // Remplace `any` par le vrai type si connu, ex: `Case | null`
    bunker: any;
    defense: any;
    unité: any;
    medal: any;
    action: any;
    highlight: any;
    select: any;
    };
    const [selection,setSelection] = useState<SelectionType>({case: null,bunker: null,defense: null, unité:null,medal:null,action:null,highlight:null,select:null})


    const Display = useMemo(()=>{
        return <div className="w-full h-full flex flex-row">
            <div className="w-[60%]">
                <img src={`./images/Memoire44/${plateau.src}`} alt={plateau.name} />
            </div>
            <div className="w-[40%] flex flex-col p-4 ">
                <div className="w-full flex flex-row relative gap-8 p-4 ">
                    <div className="w-fit">
                        <MenuSelector boutonStyle="bg-grey text-white " elementStyle="grid grid-cols-2 w-[140px]" options={plateaux.map((item,pos)=><div className={`${plateau.src === item.src ? "bg-blue":""} p-2 rounded-2xl ${pos % 2 ? "col-start-0":"col-start-1"}`} onClick={()=>{setPlateau(item)}}> <img src={`./images/Memoire44/${item.src}`} alt={item.name} className="w-16" /></div>)} title="Plateau"/>
                    </div>
                    <div className="w-fit">
                        <MenuSelector boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-2 w-[120px]" options={environnements.map(item=><div className={`${environnement.src === item.src ? "bg-blue":""} p-1 rounded-2xl`} onClick={()=>{setEnvironnement(item)}}> <img src={`./images/Memoire44/${item.src}`} alt={item.name} className="w-16" /></div>)} title="Environnement"/>
                    </div>
                </div>
                <div className="w-full flex flex-row relative gap-8 p-4">
                     <MenuSelector menuPosition="left-0" boutonStyle="bg-grey text-white" elementStyle="grid grid-cols-6 w-[400px]" options={environnement.case.map(item=><div className={`${selection.case === item ? "bg-blue":""} w-32 p-1 rounded-2xl`} onClick={()=>{setSelection(prev => ({ ...prev, case: item }));}}> {item.render()}</div>)} title="Hexagone"/>
                    
                </div>
                <div className="w-full flex flex-row relative gap-8 p-4">
                    <div className={`relative w-[91px] h-[78px] border-0 border-white `}   >
                        <div className='absolute z-10 w-full h-full'>{selection.case ? selection.case.render(): ""}</div>
                        <div className='absolute z-20 w-full h-full'>{selection.defense ? selection.defense.render(): ""}</div>
                        <div className='absolute z-30 w-full h-full'>{selection.bunker ? selection.bunker.render(): ""}</div>
                        <div className={`absolute z-40 w-full h-full`}>{selection.unité ? selection.unité.render(): ""}</div>
                    </div>
                </div>
            </div>
        </div>
    },[environnement.src, environnements, plateau, plateau, plateaux, selection])
    return Display
}
export default CreateScenario;