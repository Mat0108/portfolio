import { CaseGenerique } from "../divers/Generique"

type ArrowToolType = {
    hexa: CaseGenerique | null;
    nbArrow?: number;
}
type ArrowType = {
    icon?: number;
    nb: number;
    hexa: CaseGenerique | null;
}
    
export const ArrowTool = ({ hexa, nbArrow}: ArrowToolType)=>{

    function updateHexa({nb,hexa}:ArrowType){
        let result = hexa?.updateImageRotation(nb);
        if(result){hexa?.rerender();}
    }
    function arrow({icon,nb, hexa}: ArrowType){
        return <div onClick={()=>{updateHexa({nb,hexa})}} ><img src={`./images/fleche${icon}.webp`} alt={`fleche${icon}`} className="w-8 h-6"/></div>
    }
    return <div className={`flex flex-col ${nbArrow === 6 ? "-mt-2":""}`}>
        {nbArrow === 2 ? <div> 
            <div className="flex flex-col px-3">
                {arrow({icon:7,nb:2,hexa})}
                {arrow({icon:8,nb:1,hexa})}
            </div>
        </div> : <>
                <div className="flex flex-row px-3">
            {arrow({icon:3,nb:3,hexa})}
            {arrow({icon:2,nb:2,hexa})}
        </div>
        <div className="flex flex-row gap-6">
            {arrow({icon:1,nb:1,hexa})}
            {arrow({icon:4,nb:4,hexa})}
        </div>
        <div className="flex flex-row px-3">
            {arrow({icon:5,nb:5,hexa})}
            {arrow({icon:6,nb:6,hexa})}
        </div>
    </>
}
    
    </div>    
}
