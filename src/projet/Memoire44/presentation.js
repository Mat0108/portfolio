const Memoire44Presentation = ()=>{
    return <div className="flex flex-col h-full bg-black_darked p-8 gap-8 overflow-auto">
        <div className="w-full flex gap-4">
            <div className="w-[40%] h-full bg-blue_dark rounded-[30px] p-4 flex flex-col center relative">
                <p className="absolute top-0 w-full p-4 text-xl font-mt-bold">Memoire 44</p>
                <p className="mt-2 text-justify ">Lorsque le jeu vidéo officiel est devenu indisponible, j'ai souhaité développer ma propre version. </p>
                <p className="mt-2 text-justify ">Après un an de développement, j'ai réalisé des avancées significatives dans plusieurs domaines clés : gestion du plateau de jeu ainsi que des unités de base, mise en place d'un algorithme de pathfinding, intégration de plusieurs scénarios, et création d'un outil graphique pour l'ajout de scénarios. </p>
                <p className="mt-2 text-justify ">Les prochaines étapes incluent l'intégration des environnements hivernaux et désertiques, l'ajout d'unités spéciales, et une meilleure gestion des cartes de commandement. </p>
            </div>
            <div className="w-[60%] bg-light_gray rounded-[30px] flex center relative">
                <img src={"/images/memoire44/memoire44_3.png"} alt="memoire 44" className="w-1/2 mb-2" />
                <div className="absolute bottom-0 text-true_white text-lg font-mt-bold">Le jeu dans sa version plateau</div>
            </div>
        </div>
        <div className="w-full h-fit relative flex flex-col bg-dark_green p-4 rounded-[30px] ">
            <p className="text-xl font-mt-bold mb-2"> Comment s'est realisé le developpement ? </p>
            <div className="w-full h-full flex flex-row gap-4">
                <div className="w-[30%] h-full bg-blue_dark rounded-[30px] p-4 flex flex-col relative">
                    <p className=" p-4 text-xl font-mt-bold ">Etape 1</p>
                    <p className="mt-4 ">- génération du plateau de jeu à travers l'ajout des unités (soltat, tank, artillerie ), ajout des différents types de tuiles (forets, villages, collines ...)  </p>
                    <p className="mt-4 ">- Intégration de la phase de deplacement d'une unité :  </p>
                    <p className="ml-2 text-justify"> • Calcul du coût de déplacement avec un dégradé de vert indiquant les possibilités d’attaque après le déplacement. </p>
                    <p className="ml-2 mt-1 text-justify"> • Mise en place d’un système de pathfinding respectant les règles du jeu (par exemple, une unité ne peut pas monter et descendre une colline dans le même tour).</p>
                    <p className="mt-4 ">- Intégration de la phase d'attaque :</p>
                    <p className="ml-2"> • Détermination de la ligne de mire selon les règles du jeu.</p>
                    <p className="ml-2"> • Calcul du nombre de dés à lancer en fonction de la distance, de la position (ex. : ennemi dans une foret), etc..
                    </p>
                </div>
                <div className="w-[70%] h-full bg-light_gray rounded-[30px] flex center relative ">
                    <img src={"/images/memoire44/memoire44_4.png"} alt="memoire 44" className="w-4/5" />
                </div>
            </div>
        </div>
    </div>
}
export default Memoire44Presentation