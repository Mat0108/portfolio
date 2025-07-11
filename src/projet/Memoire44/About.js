import { Link } from "react-router-dom"

const About = ()=>{
    return <div className="w-full h-full px-[10%] flex flex-col gap-4 center text-[18px] text-white text-justify relative">
        
        <div className="absolute top-2 left-1"><Link to={`/Memoire44/play`} className="w-fit h-fit  py-1 px-3 rounded-full text-white bg-green text-3xl text-center">{"←"}</Link> </div>
        <p className="text-[26px] pt-4 font-mt-bold text-white_blue">Mémoire 44 Fan Game - Avis de non-propriété</p>

        <p>Ce fan game basé sur le jeu de société "Mémoire 44" de Days of Wonder. Il est important de noter que ce projet est entièrement non officiel et n'est pas approuvé ni soutenu par Days of Wonder, l'éditeur du jeu "Mémoire 44". Je tiens à souligner que je n'ai aucun droit ni aucune autorisation pour utiliser la propriété intellectuelle de "Mémoire 44" dans ce fan game.
        </p>
        <p className="text-[26px] pt-4 font-mt-bold text-white_blue">Objectif du projet
        </p>
        <p>Le but de ce projet n'est en aucun cas de distribuer, partager ou commercialiser le fan game basé sur "Mémoire 44". Il a été créé à des fins de loisir personnel et de passion pour le jeu "Mémoire 44". Je ne gagne aucun revenu ni bénéfice financier en rapport avec ce projet, et je ne permets pas sa distribution publique ou sa monétisation.
        </p>
        <p className="text-[26px] pt-4 font-mt-bold text-white_blue"> Respect des droits d'auteur
        </p>
        <p>Je respecte pleinement les droits d'auteur de Days of Wonder et de tout autre détenteur de droits sur "Mémoire 44". Si vous êtes le titulaire des droits de "Mémoire 44" ou un représentant de Days of Wonder et que vous souhaitez que ce fan game soit retiré ou modifié de quelque manière que ce soit, veuillez me contacter directement à matthieubarnab@gmail.com.
        </p>
        <p className="text-[26px] pt-4 font-mt-bold text-white_blue"> Utilisation personnelle
        </p>
        <p >Ce fan game est destiné uniquement à un usage personnel, privé et non commercial. Il ne doit pas être partagé publiquement, vendu, ni utilisé à des fins commerciales. Il ne doit pas non plus être présenté comme une création officielle de Days of Wonder ou être associé de quelque manière que ce soit à la marque "Mémoire 44".
        </p>
        <p className="text-[26px] pt-4 font-mt-bold text-white_blue"> Avertissement
        </p>
        <p>L'utilisation de ce fan game est entièrement à vos propres risques. Je ne prends aucune responsabilité quant à son utilisation, à d'éventuelles violations de droits d'auteur ou à des problèmes liés à son utilisation. Assurez-vous de respecter les lois sur les droits d'auteur et les droits de propriété intellectuelle de Days of Wonder et de toute autre partie concernée.
        </p>
        
    </div>
}
export default About