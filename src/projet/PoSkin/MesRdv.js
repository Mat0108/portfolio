import { useContext, useEffect, useMemo, useState } from "react";
import { useMatch, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { DateFormat, Heure } from './../../composant/dateUtils';
import { LanguageContext } from "../../languages";
import Carousel from "../../composant/carousel/carousel.tsx";
import data from './Data/rdvs.json'
import Navbar from "./navbar";
const MesRdv = ()=>{
    
    const isMobile = window.screen.width < 600
    const { dictionnaire } = useContext(LanguageContext);
    const [listRdvAvant,setListRdvAvant] = useState([]);
    const [listRdvApres,setListRdvApres] = useState([]);
    const [showRdv,setShowRdv] = useState(0)

    const navigate = useNavigate();
    useEffect(() => {
      const fetchData = async ()=>{
            setListRdvAvant(data.filter(rdv => new Date(rdv.DateDebut.$date) < new Date()).sort((a, b) => new Date(a.DateDebut.$date).getTime() - new Date(b.DateDebut.$date).getTime()));
            setListRdvApres(data.filter(rdv => new Date(rdv.DateDebut.$date) >= new Date()).sort((a, b) => new Date(a.DateDebut.$date).getTime() - new Date(b.DateDebut.$date).getTime()));   
      }
      fetchData();
    }, [])
    
    const Element = useMemo(()=>{
        
    function Recap(item,tag){
        return <div className={`${tag} w-[50vw] flex flex-col w-full`} key={`${item.DateDebut}`}> 
            <div className="text-[12px] sm:text-[22px] text-white bg-[#264C4D] py-4 px-8 rounded-t-2xl font-mt-extra-bold">{dictionnaire.Rdv.recap}</div>
            <div className="flex flex-col py-4 px-8 shadow bg-true_white rounded-b-2xl">
                <div className="text-left font-mt-demi text-[10px] sm:text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.date} :</span> {DateFormat(item.DateDebut.$date,false)}</div>
                <div className="text-left font-mt-demi text-[10px] sm:text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.heure} :</span> {Heure(item.DateDebut.$date,false)}</div>
                <div className="text-left font-mt-demi text-[10px] sm:text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.expert} :</span> {item.CompteExpert.firstname} {item.CompteExpert.lastname}</div>
                <div className="text-left font-mt-demi text-[10px] sm:text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.motif} :</span> {item.Type ? dictionnaire.Rdv.suivi:dictionnaire.Rdv.first_suivi}</div>
                
            </div>
        </div> 
    }
    function NextRdv(item){
        return <div className="flex flex-col w-full mt-[40px]"> 
            <div className="text-[12px] sm:text-[22px] text-white bg-[#83C5BE] py-4 px-8 rounded-t-2xl font-mt-extra-bold">{dictionnaire.Rdv.recap}</div>
            <div className="flex flex-col py-4 px-8 shadow rounded-b-2xl">
                <div className="text-left font-mt-extra-bold text-[10px] sm:text-[20px]"> {DateFormat(item.DateDebut.$date,true)}</div>
                
                <div className="text-left font-mt-demi text-[10px] sm:text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.motif} :</span> {item.Type ? dictionnaire.Rdv.suivi:dictionnaire.Rdv.first_suivi}</div>
                <div className="text-left font-mt-demi text-[10px] sm:text-[20px]"> <span className="font-mt-extra-bold">{dictionnaire.expert} :</span> {item.CompteExpert.firstname} {item.CompteExpert.lastname}</div>
                
            </div>
        </div> 
    }
        return <div className="flex flex-col justify-left">
            {!!Object.keys(listRdvAvant).length && <Carousel elems={listRdvAvant.reverse().map((item,pos)=>Recap(item,`rdv-${pos}`))} nbShow={1} display={10} showPoint={false} start={Object.keys(listRdvAvant).length-1} tag={'rdv'} animatedDuration={600} hiddendiv={<div className="w-[50vw] h-[217px]"></div>}/>}
            {!!Object.keys(listRdvAvant).length && listRdvAvant[showRdv].Observation && <>
            <div className="w-[80%] h-[180px] overflow-hidden hover:overflow-auto flex flex-col mt-[30px] mx-[10%]">
               {listRdvAvant[showRdv].Observation && <><div className="text-[32px] mt-[20px] text-left font-mt-demi">{dictionnaire.observations} :</div>
                <div className="text-[20px] text-justify ">{listRdvAvant[showRdv].Observation}</div></>}
           
            </div></>
            }
           {!!Object.keys(listRdvApres).length && <>
            <div className="flex center sm:mt-[40px] mx-[10%]">{NextRdv(listRdvApres[0])}</div></>}
        </div>
    },[listRdvAvant,listRdvApres,showRdv,dictionnaire])
    return (
        <div className="">
            <Navbar/>
            <div className="w-full flex flex-col text-black bg-true_white h-fit">
                <div className="w-fit h-full flex flex-col sm:flex-row  ">
                    <div className="w-full sm:w-[30%] h-fit relative flex center">
                        <img src={isMobile ? "images/PoSkin/Blog/bienfaitsmasques/bienfaitsmasques1.webp":"/images/PoSkin/MesRdv.webp"} alt={"MesRdv"} className=" h-full"/>
                        <div className="absolute top-0 left-0 w-full h-full flex center"><div className="text-black text-[24px] sm:text-[48px] font-mt-extra-bold">{dictionnaire.Rdv.mon_suivi}</div></div>
                    </div>
                    <div className="w-full sm:w-[70%] h-fit sm:h-[90%] p-[15px] sm:p-[30px] ">
                        <div className="bg-white rounded-3xl w-full h-full  flex flex-col p-8">
                            
                            {Element}
                        </div>
                
                    </div>
                </div>

            </div>
        </div>
    )
}
export default MesRdv;