
import { useEffect, useMemo, useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import Carousel from '../../composant/carousel/carousel.tsx';
import { Blogs } from './Data/Blog';
import { param } from 'motion/react-client';
import data from './Data/blogs.json'
const Blog = () =>{
    const params = useParams();
    const [margin,setMargin] = useState("my-2 sm:my-8");
    const [listItem,setListItem] = useState({
        titre:[],
        text:[],
        image:[],
        atlimage:[],
        textcolor:[],
        layout:[]});
    const [listItems,setListItems]= useState([])
    const [className, setClassname] = useState("")
    const size = "h-[100px] sm:h-[442px] "
    useEffect(() => {
        const blogs = data;
        console.log(data)
        if(params.BlogId){
            const blog = data.filter(item=>item._id.$oid === params.BlogId);
            console.log(blog[0])
            if(blog.length === 1){setListItem(blog[0])}
        }
    }, [params])
    

    


    function returnTextWithImage(titre,text,image,altimage,pos){
        if(pos === false){
            return <div className={`w-[90%] sm:w-[86%] h-fit ${margin}`}>
                {!!titre &&<div className={`w-full h-fit ${margin}`}><h1 className='text-left text-[20px] sm:text-[50px] text-blue_poskin font-mt-extra-bold'>{titre}</h1></div>}
                {(!!image || !!text) && <div className={`flex center w-full h-fit gap-2 sm:gap-8`}>
                    {!!image && <div className={`${text ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image} alt={altimage} className='w-fit h-full'></img></div>}
                    {!!text && <div className={`${image ? "w-2/3" : "w-full"} h-fit flex `}><div className='text-[8px] sm:text-[22px] text-justify'>{text}</div></div>}
                </div>}</div>
        }else{
            return <div className={`w-[90%] sm:w-[86%] h-fit ${margin}`}>
                {!!titre &&<div className={`w-full h-fit ${margin}`}><h1 className='text-left text-[12px] sm:text-[50px] text-blue_poskin font-mt-extra-bold'>{titre}</h1></div>}
                {(!!image ||!!text ) && <div className={`flex center w-full h-fit gap-2 sm:gap-8`}>
                {!!text && <div className={`${image ? "w-2/3" : "w-full"} h-fit flex`}><div className='text-[8px] sm:text-[20px] text-justify'>{text}</div></div>}
                {!!image && <div className={`${text ? "w-1/3" : "w-full"} h-fit flex center`}><img src={image} alt={altimage} className='w-fit h-full'></img></div>}
            </div>}
            </div>
        }
    }
    function returnFullImageWithTitre(titre,image,altimage,textcolor){
        return <>{!!image && <div className='relative w-full h-fit'>
            <img className='w-full h-fit max-h-[200px] sm:max-h-[600px]' src={image} alt={altimage}></img>
            {!!titre && <div className='absolute top-0 left-0 w-full h-full flex center'><p className={`w-[80%] ${textcolor ? textcolor : "text-white"} mt-2 text-[20px] sm:text-[50px] font-mt-extra-bold`}>{titre}</p></div>}
        </div>}</>
    }
    function returnFullImage(image,altimage){
        return <>{!!image && <div className='relative w-full h-fit '>
            <img className='w-full h-fit max-h-[200px] sm:max-h-[600px] ' src={image} alt={altimage}></img>
        </div>} </>
    }
    function returnImageWithTextDown(text,image,altimage){
        return <div className={`w-full h-fit ${margin}`}>
        {(!!image ||!!text ) && <div className={`flex center flex-col w-full h-full  gap-2 sm:gap-8`}>
            {!!image && <div className={`w-full h-fit flex center`}><img src={image} alt={altimage} className='w-full h-fit max-h-[200px] sm:max-h-[600px]'></img></div>}
            {!!text && <div className={`w-[90%] sm:w-[86%] h-fit flex center`}><div className='mx-auto text-[8px] sm:text-[20px] text-justify'>{text}</div></div>}
        </div>}
        </div>
    }
    function returnFullImageWithTitreAndTextDown(titre,text,image,altimage,textcolor){
        return <div className={`w-full h-fit ${margin}`}>
        {(!!image ||!!text ) && <div className={`flex center flex-col w-full h-full  gap-2 sm:gap-8`}>
            {!!image && <div className='relative w-full h-fit'>
            <img className='w-full h-fit max-h-[200px] sm:max-h-[600px]' src={image} alt={altimage}></img>
            {!!titre && <div className='absolute top-0 left-0 w-full h-full flex center'><p className={`w-[80%] ${textcolor ? textcolor : "text-white"} mt-2 text-[20px] sm:text-[50px] font-mt-extra-bold`}>{titre}</p></div>}
            </div>}
            {!!text && <div className={`w-[90%] sm:w-[86%] h-fit flex center`}><div className='mx-auto text-[8px] sm:text-[20px] text-justify'>{text}</div></div>}
        </div>}
        </div>

    }
    function switchLayout(layout,title,text,image,altimage,textcolor){
        if(title === "null"){ title = ""}
        if(text === "null"){ text = ""}
        if(image === "null"){ image = ""}
        if(altimage === "null"){ altimage = ""}
        if(textcolor === "null"){ textcolor = ""}
        switch(layout){
            case "IF":
                return returnFullImage(image,altimage);
            case "IFT":
                return returnFullImageWithTitre(title,image,altimage,textcolor);
            case "IFD":
                return returnImageWithTextDown(text,image,altimage);
            case "IFTD":
                return returnFullImageWithTitreAndTextDown(title,text,image,altimage,textcolor)
            case "TF":
                return returnTextWithImage(title,text,null,null,false);
            case "TL":
                return returnTextWithImage(title,text,image,altimage,false);
            case "TR":
                return returnTextWithImage(title,text,image,altimage,true);
            default:
                return <></>
        }
    }

    //Layout list : IF -> fullimage, IFT -> fullimage avec un titre, TF -> fulltext, TL -> layout avec text à gauche et image à droite, TR -> layout avec image à gauche et text à droite
    
    const items = useMemo(() => {
        let list = []
        if(!!Object.keys(listItem.layout).length){
            for(let i = 0;i< Object.keys(listItem.layout).length;i++){
                
                list.push(switchLayout(listItem.layout[i],listItem.titlelist[i],listItem.textlist[i],listItem.imagelist[i],listItem.altimage[i],listItem.textcolor[i]))
            
            }
        }
        return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listItem]);



    return (<div className="bg-[#EEE8E4] text-[#000000] relative h-full overflow-y-auto overflow-x-hidden custom-scrollbar" id={"Scrollref"}>
        <div className={`${className} w-full  flex center flex-col `}>
        {items}
        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        <div><h1 className="mt-[12px] sm:mt-[30px] text-[12px] sm:text-[50px] font-mt-extra-bold text-blue-poskin ">Articles connexes :</h1></div>
        <Carousel elems={Blogs()} nbShow={1} display={10} start={0} showPoint={true} tag={"blog"} hiddendiv={<div className={size}></div>} animatedDuration={600} darkPoint={true}/>

        <div className="relative w-full h-0.5 mt-[30px] bg-[#10264C4D]"></div>
        
    </div>
    </div>)
    
}
export default Blog;