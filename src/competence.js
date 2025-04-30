
import { Card } from "./composant/card/card.js"
import Carousel from "./composant/carousel/carousel"
import ExpandingGrid from "./grid/grid2.tsx"
const size = "w-[300px] h-[300px] "
const size2 = "w-full h-[300px]"
const competence = ()=>{

}
function FrontCard(LogoUrl,LogoAlt, Name,Background){
    return <div className={`relative ${size} flex flex-col gap-0 center ${Background} rounded-[40px]`}>
        <div className="h-[80%] w-full flex center rounded-t-[15%]">
            <img src={LogoUrl} alt={LogoAlt} className="h-1/2"/>
        </div>
        <div className="h-[20%] w-full rounded-b-[15%] text-center font-mt-bold ">
            {Name}
        </div>
        <div className="absolute bottom-2 right-5">
            <img src={"/images/retour.png"} alt={"retour"} className="w-8"/>
        </div>
    </div>
}

function BackCard(experience,Background,tag){
        
        return (
            <div className={`relative ${size2} flex flex-col align-middle items-center  text-center ${Background} rounded-[40px]`}>
            
                {experience.length === 1 && experience[0]}
                {experience.length !== 1 && <Carousel props={{items:experience,nbShow:1,ratio:5,showPoint:true,tag:tag,hiddendiv:<div className={size}></div>,animatedDuration:800}}/>}
               <div className="absolute bottom-2 right-5">
                    <img src={"/images/retour.png"} alt={"retour"} className="w-8"/>
                </div>
            </div>
        )

}

function ItemCarousel(LinkTo,Tag,Id,Title,Entreprise,Periode,Resume1,Resume2,LogosTech,Logo){
    return <div className={`${Tag}-${Id} h-full text-left bg-black p-4 rounded-3xl`}>
        <p className="text-lg">{Title}</p>
        <div className="text-md flex justify-between">
            <p>{Entreprise}</p>
            <p>{Periode}</p>
        </div>
        <div className="w-full flex flex-row pt-2 ">
            <div className="flex flex-col w-[70%] text-justify gap-2">
                <p>
                    {Resume1}
                </p>
                <p>
                    {Resume2}
                </p>
            </div>

            <div className="">

            </div>
        </div>
        

        
    </div>

}
const Randstad = ItemCarousel("/","Card-React","0","Développeur full stack dans le service Mobilité","Randstad","nov. 2023 - sept. 2024 ","Le service Mobilité de Randstad développe des solutions qui permettent aux collaborateurs de travailler à distance.","Développement d'une fonctionnalité de matching de compétences entre intérimaires et offres d'emploi, accompagnée d'améliorations UX/UI et de composants internes.")
const Randstad2 = ItemCarousel("/","Card-React","1","Développeur full stack dans le service Mobilité","Randstad","nov. 2023 - sept. 2024 ","Le service Mobilité de Randstad développe des solutions qui permettent aux collaborateurs de travailler à distance.","Développement d'une fonctionnalité de matching de compétences entre intérimaires et offres d'emploi, accompagnée d'améliorations UX/UI et de composants internes.")
const ReactItem = FrontCard("/images/tech/r.png","react","React","bg-blue_dark");
const BackItem = BackCard([Randstad],[],"bg-blue_grey")
export const ReactCard = ()=>{
    function B(){
        return (
        <div className="w-[300px] h-[300px] flex flex-col center ">
            <div className="h-[80%] w-full flex center bg-yellow rounded-t-[15%]">
                <img src="/images/tech/r.png" alt={"react"} className="h-1/2"/>
            </div>
            <div className="h-[20%] w-full bg-blue_dark rounded-b-[15%] text-center font-mt-bold mt-2">
                Front test
            </div>
        </div>
        )
    }
    // return <Card props={{id:"react-card",front:A(),back:B(),animatedDuration:600}} />


    
      return (
        <div className="flex flex-row gap-4">
        {/* <Card props={{frontContent:FrontCard("/images/tech/r.png","react","React","bg-blue_dark"),backContent:BackCard([Randstad,Randstad],"bg-blue_grey","Card-React")}} />
        <Card props={{frontContent:FrontCard("/images/tech/r.png","react","React","bg-blue_dark"),backContent:BackCard([Randstad],[],"bg-blue_grey")}} />
        <Card props={{frontContent:FrontCard("/images/tech/r.png","react","React","bg-blue_dark"),backContent:BackCard([Randstad],[],"bg-blue_grey")}} />
     */}
            {<ExpandingGrid frontItems={[ReactItem,ReactItem,ReactItem,ReactItem]} backItems={[BackItem,BackItem,BackItem,BackItem]}/>}
            </div>
        
    )
        
}