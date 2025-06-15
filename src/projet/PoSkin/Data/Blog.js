import { Link } from "react-router-dom"
import data from './blogs.json'
    function itemCarousel(image,altimage,title,text,url,tag,id){
        return (
            <div className={`${tag} w-[90vw] h-[442px] relative mt-[10px] flex center`} key={id} >
                <Link to={url}>
                    <div className="mt-[20px] w-full flex center h-[100px] sm:h-[250px]"> <img src={image}  alt={altimage} className='h-[100px] sm:h-[250px] w-fit'/></div>  
                    <div className="h-[130px] sm:h-[160px] flex center flex-col mt-[2px]">
                        <p className="w-[90%]  mt-[6px] sm:mt-[20px] text-[8px] sm:text-[16px] font-mt-extra-bold text-blue_poskin">{title}</p>    
                        <p className="w-[90%] text-[8px] sm:text-[16px] mt-[5px] text-justify ">{text}</p>
                       </div>
                </Link>
            </div>
            )

    }
export const Blogs = ()=>{
    return data.map((item,pos) => itemCarousel(item.imagepresentation,item.altimagepresentation,item.title,item.textpresentation,`/PoSkin/Blog/${item._id.$oid}`,`Blog-${pos}`,item._id.$oid))
}