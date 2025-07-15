import { Link } from "react-router-dom";
import { EllisCar, Randstad, Veolia4, Veolia6 } from "./composant/work.js";
import Carousel from "./composant/carousel/carousel.tsx";
import { Compétence } from "./composant/competence.js";
import Projet from "./composant/projet.js";
type HomeType = {
    workRef: React.RefObject<HTMLDivElement>;
    projetRef: React.RefObject<HTMLDivElement>;
    techRef:React.RefObject<HTMLDivElement>;
    scrollRef:React.RefObject<HTMLDivElement>;

}
const Home = ({workRef,projetRef,techRef,scrollRef}:HomeType) => {


    const isMobile = window.screen.width < 600;
    return <div className="relative bg-blue_dark relative h-full overflow-y overflow-x-hidden " ref={scrollRef}>
        <div>

            {/* main */}
            <div className="w-full h-full flex flex-row bg-dark-blue">

                <div className="w-1/2 flex flex-col gap-2 center text-lg lg:text-6xl text-white font-mt-bold">
                    <div className="mt-10 lg:mt-0 ml-[5%] w-[90%] sm:w-[80%] flex"><p className="w-1/2 text-left">Frontend</p></div>
                    <div className="ml-[5%] w-[90%] sm:w-[80%] flex -mt-2 lg:-mt-8"><p className="w-1/2">Developper</p></div>
                    <p className={`ml-[5%] w-[90%] sm:w-[80%] text-3xs lg:text-lg font-mt ${false ? 'text-left':'text-justify'}`}>Développeur Frontend React avec 2 ans d'expérience en alternance, je transforme les besoins utilisateurs en interfaces intuitives et performantes. Chez Randstad et Ellis Car, j'ai livré des fonctionnalités clés, du matching de compétences à la refonte graphique, toujours avec un focus sur l'impact métier et l'expérience utilisateur. Mes projets personnels, comme la digitalisation de 'Mémoire 44', démontrent ma capacité à innover et à concrétiser des idées.</p>
                    
                    <div className="ml-[5%] w-[90%] sm:w-[70%] flex mt-4">
                        <Link to="/contact" className="text-sm lg:text-lg font-mt px-2 lg:px-8 py-1 lg:py-4 rounded-2xl bg-brown_dark text-white border-2 border-blue_dark hover:text-blue hover:border-blue hover:cursor-pointer mb-4">Prendre contract</Link>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col  gap-2 center text-white">  
                    <div className="w-[80%] h-[80%] flex center">
                        <img src="/images/me.webp" alt="me" className="lg:h-full rounded-[2rem] lg:rounded-[4rem]"/>    
                    </div>  
                </div>
                </div>
                {/* me */}
                <div className="relative text-white">
                    <img src={"/images/background1.webp"} alt={"starsky"} className="w-full h-[120px] lg:h-[75%] z-0"/>
                    <div className="absolute top-1 lg:top-1/3 left-5 lg:left-20 w-3/5 lg:w-1/2 lg:h-[300px] z-10 ">
                        <p className="text-lg lg:text-2xl font-mt-bold">Matthieu Barnabé</p>
                        <p className="text-3xs md:text-md lg:text-base test-justify mt-2 lg:mt-10 font-mt-bold-italic">Développeur frontend React avec 2 ans d’alternance et plusieurs stages. Passionné par l'informatique depuis mon plus jeune âge, j’ai mené des projets ambitieux, dont la digitalisation d’un jeu de société. Solide en React, TypeScript et JS, je maîtrise tout le cycle de développement front, de la compréhension des besoins au déploiement.</p>           
                        
                    </div>
                    <div className="absolute bottom-2 right-5 text-center text-3xs lg:text-base">
                    <p>Ciel étoilé de la Corse du Sud </p>
                    <p>Photographies réalisées et assemblées par mes soins.</p>  
                    </div>
                </div>
                {/* expérience  */}
                <div className="w-full h-fit flex center bg-black_grey p-2" ref={workRef}>
                    <div className="w-full flex flex-col">
                        <p className="ml-[5%] text-base lg:text-4xl font-mt-bold" >Mes dernières expériences professionnelles</p>
                            <Carousel elems={[Randstad(),EllisCar(),Veolia6(),Veolia4()]} nbShow={1} display={5} showPoint={true} start={0} tag={"work"} hiddendiv={<div className="w-4 h-[235px] lg:h-[430px]"></div>} animatedDuration={800}/>  
                    </div>
                </div>

                <div className="w-full h-fit flex bg-blue_dark p-2" ref={projetRef}>
                    <div className="w-full flex flex-col">
                            <p className="ml-[5%] text-base lg:text-4xl font-mt-bold" >Mes projets</p>
                            <Projet />
                    </div>
                </div>
                <div className="w-full h-fit flex bg-black_grey p-2" ref={techRef}>
                    <div className="w-full flex flex-col lg:p-2">
                            <p className="ml-[5%] text-base lg:text-4xl font-mt-bold" >Les compétences à l'oeuvre dans mes expériences </p>
                            <div className="w-full h-fit pt-4">
                                <Compétence />
                            </div>
                            {/* <ExpandingGrid /> */}
                    </div>
                </div>
        </div>
    </div>
}
export default Home;