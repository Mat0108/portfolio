import { Link } from "react-router-dom"
import { toast } from "react-toastify";

export const SpaceXPresentation = ()=>{
    
const isMobile = window.screen.width < 600;
 return <div className="w-full h-full relative">
             <div className="absolute top-0 right-0 flex flex-row gap-4 z-10 p-4">
                 <Link to="https://github.com/Mat0108/Space-X/" target="_blank" rel="noopener noreferrer" className="p-2 bg-black_darked rounded-[10px] ">Github</Link>
                 {!isMobile && <Link to="/SpaceX/Home"  className="p-2 bg-black_darked rounded-[10px] ">Parcourir le projet</Link>}
                {isMobile && <div className="p-2 bg-black_darked rounded-[10px] " onClick={()=>toast.info("Merci d'utiliser un ordinateur pour parcourir le projet")}>Parcourir le projet</div>}
            
             </div>
             <div className="bg-blue_dark relative h-full overflow-y-auto overflow-x-hidden custom-scrollbar" id={"Scrollref"}><div className="flex flex-col h-full bg-blue_dark p-2 lg:p-8 gap-2 lg:gap-8 text-2xs lg:text-md">
        <div className="w-full flex gap-2 lg:gap-8">
            <div className="w-[60%] lg:w-[20%] bg-black_darked rounded-[15px] lg:rounded-[30px] p-4 flex flex-col center relative">
                <p className="p-4 text-xs lg:text-3xl font-mt-bold ">Wiki SpaceX</p>
                <p className="mt-2 text-justify ">Plateforme d'information permettant d'avoir l'historiques des lancements, leurs détails techniques, leurs réutilisations ainsi l'historiques des capsules. </p>
               <p className="absolute bottom-2 lg:bottom-1/3 right-2 ">octobre 2022</p>
            </div>
            <div className="w-[40%] lg:w-[80%] ">
                <div className="w-full h-full flex center rounded-[15px] lg:rounded-[30px] bg-black_grey"><img src={"/images/SpaceX/SpaceX_1.webp"} alt="SpaceX" className="" /></div>
            </div>
        </div>
        <div className="w-full h-full flex flex-row gap-2 lg:gap-8">
                <div className="w-[65%] flex center relative">
                  <img src={"/images/SpaceX/SpaceX_2.webp"} alt="spacex" className="rounded-[15px] lg:rounded-[30px] border-2 border-gray" />
                </div>
                <div className="w-[35%] bg-black_true rounded-[15px] lg:rounded-[30px] p-1 lg:p-4 flex flex-col center relative text-3xs lg:text-base">
                    
                    <p className="p-1 lg:p-4 text-2xs lg:text-3xl font-mt-bold ">Page dedié aux lancements </p>
                    
                    <p className="text-justify">J’ai développé une page dédiée à l’affichage détaillé des lancements SpaceX, combinant plusieurs APIs pour réunir les informations sur le site de lancement, la fusée, la capsule ainsi que le patch de mission. </p>
                    <p className="text-justify"> Elle met en avant la gestion d’appels API croisés et l’affichage structuré de données complexes.</p>
                </div>               
        </div>
                <div className="w-full h-full flex flex-row gap-2 lg:gap-8 text-3xs lg:text-base pb-[100px]">

                    <div className="w-[40%] bg-black_grey rounded-[15px] lg:rounded-[30px] p-1 lg:p-4 flex flex-col center relative ">
                        
                        <p className="p-1 lg:p-4 tex-xs lg:text-3xl font-mt-bold ">Page dedié aux capsules </p>
                        
                        <p className="text-justify">J’ai conçu une page dédiée aux capsules SpaceX, affichant leur statut (actif, retiré, inconnu), leur type (Dragon 1.0, 1.1, 2.0), ainsi que leur dernière mise à jour (localisation, exposition en musée, lien avec l’ISS, etc.).  </p>
                        <p className="text-justify"> La page récupère également les détails de leur dernière mission et le patch associé, en combinant plusieurs sources API pour présenter une vue complète et actualisée.</p>
                    </div>     
                    <div className="w-[40%] flex center relative">
                        <div className="w-full h-full flex center border-2 border-gray rounded-[15px] lg:rounded-[30px]">
                            <img src={"/images/SpaceX/SpaceX_3.webp"} alt="spacex" className="rounded-[15px] lg:rounded-[30px] " />
                    
                        </div>
                    </div>          
                    <div className="w-[20%] text-left bg-dark_green rounded-[15px] lg:rounded-[30px] p-1 lg:p-4 flex flex-col center relative ">
                        <p className="w-[90%] font-mt-bold">Derniere update : </p>
                        <p className="w-[90%] mt-1"><span className="font-mt-bold">Janvier 2023 :</span> Update pour la v4 de l'api SpaceX</p>
                        <p className="w-[90%] mt-1"><span className="font-mt-bold">Mai 2025 :</span> Refonte graphique avec TailwindCss</p>
                    </div>
            </div>
    </div>
            </div>

        </div>
}