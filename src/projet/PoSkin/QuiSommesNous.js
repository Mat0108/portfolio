import Carousel from "../../composant/carousel/carousel.tsx"
import Layout1imageinv from "./components/Layout1imageinv"
import LayoutFullImage from "./components/LayoutFullImage"
import { switchtext } from "./components/textdivers"
import Layout2col from './components/Layout2col';
import Navbar from "./navbar.js";

const QuiSommesNous = () =>{
    function Item(props){
        return (
        <div className={`${props.tag} w-full sm:w-[80vw] flex flex-row`}>
            <div className="w-2/3 sm:w-[343px] h-full bg-white rounded-l-2xl">
              <p className="text-[15px] sm:text-[30px] mt-2 sm:mt-[20px]">{props.titre}</p>
              <p className="text-[7px] sm:text-[12px] mx-auto mt-2 sm:mt-[20px] mb-[5px] w-[90%] text-justify">{props.text}</p>
            </div>
            <div className="w-1/3 sm:w-[343px] sm:h-[300px] bg-white flex center rounded-r-2xl">

              <img src={props.image.src} alt={props.image.alt} />
            </div>
        </div>
        )
    }
    const itemCarousel=[
        Item({tag:"QSN-0",titre:"Marie du pont",text:"Je suis totalement bluffé par l'efficacité de Po. En suivant leurs conseils, ma peau a retrouvé son éclat naturel et mes problèmes de peau ont disparu. J'adore l'approche personnalisée de Po, qui s'adapte parfaitement à mes besoins.. ",image:{src:"/images/PoSkin/SkinCare1.png",alt:"skincare"}}),
        Item({tag:"QSN-1",titre:"Marie ",text:"Après avoir utilisé l'application de solution de soin de peau, je suis impressionné par les résultats obtenus. Ma peau est plus claire, plus lisse et plus radieuse. Les problèmes cutanés que je rencontrais auparavant, tels que l'acné et les rougeurs, se sont considérablement atténués. Je me sens tellement plus confiante et à l'aise dans ma peau.",image:{src:"/images/PoSkin/visage/visage24.png",alt:"v24"}}),
        Item({tag:"QSN-2",titre:"Matthieu",text:"En tant qu'homme, j'ai toujours été un peu réticent à l'idée d'utiliser des produits de soin de peau. Cependant, après avoir essayé votre solution de soin de peau, je suis agréablement surpris par les résultats. Ma peau est devenue plus nette, plus lisse et plus saine. Je remarque également une diminution des irritations et des imperfections. ",image:{src:"/images/PoSkin/visage/visage25.png",alt:"v25"}})
    
    ]
    return (<div className="relative bg-true_white ">
      <div className='w-full flex gap-4 center '>
            <Navbar />
        </div>
        <div className="bg-[#EEE8E4] text-[#000000] relative h-screen overflow-y-auto overflow-x-hidden custom-scrollbar" id={"Scrollref"}>
    <LayoutFullImage props={{titre:"QUI SOMMES NOUS ?",image1:{url:"/images/PoSkin/quisommesnous.png",alt:"quisommenous"}}}/>
    <Layout1imageinv props={{col1:switchtext("quisommesnous"),image1:{url:"/images/PoSkin/visage/visage9.png",alt:"visage9"}}} />
    <div className="w-full">
        <img src={"/images/PoSkin/visage/visage10.png"} alt={"visage10"} className="w-full"/>
    </div>
    <Layout2col props={{titre:switchtext("quisommesnous2"),col1:switchtext("quisommesnous3"),image1:{url:"/images/PoSkin/visage/visage11.png",alt:"visage11",className:"mt-[60px]"},col2:switchtext("quisommesnous4"),image2:{url:"/images/PoSkin/visage/visage12.png",alt:"visage12",className:"mt-[60px]"}}}/>
    <div className="w-full text-center"><p className="mt-[30px] mb-[10px] text-[50px] font-mt-extra-bold text-blue ">Témoignages</p></div>
    <Carousel elems={itemCarousel} nbShow={1} display={20} showPoint={true} animatedDuration={600} darkPoint={true} tag="QSN" start={0} key={"qsn"} />
    <div className="mb-[80px] w-full h-2"></div>
    </div>
    </div>)
}

export default QuiSommesNous