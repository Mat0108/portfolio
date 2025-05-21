
import { Link } from "react-router-dom"
import Carousel from "./carousel/carousel.tsx"
import ExpandingGrid from "./grid/grid2.tsx"
const size = "w-[350px] h-[350px] "
const size2 = "w-[60vw] lg:w-[60vw] 2xl:w-[60vw] h-[350px]"
const size3 = "w-[60vw] lg:w-[calc(60vh - 110px)] 2xl:w-[calc(60vh - 110px)]] h-[290px]"
const size4 = "w-[60vw] lg:w-[60vw] 2xl:w-[60vw] h-[350px]"


function RandstadCard(Tag){
    return <div className={`${Tag} ${size3} relative text-left bg-black p-4 rounded-3xl`}>
        <p className="text-lg">Développeur full stack dans le service Mobilité</p>
        <div className="text-md flex justify-between">
            <p>Randstad</p>
            <p>nov. 2023 - sept. 2024</p>
        </div>
        <div className="w-full flex flex-row pt-2 ">
            <div className="flex flex-col w-[70%] text-justify gap-2">
                <p>Le service Mobilité de Randstad développe des solutions qui permettent aux collaborateurs de travailler à distance. </p>
                <p>Développement d'une fonctionnalité de matching de compétences entre intérimaires et offres d'emploi, accompagnée d'améliorations UX/UI et de composants internes.</p>
            </div>
        </div>
        <div className="absolute right-10 top-0 h-full flex center">
            <img src={"/images/randstad.png"} alt={"randstad"} />
        </div>
    </div>
}
function EllisCarCard(Tag){
    return <div className={`${Tag} ${size3} relative text-left bg-black p-4 rounded-3xl`}>
        <p className="text-lg">Développeur full stack dans la startup Ellis Car</p>
        <div className="text-md flex justify-between">
            <p>Ellis Car</p>
            <p>sept. 2022 - sept. 2023</p>
        </div>
        <div className="w-full flex flex-row pt-2 ">
            <div className="flex flex-col w-[70%] text-justify gap-2">
                <p>Ellis car est une startup proposant une solution de gestion de flotte de voitures. </p>
                <p>Développement complet de plusieurs pages dont la page équipe, mettant en place une arborescence interactive avec des composants personnalisés pour visualiser les équipes et leurs conducteurs, ainsi que des interfaces dédiées aux données, conducteurs et véhicules.</p>
            </div>
        </div>
        <div className="absolute right-10 top-0 h-full flex center">
            <img src={"/images/elliscar.png"} alt={"elliscar"} />
        </div>
    </div>
}
function Veolia6(Tag){
    return <div className={`${Tag} ${size3} relative text-left bg-black p-4 rounded-3xl`}>
        <p className="text-lg">Stage de 6 mois dans l’équipe Digital Factory</p>
        <div className="text-md flex justify-between">
            <p>Veolia</p>
            <p>mars. 2022 - aout. 2022</p>
        </div>
        <div className="w-full flex flex-row pt-2 ">
            <div className="flex flex-col w-[70%] text-justify gap-2">
                
                <p>Participation au développement de deux solutions industrielles : collecte sécurisée de données terrain (<span className="font-mt-bold">Edge to Cloud</span>) et traitements avancés de séries temporelles (<span className="font-mt-bold">TimeSeries Engine</span>), avec interventions sur l’UX, les pipelines, les filtres, les métriques AWS et la gestion des traductions (migration vers Transloco).</p>
            </div>
        </div>
        <div className="absolute right-10 top-0 h-full flex center">
            <img src={"/images/veolia.png"} alt={"veolia"} className="w-20"/>
        </div>
    </div>
}
function Veolia4(Tag){
    return <div className={`${Tag} ${size3} relative text-left bg-black p-4 rounded-3xl`}>
        <p className="text-lg">Stage de 4 mois dans l’équipe Digital Factory</p>
        <div className="text-md flex justify-between">
            <p>Veolia</p>
            <p>mars. 2021 - juin. 2021</p>
        </div>
        <div className="w-full flex flex-row pt-2 ">
            <div className="flex flex-col w-[70%] text-justify gap-2">
                
                <p>Participation au développement de la solution <span className="font-mt-bold">Edge to Cloud</span>, avec un focus sur le monitoring des services AWS (CloudWatch, Lambda metrics) et la récupération d’états systèmes. Interventions sur l’interface (refonte graphique), la correction des filtres et l’amélioration de la fiabilité des métriques cloud.</p>
            </div>
        </div>
        <div className="absolute right-10 top-0 h-full flex center">
            <img src={"/images/veolia.png"} alt={"veolia"} className="w-20"/>
        </div>
    </div>
}



