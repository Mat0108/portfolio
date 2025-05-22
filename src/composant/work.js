
const isMobile = window.screen.width < 600;
export function Randstad(){

    return  <div key="work-0" className="work-0 w-[calc(100vw-48px)] lg:w-[calc(100vw-188px)] h-[220px] lg:h-[414px] relative mt-4 bg-blue_dark rounded-[30px] p-6">
        <div className="flex justify-between  ">
            <p className="font-mt-bold text-xs lg:text-md w-[70%] lg:w-fit">Développeur full stack dans le service Mobilité</p>
            <p className="font-mt-demi text-xxs lg:text-lg text-white_blue  w-fit">nov. 2023 - sept. 2024 </p>
        </div>
        <div className="flex justify-between text-xxs lg:text-md">
            <p className="font-mt-bold ">Randstad</p>
            <p className="font-mt-demi text-white_blue">Paris </p>
        </div>
        <div className="flex flex-col mt-2 lg:mt-4 w-[90%] lg:w-[70%] text-justify text-xxs lg:text-base">
            <p>Le service Mobilité de Randstad développe des solutions qui permettent aux collaborateurs de travailler à distance</p>
            <p className="mt-2">J’ai développé plusieurs fonctionnalités du spring backlog dans ces applications, notamment :  </p> 
            <p>- Une fonctionnalité <span className="font-mt-bold text-white_blue">« matching de compétences »</span>  permettant de mettre en correspondance les compétences d’un intérimaire avec les offres d’emploi disponibles. </p>
            {isMobile ? <p></p>
             :<p className="mt-1">cette fonctionnaltié consiste principalement en un traitement api des compétences d'un intérimaire pour en extraire les skills correspondant et ainsi optenir un certain nombre d'offre ayant un pourcentage de comptabilité élevé. Exemple : Un  chef de chantier pourrai avoir certains skills requis pour effectuer un travail d'electricien, mais d'aurai pas eu sans ce traitement, l'offre proposé sur son acces informatique </p>}
            <p className="mt-1 lg:mt-4">- <span className="font-mt-bold text-white_blue"> refonte graphique</span> de l’affichage des offres d’emploi pour l'harmoniser avec la nouvelle charte graphique du groupe. </p>
            <p className="mt-1 lg:mt-2">- <span className="font-mt-bold text-white_blue">développement d’un nouveau composant </span> dans la bibliothèque interne de l’équipe permettant la saisie de différents formats de polices de caractères.  Cette fonctionnalité passe par l'ajout du framework <span className="font-mt-bold text-white_blue">Lexical</span> ainsi que la personalisation de l'editeur de text pour répondre au design prévu. </p>
        </div>
        <div className="absolute right-1 lg:right-10 top-0 h-full flex center">
            <img src={"/images/randstad.png"} alt={"randstad"} className="w-10 lg:w-25"/>
        </div>
        <div className="absolute right-0 w-[50px] lg:w-fit bottom-0 flex flex-wrap justify-evenly p-2 lg:p-4 gap-2 lg:gap-4">
            <img src="/images/tech/r.png" alt="logo_react" className="w-3 lg:w-8"/>
            <img src="/images/tech/t.png" alt="logo_typescript" className="w-3 lg:w-8"/>
            <img src="/images/tech/ne.png" alt="logo_nestjs" className="w-3 lg:w-8"/>
            <img src="/images/tech/md.png" alt="logo_mongodb" className="w-3 lg:w-8"/>
            <img src="/images/tech/d.png" alt="logo_docker" className="w-3 lg:w-8"/>
            
            
            
        
        </div>
    </div>

}
export function EllisCar(){
    return <div key="work-1" className="work-1 w-[calc(100vw-48px)] lg:w-[calc(100vw-188px)] h-[220px] lg:h-[414px] relative mt-4 bg-blue_dark rounded-[30px] p-6  ">
        <div className="flex justify-between ">
            <p className="font-mt-bold text-xs lg:text-lg">Développeur full stack</p>
            <p className="font-mt-demi text-xxs lg:text-lg">sept. 2022 - sept. 2023 </p>
        </div>
        <div className="flex justify-between text-xxxs lg:text-md">
            <p className="font-mt-bold ">Startup EllisCar</p>
            <p className="font-mt-demi text-white_blue">Paris </p>
        </div>
        <div className="flex flex-col mt-4 w-[90%] lg:w-[70%] text-justify text-xxs lg:text-base">
            <p>Ellis car est une startup composé de 5 personnes proposant une solution de gestion de flotte de voitures. </p>
            
            <p className="mt-2">J’ai effectué le développement de plusieurs pages entières :</p> 
            <p>page équipe présentant <span className="font-mt-bold text-white_blue" >une arborescence </span> avec des composants personnalisés pour l’affichages des équipes ainsi que de chaque conducteur.  </p>
            <p className="mt-4">page data correspondant à <span className="font-mt-bold text-white_blue">un tableau de données</span> avec plusieurs choix de temporalité ainsi que d’agrégation.  </p>
            <p className="mt-2">une page <span className="font-mt-bold text-white_blue"> « conducteur » et une page « véhicule » </span> : chacune permettant d’avoir des informations permettant d’associer un conducteur à un véhicule (et inversement). </p>
        </div>
        <div className="absolute right-1 lg:right-10 top-0 h-full flex center">
            <img src={"/images/elliscar.png"} alt={"elliscar"} className="w-10 lg:w-25" />
        </div>
        <div className="absolute right-0 w-[50px] lg:w-fit bottom-0 flex flex-wrap justify-evenly p-2 lg:p-4 gap-2 lg:gap-4">
            <img src="/images/tech/r.png" alt="logo_react" className="w-3 lg:w-8"/>
            <img src="/images/tech/ta.png" alt="logo_tailwind" className="w-3 lg:w-8"/>
            <img src="/images/tech/t.png" alt="logo_typescript" className="w-3 lg:w-8"/>
            <img src="/images/tech/ne.png" alt="logo_nestjs" className="w-3 lg:w-8"/>
            <img src="/images/tech/md.png" alt="logo_mongodb" className="w-3 lg:w-8"/>
            <img src="/images/tech/d.png" alt="logo_docker" className="w-3 lg:w-8"/>    
        </div>
    </div>
}

export function Veolia6(){
    return <div key="work-2" className="work-2 w-[calc(100vw-48px)] lg:w-[calc(100vw-188px)] h-[220px] lg:h-[414px] relative mt-4 bg-blue_dark rounded-[30px] p-6  ">
        <div className="flex justify-between  ">
            <p className="font-mt-bold text-xs lg:text-lg">Stage de 6 mois dans l’équipe Digital Factory</p>
            <p className="font-mt-demi text-xxs lg:text-lg text-white_blue">mars. 2022 - aout. 2022 </p>
        </div>
        <div className="flex justify-between text-xxxs lg:text-md">
            <p className="font-mt-bold">Veolia</p>
            <p className="font-mt-demi text-white_blue">Paris </p>
        </div>
        <div className="flex flex-col mt-4 w-[90%] lg:w-[70%] text-justify text-xxs lg:text-base">
            <p >J'ai participé au développement des solutions <span className="font-mt-bold text-white_blue"> EdgetoCloud </span> ainsi que de la <span className="font-mt-bold text-white_blue">TimeSeriesEngine </span>, en réalisant les tâches prévues par le spring backlog. </p>
            <p className="mt-2">La solution <span className="font-mt-bold text-white_blue">Edge to Cloud</span> est un logiciel installé automatiquement dans une usine ou dans un bâtiment pour extraire les données d'automates, de systèmes Scada, de BMS, ... afin de les envoyer dans le cloud de manière sécurisée </p>
            <p>J'ai effectué différents modifications dont la corrections des filtres, refonte graphique ainsi que correction d'un bug lié au Lambda metrics d'AWS </p>
            <p className="mt-4">Le produit <span className="font-mt-bold text-white_blue">TimeSerie Engine </span> est un service composé d’un moteur de calcul ayant plus de 12 traitements dont traitement pour pas de temps fixe, traitement pour pas de temps flexible, validation des valeurs sur intervalle, interpolation des valeurs manquantes,
                calcul du gradient, calcul de l'intégrale</p>
            <p>Sur cette solution, j'ai effectué des corrections de traductions ainsi qu'une migration vers un nouvelle module de traduction Transloco, correction de la pipeline ainsi que quelque corrections mineurs de l'onglet TimeSerie </p>
           
        </div>
        <div className="absolute right-1 lg:right-10 top-0 h-full flex center">
            <img src={"/images/veolia.png"} alt={"veolia"} className="w-10 lg:w-25"/>
        </div>
        <div className="absolute right-0 w-[50px] lg:w-fit bottom-0 flex flex-wrap justify-evenly p-2 lg:p-4 gap-2 lg:gap-4">
            <img src="/images/tech/a.png" alt="logo_angular" className="w-3 lg:w-8"/>
            <img src="/images/tech/j.png" alt="logo_javascript" className="w-3 lg:w-8"/>         
        </div>
    </div>
}

export function Veolia4(){
    return <div key="work-3" className="work-3 w-[calc(100vw-48px)] lg:w-[calc(100vw-188px)] h-[220px] lg:h-[414px] relative mt-4 bg-blue_dark rounded-[30px] p-6  ">
        <div className="flex justify-between ">
            <p className="font-mt-bold text-xs lg:text-lg">Stage de 4 mois dans l’équipe Digital Factory</p>
            <p className="font-mt-demi text-xxs lg:text-lg text-white_blue">mars. 2021 - juin. 2021 </p>
        </div>
        <div className="flex justify-between text-xxxs lg:text-md">
            <p className="font-mt-bold ">Veolia</p>
            <p className="font-mt-demi text-white_blue">Paris </p>
        </div>
        <div className="flex flex-col mt-2 lg:mt-4 w-[90%] lg:w-[70%] text-justify text-xxs lg:text-base">
            <p>Participation au développement de la solution <span className="font-mt-bold text-white_blue">EdgetoCloud</span>, principalement par la réalisant des taches sur le monitoring des services d'AWS, la récupération de leurs états ainsi que les envois par le service AWS CloudWatch pour le monitoring </p>
            <p className="mt-2">La solution <span className="font-mt-bold text-white_blue">Edge to Cloud</span> est un logiciel installé automatiquement dans une usine ou dans un bâtiment pour extraire les données d'automates, de systèmes Scada, de BMS, ... afin de les envoyer dans le cloud de manière sécurisée </p>
            <p>J'ai effectué différents modifications dont la corrections des filtres, refonte graphique ainsi que correction d'un bug lié au Lambda metrics d'AWS </p>
        </div>
        <div className="absolute right-1 lg:right-10 top-0 h-full flex center">
            <img src={"/images/veolia.png"} alt={"veolia"} className="w-10 lg-w-25"/>
        </div>
        <div className="absolute right-0 w-[50px] lg:w-fit bottom-0 flex flex-wrap justify-evenly p-2 lg:p-4 gap-2 lg:gap-4">
            <img src="/images/tech/a.png" alt="logo_angular" className="w-3 lg:w-8"/>
            <img src="/images/tech/j.png" alt="logo_javascript" className="w-3 lg:w-8"/>         
        </div>
    </div>
}