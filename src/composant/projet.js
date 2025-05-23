
import Carousel from "./carousel/carousel.tsx"
import { Memoire44Card, PortfolioCard, PoSkinCard, SpaceXCard } from "./competence";
const size = " w-[90vw] lg:w-[calc(50vw - 110px)] 2xl:w-[calc(50vw - 110px)]] h-[180px] lg:h-[290px]"


const Projet = ()=>{
    const isMobile = window.screen.width < 600;
    return <Carousel elems={[Memoire44Card("projet-0",size),PoSkinCard("projet-1",size),SpaceXCard("projet-2",size),PortfolioCard("projet-3",size)]} nbShow={isMobile ? 1 : 2} display={5} start={0} showPoint={true} tag={"projet"} hiddendiv={<div className={size}></div>} animatedDuration={600}/>
}   
export default Projet;