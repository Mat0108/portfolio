export const SpaceXPresentation = ()=>{
 return <div className="flex flex-col h-full bg-black_darked p-8 gap-8 text-md">
        <div className="w-full flex gap-8">
            <div className="w-[20%] bg-blue_dark rounded-[30px] p-4 flex flex-col center relative">
                <p className="p-4 text-3xl font-mt-bold ">Wiki SpaceX</p>
                <p className="mt-2 text-justify ">Plateforme d'information permettant d'avoir l'historiques des lancements, leurs details techinques, leurs reutilisations ainsi l'historiques des capsules. </p>
               <p className="absolute bottom-1/3 right-2 ">octobre 2022</p>
            </div>
            <div className="w-[80%] flex center relative">
                <img src={"/images/SpaceX/SpaceX_1.png"} alt="SpaceX" className="rounded-[30px] " />
            </div>
        </div>
        <div className="w-full h-full flex flex-row gap-8">
                <div className="w-[65%] flex center relative">
                    <img src={"/images/SpaceX/SpaceX_2.png"} alt="spacex" className="rounded-[30px] border-2 border-gray" />
                </div>
                <div className="w-[35%] bg-black_true rounded-[30px] p-4 flex flex-col center relative">
                    
                    <p className=" p-4 text-3xl font-mt-bold ">Page dedié aux lancements </p>
                    
                    <p className="text-justify">J’ai développé une page dédiée à l’affichage détaillé des lancements SpaceX, combinant plusieurs APIs pour réunir les informations sur le site de lancement, la fusée, la capsule ainsi que le patch de mission. </p>
                    <p className="text-justify"> Elle met en avant la gestion d’appels API croisés et l’affichage structuré de données complexes.</p>
                </div>               
        </div>
                <div className="w-full h-full flex flex-row gap-8">

                    <div className="w-[20%] bg-blue_dark rounded-[30px] p-4 flex flex-col center relative">
                        
                        <p className=" p-4 text-3xl font-mt-bold ">Page dedié aux capsules </p>
                        
                        <p className="text-justify">J’ai conçu une page dédiée aux capsules SpaceX, affichant leur statut (actif, retiré, inconnu), leur type (Dragon 1.0, 1.1, 2.0), ainsi que leur dernière mise à jour (localisation, exposition en musée, lien avec l’ISS, etc.).  </p>
                        <p className="text-justify"> La page récupère également les détails de leur dernière mission et le patch associé, en combinant plusieurs sources API pour présenter une vue complète et actualisée.</p>
                    </div>     
                    <div className="w-[60%] flex center relative">
                        <img src={"/images/SpaceX/SpaceX_3.png"} alt="spacex" className="rounded-[30px] border-2 border-gray" />
                    </div>          
                    <div className="w-[20%] text-left bg-dark_green rounded-[30px] p-4 flex flex-col center relative ">
                        <p className="w-[90%] font-mt-bold">Derniere update : </p>
                        <p className="w-[90%] mt-1"><span className="font-mt-bold">Janvier 2023 :</span> Update pour la v4 de l'api SpaceX</p>
                        <p className="w-[90%] mt-1"><span className="font-mt-bold">Mai 2025 :</span> Refonte graphique avec TailwindCss</p>
                    </div>
            </div>
    </div>
}