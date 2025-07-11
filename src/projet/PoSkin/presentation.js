import { Link } from "react-router-dom"
import { toast } from "react-toastify";

const PoSkinPresentation = ()=>{
    
    const isMobile = window.screen.width < 600;
    return <div className="w-full h-full relative">
                <div className="absolute top-0 right-0 flex flex-row gap-4 z-10 p-4">
                    <Link to="https://github.com/Coumbadiankha/PoSkin" target="_blank" rel="noopener noreferrer" className="p-3 bg-black_darked rounded-[10px] ">Github front</Link>
                    <Link to="https://github.com/Coumbadiankha/Po-Skin-Back" target="_blank" rel="noopener noreferrer" className="p-3 bg-black_darked rounded-[10px] ">Github back</Link>
                    {!isMobile && <Link to="/PoSkin/Home"  className="p-3 bg-black_darked rounded-[10px] ">Découvrir le projet PoSkin</Link>}
                    {isMobile && <div className="p-3 bg-black_darked rounded-[10px] " onClick={()=>toast.info("Merci d'utiliser un ordinateur pour parcourir le projet")}>Découvrir le projet PoSkin</div>}
                </div>
                <div className="bg-blue_dark relative h-full overflow-y-auto overflow-x-hidden custom-scrollbar" id={"Scrollref"}>
                <div className="flex flex-col h-full bg-blue_dark p-2 lg:p-8 gap-2 lg:gap-8 lg:gap-16 text-xs lg:text-md">
                    <div className="w-full h-full flex gap-2 lg:gap-8">
                        <div className="w-[70%] lg:w-[40%] bg-black_darked rounded-[15px] lg:rounded-[30px]  p-2 lg:p-4 flex flex-col center relative text-3xs lg:text-base ">
                            <p className="p-2 lg:p-4 text-xs lg:text-5xl font-mt-bold w-full">Po.</p>
                            <p className="text-justify">PO est une plateforme dédiée à la connexion entre individus confrontés à des problèmes de peau mineurs et des spécialistes qualifiés en soins faciaux. Notre interface utilisateur est conçue pour être intuitive et conviviale, permettant à nos utilisateurs de naviguer facilement à travers les services disponibles.</p>
                            <p className="text-justify mt-4">Le projet a été développé dans le cadre d’un projet scolaire de longue durée (18 mois) réunissant plusieurs classes aux compétences complémentaires (développement, design UX/UI, marketing). Des journées de travail en présentiel, organisées toutes les 4 à 8 semaines selon les rythmes d’alternance, ont permis une réelle coordination interdisciplinaire.</p>
                        </div>
                        <div className="w-[30%] lg:w-[60%] relative">
                            <img src={"/images/PoSkin/PoSkin_01.webp"} alt={"poskin"} className="rounded-[15px] lg:rounded-[30px] w-full h-full"/>
                            <div className="absolute top-0 left-0 w-full h-full flex center">
                                <img src={"/images/PoSkin/PoSkin_logo.webp"} alt={"poskin"} className="w-1/3 lg:w-fit" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full flex gap-2 lg:gap-8">
                        <div className="w-[30%] lg:w-[60%] relative">
                            <div className="w-full h-full bg-light_gray rounded-[15px] lg:rounded-[30px] flex center"><img src={"/images/PoSkin/PoSkin_02.webp"} alt={"poskin"} className="w-full "/></div>
                            <div className="absolute bottom-0 w-full text-center text-black font-mt-bold text-3xs lg:text-2xl pb-2"> image provenant du site web Po.</div>
                        </div>
                        <div className="w-[70%] lg:w-[40%] bg-blue_grey rounded-[15px] lg:rounded-[30px] p-1 lg:p-4 flex flex-col relative text-3xs lg:text-base">
                            
                            <p className="p-1 lg:p-4 text-xs lg:text-xl font-mt-bold">Étape 1 : Création d’une landing page – Phase de validation initiale</p> 
                            <p className="px-1 lg:px-4 text-2xs lg:text-lg font-mt-demi"><span className="font-mt-bold">Objectif :</span> Valider l’intérêt du projet auprès d’un premier public.</p>
                            <p className="mt-1 lg:mt-4">- Conception et mise en ligne d’une landing page présentant clairement le concept de PO, ses objectifs et son positionnement.</p>   
                            <p className="mt-1 lg:mt-4 text-justify">- Intégration d’un formulaire d’inscription à une newsletter, permettant de constituer une première base d’utilisateurs intéressés et d’informer régulièrement sur l’avancement du projet.</p>
                            <p className="mt-1 lg:mt-4">- Réalisation d’une première phase de tests et retours :</p>
                            <p className="ml-2 lg:ml-8 -indent-3">• Présentation aux encadrants du projet</p>
                            <p className="ml-2 lg:ml-8 -indent-3">• Recueil de feedbacks d’autres groupes d’étudiants (design, marketing, développement)</p>
                            <p className="ml-2 lg:ml-8 -indent-3">• Conduite d’interviews utilisateurs auprès de personnes extérieures au projet pour évaluer la clarté du message et la pertinence de l’offre</p>
                            <p className="mt-1 lg:mt-4 text-justify"><span className="font-mt-bold"> Résultat : </span>Un intérêt confirmé pour une solution centrée sur la mise en relation directe avec des professionnels, avec une forte attente sur la simplicité du parcours de prise de rendez-vous.</p>
                        </div>
                    </div>
                    <div className="w-full flex gap-2 lg:gap-8">
                        <div className="w-[70%] lg:w-[40%] bg-dark_green rounded-[15px] lg:rounded-[30px] p-4 flex flex-col relative text-3xs lg:text-base">
                            <p className="p-1 lg:p-4 text-xs lg:text-xl font-mt-bold">Étape 2 : Développement du premier prototype – Exploration fonctionnelle</p> 
                            <p className="px-1 lg:px-4 text-2xs lg:text-lg font-mt-demi"><span className="font-mt-bold">Objectif :</span> Explorer les pistes de développement et identifier la direction prioritaire.</p>
                            <p className="mt-1 lg:mt-4">- Réalisation d’un premier prototype interactif incluant :</p>
                            <p className="ml-2 lg:ml-8 -indent-3">•Une newsletter avec envoi automatisé d’actualités du projet</p>
                            <p className="ml-2 lg:ml-8 -indent-3">• Un blog proposant des articles informatifs sur les problèmes de peau et les routines de soins</p>
                            <p className="ml-2 lg:ml-8 -indent-3">• Un espace de questions/réponses entre utilisateurs et experts fictifs pour tester la dynamique communautaire</p>   
                            <p className="mt-1 lg:mt-4">-Réflexion collective autour de trois modules clés pour la suite :</p>
                            <p className="ml-2 lg:ml-8 -indent-3">• Prise de rendez-vous avec des spécialistes de problèmes de peau mineurs</p>
                            <p className="ml-2 lg:ml-8 -indent-3">• Communauté participative pour échange d’expériences</p>
                            <p className="ml-2 lg:ml-8 -indent-3">• Boutique de produits adaptés</p>
                            <p className="mt-1 lg:mt-4"><span className="font-mt-bold"> Décision strategique : </span>se focaliser exclusivement sur le module de prise de rendez-vous, perçu comme le plus pertinent, tout en laissant la porte ouverte à une intégration ultérieure des autres fonctionnalités</p>
                        
                        </div>
                        <div className="w-[30%] lg:w-[60%] relative">
                            <div className="w-full h-full bg-gray_black rounded-[15px] lg:rounded-[30px] flex center"><img src={"/images/PoSkin/PoSkin_03.webp"} alt={"poskin"} className="w-full  rounded-[15px] lg:rounded-[30px] "/></div>
                            <div className="absolute bottom-0 w-full text-center text-black font-mt-bold text-3xs lg:text-2xl pb-2"> image provenant du site web Po.</div>
                        </div>
                    </div>
                    <div className="w-full flex gap-2 lg:gap-8 pb-[100px]">
                        <div className="w-[30%] lg:w-[65%] relative">
                            <div className="w-full h-full bg-gray_black rounded-[15px] lg:rounded-[30px] flex center"><img src={"/images/PoSkin/PoSkin_04.webp"} alt={"poskin"} className="w-full"/></div>
                            <div className="absolute bottom-0 w-full text-center text-black font-mt-bold text-3xs lg:text-2xl pb-2"> image provenant du site web Po.</div>
                        </div>
                        <div className="w-[70%] lg:w-[35%] bg-black_grey rounded-[30px] p-4 flex flex-col relative text-3xs lg:text-base">
                            <p className="p-1 lg:p-4 text-xs lg:text-xl font-mt-bold"> Étape 3 : Lancement de la version 1.0 – Première mise en service réelle</p> 
                            <p className="px-1 lg:px-4 text-2xs lg:text-lg font-mt-demi"><span className="font-mt-bold">Objectif :</span> Explorer les pistes de développement et identifier la direction prioritaire.</p>
                            <p className="mt-1 lg:mt-4">- Développement et mise en ligne de la version 1.0 de Po., centrée sur :</p>
                            <p className="ml-2 lg:ml-8 -indent-3">• La prise de rendez-vous avec gestion des créneaux, notifications, confirmation, et interface utilisateur intuitive</p>
                            <p className="ml-2 lg:ml-8 -indent-3">• Un design repensé pour améliorer l’expérience utilisateur suite aux tests de la version précédente</p>   
                            <p className="mt-1 lg:mt-4">-Intégration technique complète (front-end, back-end, base de données, sécurité)</p>
                            <p className="mt-1 lg:mt-4">- Ouverture de la plateforme à des premiers utilisateurs inscrits via la newsletter</p>
                            <p className="mt-1 lg:mt-4"><span className="font-mt-bold"> Résultat : </span> premiers rendez-vous effectivement réservés via la plateforme, confirmant la viabilité du service.</p>
                        
                        </div>

                    </div>
                    
                </div>
        </div>
        </div>
}
export default PoSkinPresentation;