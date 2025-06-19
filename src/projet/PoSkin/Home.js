
import LayoutFullImage from './components/LayoutFullImage';
import Layout1image from './components/Layout1image';
import Layout2image from './components/Layout2image';

import {switchtext} from './components/textdivers';

import { Link, useNavigate, useParams,useLocation  } from 'react-router-dom';
import { useContext, useEffect, useMemo, useState } from 'react';

import { toast } from 'react-toastify';
// import { useCookies } from 'react-cookie';
import { LanguageContext } from '../../languages';
import Valeurs from './Valeurs';
import { Blogs } from './Data/Blog';
import Carousel from '../../composant/carousel/carousel.tsx';
import Switch from '../../composant/button/switch.tsx';
import Navbar from './navbar.js';
const PoSkinHome = (props)=>{
    
    const { dictionnaire } = useContext(LanguageContext);
    // const [cookies, setCookies] = useCookies(["user"]);
    const [itemList,setItemList]= useState(Blogs());
    const params = useParams()
    const navigate = useNavigate();
    const location = useLocation();
    const size = "h-[100px] sm:h-[442px] "
    const [connected, setConnected] = useState(false)

    const BlogCarousel = useMemo(() =>
    { 
        return <Carousel elems={Blogs()} nbShow={1} display={10} start={0} showPoint={true} tag={"blog"} hiddendiv={<div className={size}></div>} animatedDuration={600} darkPoint={true}/>

    }, [itemList])

    function itemCarousel(image,altimage,title,text,url){
        return (<>
            <div className="relative w-full h-fit mt-[10px] flex center" key={url}>
                <Link to={url}>
                    <div className="mt-[20px] w-full flex center h-[100px] sm:h-[250px]"> <img src={image}  alt={altimage} className='h-[100px] sm:h-[250px] w-fit'/></div>  
                    <div className="h-[130px] sm:h-[160px] flex center flex-col mt-[2px]">
                        <p className="w-[90%] sm:w-[70%] mt-[6px] sm:mt-[20px] text-[8px] sm:text-[16px] font-mt-extra-bold text-blue_poskin">{title}</p>    
                        <p className="w-[90%] sm:w-[70%] text-[8px] sm:text-[16px] mt-[5px] text-justify ">{text}</p>
                       </div>
                </Link>
            </div>
            </>)

    }

    
    let buttondiv = <div className="absolute z-[100] top-0 left-0 w-full h-full flex flex-col center ">
        <div className='mt-[20%] w-fit h-fit p-2 text-white_coffee text-[12px] sm:text-[40px] flex center'> {dictionnaire.Home.key1}</div>
        <Link to="/PoSkin/Diagnostic" className="mt-[10px] w-fit h-fit p-2 text-white_coffee text-[12px] sm:text-[40px] font-mt-extra-bold py-2 px-6 bg-blue_poskin rounded-3xl" >{dictionnaire.Home.key2}</Link>
    </div>
    
    return (<div className='relative w-full h-full'>
        <div className=' w-full flex gap-4 center '>
            <Navbar />
        </div>
        <div className="relative bg-[#EEE8E4] text-[#000000] relative h-full overflow-y-auto overflow-x-hidden custom-scrollbar" id={"Scrollref"}>
        
        <LayoutFullImage props={{titre:dictionnaire.Home.Title,button:buttondiv,image1:{url:"/images/PoSkin/visage/fullvisage.webp",alt:"fullvisage"}}}/>
        <Layout1image props={{col1:switchtext("presentation",props.scroll),image1:{url:"/images/PoSkin/visage/visage2.webp",alt:"visage2"}}} />
        <Layout2image props={{col1:switchtext("apropos"),col2:switchtext("apropos2"),image1:{url:"/images/PoSkin/visage/visage7.webp",alt:"visage7"},image2:{url:"/images/PoSkin/visage/visage8.webp",alt:"visage8"}}} />
        <div><p className="mt-[30px] text-[12px] sm:text-[60px] text-center font-mt-bold text-blue_poskin ">{dictionnaire.Home.Conseil} </p></div>
        {BlogCarousel}
        <div className='mt-[20px]'></div>
        <Valeurs/>
       </div></div>)
}

export default PoSkinHome