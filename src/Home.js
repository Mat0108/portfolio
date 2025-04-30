import { Link } from "react-router-dom";
import { EllisCar, Randstad, Veolia4, Veolia6 } from "./work";
import Carousel2 from "./composant/carousel/carousel";
import Carousel from "./composant/carousel/carousel";
import { ReactCard } from "./competence";
import { ExempleGrid } from "./grid/grid.tsx";
import ExpandingGrid from "./grid/grid2.tsx";

const Home = () => {

    
    return <div>
        <div className="w-full h-full flex flex-row bg-dark-blue">
            {/* main */}
            <div className="w-1/2 flex flex-col gap-2 center text-6xl text-white font-mt-bold">
                <div className="w-[70%] flex"><p className="w-1/2 text-left">Frontend</p></div>
                <div className="w-[70%] flex -mt-8"><p className="w-[440px]">Developper</p></div>
                <p className="w-[70%] text-lg font-mt ">Créer des expériences web esthétiques et fonctionnelles à l'aide de technologies modernes.</p>
                <div className="w-[70%] flex mt-4">
                    <Link to="/contact" className="text-lg font-mt px-8 py-4 rounded-2xl bg-blue_light">Get in touch</Link>
                </div>
            </div>
            <div className="w-1/2 flex flex-col  gap-2 center text-white">  
                <div className="w-[80%] h-[80%]">
                    <img src="/images/me.jpg" alt="me" className="h-full rounded-[4rem]"/>    
                </div>  
            </div>
            </div>
            {/* me */}
            <div className="relative text-white">
                <img src={"/images/background1.jpg"} alt={"starsky"} className="w-full h-[75%] z-0"/>
                <div className="absolute top-1/4 left-20 w-1/2 h-[300px] z-10 ">
                    <p className="text-2xl font-mt-bold">Matthieu Barnabé</p>
                    <p className="test-justify mt-10 font-mt-bold-italic">Développeur frontend React avec 2 ans d’alternance et plusieurs stages. Passionné depuis mon plus jeune âge, j’ai mené des projets ambitieux, dont la digitalisation d’un jeu de société. Solide en React, TypeScript et JS, je maîtrise tout le cycle de développement front, de la compréhension des besoins au déploiement.</p>           
                    
                </div>
                <div className="absolute bottom-2 right-10 text-center">
                <p>Ciel étoilé de la Corse du Sud </p>
                <p>Photographies réalisées et assemblées par mes soins.</p>  
                </div>
            </div>
            {/* expérience  */}
            <div className="w-full h-fit flex center bg-black_grey p-2">
                <div className="w-full flex flex-col">
                    <p className="ml-[5%] text-[36px] font-mt-bold" >Derniere expériences professionnelles</p>
                        <Carousel props={{items:[Randstad(),EllisCar(),Veolia6(),Veolia4()],nbShow:1,ratio:5,showPoint:true,start:0,tag:"work",hiddendiv:<div className="w-4 h-[414px]"></div>,animatedDuration:800}}/>  
                </div>
            </div>

            <div className="w-full h-[500px] flex bg-blue_dark p-2">
                <div className="w-full flex flex-col">
                        <p className="ml-[5%] text-[36px] font-mt-bold" >Projet</p>
                        
                </div>
            </div>
            <div className="w-full h-[1000px] flex bg-black_grey p-2">
                <div className="w-full flex flex-col">
                        <p className="ml-[5%] text-[36px] font-mt-bold" >Compétences</p>
                        <div className="w-full h-fit">
                            <ReactCard />
                        </div>
                        {/* <ExpandingGrid /> */}
                </div>
            </div>
    </div>
}
export default Home;