export function Memoire44Card(Tag,size){
    return <div className={`${Tag} ${size ?? size3}  text-left bg-dark_grey  font-mt-demi rounded-3xl`}>
        <div className="relative  w-full h-full flex flex-col p-4 ">
            <p className="text-lg">Projet d'un fan game d'un jeu de société</p>
            <div className="text-md flex justify-between">
                <p>Memoire 44</p>
                <p>juin. 2022 - auj</p>
            </div>
            <div className="w-full flex flex-row pt-2 ">
                <div className="flex flex-col w-[70%] text-justify gap-2">
                    <p>Suite à l’indisponibilité de la version jeu vidéo du jeu de société original, j’ai développé ma propre adaptation. J’ai recréé fidèlement le jeu de base, en reproduisant tous les cas de figure possibles : plateau en grille hexagonale, algorithme de pathfinding, scénarios jouables et éditeur graphique. Les prochaines étapes incluent l’ajout d’une partie des extensions, avec l’intégration des environnements hivernaux et désertiques, ainsi que de nouvelles unités spéciales.</p>
                
                </div>
            </div>
            <div className="absolute right-10 top-0 h-full flex center">
                <img src={"/images/memoire44/memoire44_2.png"} alt={"memoire44"} className="h-8"/>
            </div>
            <div className="absolute right-10 bottom-4 ">
                <Link to="/Memoire44" className="bg-green_dark rounded-2xl p-2 text-white font-mt-bold hover:cursor-pointer">En savoir plus</Link>
            </div>
    </div>
</div>
}
export function PoSkinCard(Tag,size){
    return <div className={`${Tag} ${size}  text-left bg-dark_grey  font-mt-demi rounded-3xl`}>
        <div className="relative  w-full h-full flex flex-col p-4 ">

       
        <p className="text-lg">Projet d'une plateforme de mise en relation pour soins de peau mineure</p>
        <div className="text-md flex justify-between">
            <p>Po.</p>
            <p>dec. 2022 - avril 2024</p>
        </div>
        <div className="w-full flex flex-row pt-2 ">
            <div className="flex flex-col w-[70%] text-justify gap-2">
                <p>
                PO est une plateforme dédiée à la connexion entre individus confrontés à des problèmes de peau mineurs et des spécialistes qualifiés en soins faciaux. Notre interface utilisateur est conçue pour être intuitive et conviviale, permettant à nos utilisateurs de naviguer facilement à travers les services disponibles.
                </p>
            
            </div>
        </div>
        <div className="absolute right-10 top-0 h-full flex center">
            <img src={"/images/po.png"} alt={"po"} className="h-16"/>
        </div>
        <div className="absolute right-10 bottom-2 ">
            <Link to="/PoSkin" className="bg-green_dark rounded-2xl p-2 text-white font-mt-bold hover:cursor-pointer">En savoir plus</Link>
        </div>
        </div>
    </div>
}
export function SpaceXCard(Tag,size){
    return <div className={`${Tag} ${size ?? size3}  text-left bg-dark_grey  font-mt-demi rounded-3xl`}>
        <div className="relative  w-full h-full flex flex-col p-4 ">

       
        <p className="text-lg">Plateforme d’information sur les lancements spatiaux</p>
        <div className="text-md flex justify-between">
            <p></p>
            <p>oct. 2022</p>
        </div>
        <div className="w-full flex flex-row pt-2 ">
            <div className="flex flex-col w-[70%] text-justify gap-2">
                <p>
                    Plateforme d'information permettant d'avoir l'historiques des lancements, leurs details techinques, leurs reutilisations ainsi l'historiques des capsules.
                </p>
            
            </div>
        </div>
        <div className="absolute right-10 top-0 h-full flex center">
            <img src={"/images/spacex.png"} alt={"spacex"} style={{width:"72px"}}/>
        </div>
            <div className="absolute right-10 bottom-4 ">
                <Link to="/SpaceX" className="bg-green_dark rounded-2xl p-2 text-white font-mt-bold hover:cursor-pointer">En savoir plus</Link>
            </div>
        </div>
    </div>
}

