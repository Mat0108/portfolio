const Memoire44Presentation = ()=>{
    const isMobile = window.screen.width < 600;
    return <div className="flex flex-col h-full bg-blue_dark p-2 lg:p-8 gap-2 lg:gap-8 text-xs lg:text-md">
        <div className="w-full h-full flex flex-row gap-2 lg:gap-8">
            <div className="w-[70%] lg:w-[40%] bg-black_darked rounded-[15px] lg:rounded-[30px] p-1 lg:p-4 flex flex-col center relative text-3xs lg:text-base ">
                <p className="w-full p-1 lg:p-4 font-mt-bold text-2xs lg:text-3xl">Memoire 44</p>
                <p className="mt-2 text-justify ">Lorsque le jeu vidéo officiel adapté du jeu de plateau est devenu indisponible, j'ai souhaité développer ma propre version. </p>
                <p className="mt-2 text-justify ">Après un an de développement, j'ai réalisé des avancées significatives dans plusieurs domaines clés : <span className="font-mt-bold">gestion du plateau de jeu </span> ainsi que des unités de base, mise en place d'un <span className="font-mt-bold">algorithme de pathfinding</span>, intégration de plusieurs scénarios, et création d'un outil graphique pour l'ajout de scénarios. </p>
                <p className="mt-2 text-justify ">Les prochaines étapes incluent l'intégration des environnements hivernaux et désertiques, l'ajout d'unités spéciales, et une meilleure gestion des cartes de commandement. </p>
                <p className="w-full text-right mt-2 text-2xs lg:text-base ">juillet 2022 - auj. </p>
            </div>
            <div className="w-[30%] lg:w-[60%] bg-light_gray rounded-[15px] lg:rounded-[30px] flex center relative">
                <img src={"/images/memoire44/memoire44_3.png"} alt="memoire 44" className="w-full lg:w-1/2 mb-2" />
                <div className="w-[80%] absolute bottom-0 mb-2 text-true_white text-3xs lg:text-lg font-mt-bold">Le jeu dans sa version plateau</div>
            </div>
        </div>
        <div className="w-full h-fit relative flex flex-col gap-4 lg:gap-16 bg-dark_green p-1 lg:p-4 rounded-[15px] lg:rounded-[30px] ">
            <p className="text-xs lg:text-xl font-mt-bold lg:mb-[-2rem]"> Comment s'est realisé le developpement ? </p>
            <div className="w-full h-full flex flex-row gap-2 lg:gap-8">
                {isMobile && <div className="w-[30%] lg:w-[65%] bg-light_gray rounded-[15px] lg:rounded-[30px] flex center relative lg:p-2 ">
                    <img src={"/images/memoire44/memoire44_4.png"} alt="memoire 44" className="w-full lg:w-4/5" />
                </div>}
                <div className="w-[70%] lg:w-[35%] bg-blue_dark rounded-[15px] lg:rounded-[30px] p-1 lg:p-4 flex flex-col relative text-3xs lg:text-base">
                    <p className="p-2 lg:p-4 text-xs lg:text-3xl font-mt-bold ">Etape 1</p>
                    <p className="mt-1 lg:mt-4 ">- <span className="font-mt-bold">génération du plateau de jeu</span> à travers l'ajout des unités (soltat, tank, artillerie ), ajout des différents types de tuiles (forets, villages, collines ...)  </p>
                    <p className="mt-1 lg:mt-4 ">- Intégration de la <span className="font-mt-bold">phase de deplacement d'une unité</span> :  </p>
                    <p className="ml-4 text-justify -indent-3"> • Calcul du coût de déplacement avec un dégradé de vert indiquant les possibilités d’attaque après le déplacement. </p>
                    <p className="ml-4 mt-1 text-justify -indent-3"> • Mise en place d’un système de pathfinding respectant les règles du jeu (par exemple, une unité ne peut pas monter et descendre une colline dans le même tour).</p>
                    <p className="mt-1 lg:mt-4 ">- Intégration de la <span className="font-mt-bold">phase d'attaque :</span></p>
                    <p className="ml-8 -indent-3"> • Détermination de la <span className="font-mt-bold">ligne de mire</span> selon les règles du jeu.</p>
                    <p className="ml-8 -indent-3"> • Calcul du nombre de dés à lancer en fonction de la distance, de la position (ex. : ennemi dans une foret), etc..</p>
                </div>
                {!isMobile && <div className="w-[30%] lg:w-[65%] bg-light_gray rounded-[30px] flex center relative p-2 ">
                    <img src={"/images/memoire44/memoire44_4.png"} alt="memoire 44" className="w-4/5" />
                </div>}
                
            </div>
            <div className="w-full h-full flex flex-row gap-2 lg:gap-8">
                {!isMobile &&<div className="w-[30%] lg:w-[65%] bg-brown_dark rounded-[15px] lg:rounded-[30px] flex center relative p-1 lg:p-4 ">
                    <img src={"/images/memoire44/memoire44_6.5.png"} alt="memoire 44" className="" />
                </div>}
                <div className="w-[60%] lg:w-[35%] bg-black_true rounded-[15px] lg:rounded-[30px] p-1 lg:p-4 flex flex-col relative text-3xs lg:text-base">
                    
                    <p className="p-1 lg:p-4 text-2xs lg:text-3xl font-mt-bold ">Etape 2</p>
                    
                    <p> - Intégration des différents <span className="font-mt-bold">cartes de commandements</span></p>
                    <p className="ml-4 ">- Intégration des <span className="font-mt-bold">cartes de commandements basique</span> (fond vert) :</p>
                    <p className="ml-8 text-justify -indent-3">• Implémentation d’un système de sélection d’unités limité par un nombre maximum défini par la carte.</p>
                    <p className="ml-8 text-justify -indent-3">• Détermination dynamique de la zone de sélection (ex : flanc gauche, centre, flanc droit) avec validation des unités sélectionnées en fonction de leur position sur la grille.</p>
                    
                    
                    <p className="ml-4 mt-2 text-justify ">- Intégration des <span className="font-mt-bold">cartes de commandements avancé </span>(fond gris) : </p>
                    <p className="ml-8 text-justify -indent-3">• Système modulaire de gestion des effets spécifiques à chaque carte (ex. : bonus de déplacement, attaques supplémentaires, ordres spéciaux).</p>
                    <p className="ml-8 text-justify -indent-3">• Surcharge des phases standards (sélection, déplacement, attaque) selon les règles propres à chaque carte.</p>
                 
                </div>     
                {isMobile &&<div className="w-[40%] lg:w-[65%] bg-brown_dark rounded-[15px] lg:rounded-[30px] flex center relative ">
                    <img src={"/images/memoire44/memoire44_6.5.png"} alt="memoire 44" className="" />
                </div>}          
            </div>
            <div className="w-full h-full flex flex-row gap-2 lg:gap-8">
                {isMobile && <div className="w-[40%] lg:w-[70%] bg-black_grey rounded-[15px] lg:rounded-[30px] flex center relative  ">
                    <img src={"/images/memoire44/memoire44_7.png"} alt="memoire 44" className="" />
                </div>}
                <div className="w-[60%] lg:w-[30%] bg-gray_black rounded-[15px] lg:rounded-[30px] p-1 lg:p-4 flex flex-col relative text-3xs lg:text-base">
                    <p className="p-1 lg:p-4 text-xs lg:text-3xl font-mt-bold ">Etape 3</p>
                    <p className="mt-2 text-justify -indent-4"> - Correction de divers bugs liés au placement des unités, au calcul du nombre de dés appliqués à l’ennemi, ainsi qu’à la détection des déplacements possibles, grâce à l’intégration d’un algorithme de pathfinding. </p>
                    <p className="mt-2 text-justify -indent-4"> - <span className="font-mt-bold">Ajout d’un éditeur graphique de scénario </span>permettant de sélectionner, pour chaque case, son type d’hexagone, son item de défense, son unité et sa médaille. </p>
                    <p className="ml-4 mt-2 text-justify -indent-3"> • Cet éditeur prend en charge les environnements de plaine et hivernal ; il est prévu d’y ajouter ultérieurement les environnements désertique et pacifique. </p>
                    <p className="ml-4 mt-2 text-justify -indent-3"> • Une refonte complète de l’éditeur est planifiée : au lieu de naviguer hexagone par hexagone pour effectuer des modifications, il sera possible de sélectionner un ensemble d’éléments, puis de cliquer directement sur les hexagones à modifier.  </p>
                </div>
                {!isMobile && <div className="w-[70%] bg-black_grey rounded-[15px] lg:rounded-[30px] flex center relative p-8 ">
                    <img src={"/images/memoire44/memoire44_7.png"} alt="memoire 44" className="" />
                </div>}
            </div>
            <div className="w-full h-full flex flex-row gap-2 lg:gap-8 mb-[0.5rem] lg:mb-[2rem]">
                <div className="w-[30%] bg-blue_grey rounded-[15px] lg:rounded-[30px] flex center relative lg:p-2 ">
                    <img src={"/images/memoire44/memoire44_8.png"} alt="memoire 44" className="" />
                </div>
                <div className="w-[40%] bg-blue_dark rounded-[15px] lg:rounded-[30px] p-1 lg:p-4 flex flex-col relative text-3xs lg:text-base">
                    <p className="p-1 lg:p-4 text-xs lg:text-3xl font-mt-bold ">Les prochaines etapes :</p>
                    <p className="mt-1 lg:mt-2 font-mt-bold">- Nouvelle version de l'editeur graphique </p>
                    <p className="mt-1 lg:mt-2 font-mt-bold">- Gestion des campagnes : </p>
                    <p className="ml-2 lg:ml-6 mt-1 lg:mt-2 text-justify -indent-3 "> • Lorsqu’un clan remporte un scénario, il obtient la possibilité d’ajouter une unité supplémentaire lors de la prochaine bataille. Pour cela, il est nécessaire de gérer la modification temporaire d’un scénario ainsi que la sauvegarde de l’état d’un scénario en cours de partie.  </p>    
                    <p className="mt-1 lg:mt-2 font-mt-bold">- Implémentation des unités spéciales et Implémentation des leurs régles associées </p>
                    <p className="mt-1 lg:mt-2 font-mt-bold">- Implémentation de nouveaux scenarios </p>
                </div>
                <div className="w-[30%] bg-blue_grey rounded-[15px] lg:rounded-[30px] flex center relative lg:p-2 ">
                    <img src={"/images/memoire44/memoire44_9.png"} alt="memoire 44" className="" />
                </div>
            </div>
        </div>
    </div>
}
export default Memoire44Presentation