export function PortfolioCard(Tag,size){
    return <div className={`${Tag} ${size ?? size3}  text-left bg-dark_grey  font-mt-demi rounded-3xl`}>
        <div className="relative  w-full h-full flex flex-col p-4 ">

       
        <p className="text-lg">Mon portfolio </p>
        
        <div className="w-full flex flex-row pt-2 ">
            <div className="flex flex-col w-full text-justify gap-2">
                <p>Les technologies que j'ai utilisées :</p>
                <div className="w-full flex flex-row gap-8">
                   <img src="/images/tech/r.png" alt="logo_react" className="w-16"/>
                   <img src="/images/tech/ta.png" alt="logo_tailwind" className="w-16"/>
                   <img src="/images/tech/t.png" alt="logo_typescript" className="w-16"/>
            
                </div>
                    
            </div>
        </div>
        <div className="absolute right-10 bottom-4 ">
            <Link to={"https://github.com/Mat0108/portfolio/"} target="_blank" rel="noopener noreferrer" className="bg-green_dark rounded-2xl p-2 text-white font-mt-bold">github</Link>
        </div>
        </div>
    </div> 
}
function BootStapCard(Background){
    return <div className={`relative ${size} flex flex-col gap-0 center ${Background} rounded-[40px] text-center`}>
        Dernier projet réalisé avec Bootstrap en 2022 - 2023. Depuis, je privilégie Tailwind CSS pour sa flexibilité et sa compatibilité avec mes projets JavaScript modernes.
        <div className="absolute bottom-2 right-5">
            <img src={"/images/retour.png"} alt={"retour"} className="w-8"/>
        </div>
    </div>
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
            <div className={`${size2} flex flex-col align-middle items-center  text-center ${Background} rounded-[40px] p-4 `}>
            
                {experience.length === 1 && experience[0]}
                {experience.length !== 1 && <div className="w-full h-min"><Carousel elems={experience} nbShow={1} display={5} start={0} showPoint={true} tag={tag} hiddendiv={<div className={size3}></div>} animatedDuration={600}/></div>}
   
            </div>
        )

}



const ReactItem = FrontCard("/images/tech/r.png","react","React","bg-blue_dark");
const ReactBackItem = BackCard([RandstadCard("Card-React-0"),EllisCarCard("Card-React-1"),Memoire44Card("Card-React-2"),PoSkinCard("Card-React-3",size3),SpaceXCard("Card-React-4"),PortfolioCard("Card-React-5")],"bg-blue_grey","Card-React")

const AngularItem = FrontCard("/images/tech/a.png","angular","Angular","bg-blue_dark");
const AngularBackItem = BackCard([Veolia6("Card-Angular-0"),Veolia4("Card-Angular-1")],"bg-blue_grey","Card-React")

const JavaScriptItem = FrontCard("/images/tech/j.png","javascript","JavaScript","bg-blue_dark");
const JavaScriptBackItem = BackCard([RandstadCard("Card-JavaScript-0"),EllisCarCard("Card-JavaScript-1"),Veolia6("Card-JavaScript-2"),Veolia4("Card-JavaScript-3"),Memoire44Card("Card-JavaScript-4"),PoSkinCard("Card-JavaScript-5",size3),SpaceXCard("Card-JavaScript-6")],"bg-blue_grey","Card-React")

const TypeScriptItem = FrontCard('/images/tech/t.png',"typecript","Typescript","bg-blue_dark");
const TypeScriptBackItem = BackCard([EllisCarCard("Card-typescript-0"),PortfolioCard("Card-typescript-1")],"bg-blue_grey","Card-typescript");

const TailwindItem = FrontCard('/images/tech/ta.png',"tailwind","TailwindCss","bg-blue_dark");
const TailwindBackItem = BackCard([EllisCarCard("Card-tailwind-0"),Memoire44Card("Card-tailwind-1"),PoSkinCard("Card-tailwind-2",size3),SpaceXCard("Card-tailwind-3"),PortfolioCard("Card-tailwind-4")],"bg-blue_grey","Card-tailwind")

const BootstrapItem = FrontCard('/images/tech/b.png',"bootstrap","Bootstrap","bg-blue_dark");
const BootstrapBackItem = BootStapCard("bg-blue_grey");

const NodeItem = FrontCard("/images/tech/node.png","node","Node","bg-blue_dark");
const NodeBackItem = BackCard([PoSkinCard("Card-node-0","h-[90%]")],"bg-blue_grey","Card-node")

const NextItem = FrontCard("/images/tech/nx.png","nx","NextJs","bg-blue_dark")
const NextBackItem = BackCard([RandstadCard("Card-Next-0"),EllisCarCard("Card-Next-1")],"bg-blue_grey","Card-Next")

const MongoDBItem = FrontCard("/images/tech/md.png","MongoDB","MongoDB","bg-blue_dark")
const MongoDBBackItem = BackCard([RandstadCard("Card-MongoDB-0"),EllisCarCard("Card-MongoDB-1")],"bg-blue_grey","Card-MongoDB")
export const Compétence = ()=>{
    
      return (
        <div className="flex flex-row ">
            {<ExpandingGrid frontItems={[ReactItem,AngularItem,JavaScriptItem,TypeScriptItem,TailwindItem,BootstrapItem,NodeItem,NextItem,MongoDBItem,ReactItem]} backItems={[ReactBackItem,AngularBackItem,JavaScriptBackItem,TypeScriptBackItem,TailwindBackItem,BootstrapBackItem,NodeBackItem,NextBackItem,MongoDBBackItem,ReactBackItem]} onlyArrow={[1,1,1,1,1,0,0,1,1]} background={"bg-black_grey"} hiddendiv={size} hiddendivgrow={size4} isGrow={[1,1,1,1,1,0,1,1,1]}/>}
            </div>
        
    )
        
}