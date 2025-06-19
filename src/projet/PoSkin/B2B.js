import { useContext, useState } from "react";
import { LanguageContext } from "../../languages";
import HoverSwap from './components/HoverSwap';
import Navbar from "./navbar";

const B2B = () =>{

    const { dictionnaire} = useContext(LanguageContext);
    const [value, setValue] = useState();

    // async function createUser(mail){
    //   const user = {
    //       email: mail
    //     };
    //   await saveNewsletterExpert(user).then(e=>{setValue("");toast.success(dictionnaire.Toast.newsletter_expert)});
    // }
    function div1(titre){
        return <div className="absolute w-full h-fit bottom-0 ">
            <div className="text-[10px] sm:text-[20px] w-full min-h-[90px] bg-white absolute bottom-0 opacity-[0.8] center p-1 text-black font-mt-bold">{titre}</div>
        </div>
    }
    function div2(titre,text,button,onClick){
        return <div className="w-full h-full relative flex flex-col bg-white opacity-[0.95] flex flex-col p-[2px] sm:p-4 overflow-auto">
            <div className="flex center px-[1%] sm:px-[10%] font-mt-bold text-[8px] sm:text-[20px]">{titre}</div>
            <div className="flex center px-[1%] sm:px-[10%] text-[8px] sm:text-[16px] my-[10px] sm:my-[30px]">{text}</div>
            {/* <div className="absolute bottom-0 flex w-[calc(100%-32px)] center py-2 sm:py-10"><div className="rounded-full px-4 py-2 bg-blue text-white_coffee text-[6px] sm:text-[17px]" onClick={onClick}>{button.toUpperCase()}</div></div> */}
        </div>
    }
    return <div className="relative bg-true_white ">
      <div className='w-full flex gap-4 center '>
            <Navbar />
        </div>
        <div className="bg-[#EEE8E4] text-[#000000] relative h-screen overflow-y-auto overflow-x-hidden custom-scrollbar" id={"Scrollref"}>
        <div className="relative">
            <img src={"/images/PoSkin/visage/fullvisage2.webp"} alt={"fullimage"}  className="w-full object-fill h-full" />
            <div className="absolute top-0 left-1/4 sm:left-1/2 w-3/4 sm:w-1/2 h-full flex center ">
                <div className="w-fit h-fit bg-white_coffee rounded-3xl flex flex-col items-center p-2 sm:p-4  gap-1 sm:gap-2 mr-[5%] " >
                    <div className="text-[10px] sm:text-[26px] 3xl:text-[40px] font-mt-bold w-full sm:w-[90%]">{dictionnaire.B2B.discover}</div>
                    <div className="text-[7px] sm:text-[14px] 3xl:text-[20px] w-full sm:w-[90%] sm:p-2">{dictionnaire.B2B.presentation1}</div>
                    <div className="text-[7px] sm:text-[14px] 3xl:text-[20px] w-full sm:w-[90%] sm:p-2">{dictionnaire.B2B.presentation2}</div>
                    <div className="text-[7px] sm:text-[14px] 3xl:text-[20px] w-full sm:w-[90%] sm:p-2">{dictionnaire.B2B.presentation3}</div>
                    <p className="w-full sm:w-[90%] text-[10px] sm:text-[18px] text-left mt-2 sm:mt-10  ">{dictionnaire.B2B.contactplaceholder}</p>
                    <div className="flex flex-row w-[90%] mb-[2px] sm:mb-[4px] ">
                        <input className="w-[70%] bg-[#83C5BE] text-[8px] sm:text-[16px] lg:text-[18px] border-2 border-blue bg-white rounded-lg" placeholder={dictionnaire.NewsLetter.placeholder} value={value} onChange={e=>setValue(e.target.value)}></input>
                        <div className="w-[30%]"><div className="w-full ml-[10px] p-1 sm:p-4 flex center border-2 rounded-xl bg-blue text-white text-[5px] sm:text-[10px] 3xl:text-[14px] font-mt-bold "> {dictionnaire.B2B.contact}</div></div>
                    </div>
                </div>    
            </div>
        </div>
        <div className="p-4 sm:p-10 ">
            <div className="flex center font-mt-bold text-[12px] sm:text-[36px]">{dictionnaire.B2B.discover2.toUpperCase()}</div>
            <div className="flex center text-[8px] sm:[text-[20px]">{dictionnaire.B2B.Po}</div>
            <div className="flex center">
                <div className="w-full 3xl:w-3/4 flex justify-between mt-[50px]">
                    <HoverSwap  image={<img className="w-full h-full" src={'/images/PoSkin/B2B/B2B_1.webp'} alt={'B2B1'} />} div1={div1(dictionnaire.B2B.offre.offre1)} div2={div2(dictionnaire.B2B.offre.offre1,dictionnaire.B2B.offre.offre2,dictionnaire.B2B.offre.offre3)}/>
                    <HoverSwap  image={<img className="w-full h-full" src={'/images/PoSkin/B2B/B2B_2.webp'} alt={'B2B2'} />} div1={div1(dictionnaire.B2B.reserver.reserver1)} div2={div2(dictionnaire.B2B.reserver.reserver1,dictionnaire.B2B.reserver.reserver2,dictionnaire.B2B.reserver.reserver3)}/>
                    <HoverSwap  image={<img className="w-full h-full" src={'/images/PoSkin/B2B/B2B_3.webp'} alt={'B2B3'} />} div1={div1(dictionnaire.B2B.discoverhs.discover1)} div2={div2(dictionnaire.B2B.discoverhs.discover1,dictionnaire.B2B.discoverhs.discover2,dictionnaire.B2B.discoverhs.discover3)}/>
                </div>
            </div>
            <div className="flex center w-full">
                <div className="flex mt-10 relative ">
                    <img className="w-full h-full" src={'/images/PoSkin/B2B/B2B_4.webp'} alt={'B2B4'}/>
                    <div className="absolute top-0 left-0 w-1/2 h-full p-[10px] sm:p-[50px] overflow-auto">
                        <div className="w-full h-full relative flex flex-col">

                            <div className="flex font-mt-bold text-[8px] sm:text-[36px] text-left">{dictionnaire.B2B.expert.expert1.toUpperCase()}</div>
                            <div className="flex flex-col center h-[calc(100%-300px)] text-[6px] sm:text-[14px] 3xl:text-[16px] mt-[60px] sm:m">
                                <div>
                                    <div className="flex text-left ">{dictionnaire.B2B.expert.expert2}</div>
                                
                                    <div className="flex text-left 3xl:mt-[26px]"><img src={"/images/PoSkin/check.webp"} alt={"check"} className="w-2 h-2 sm:w-fit sm:h-fit"/>{dictionnaire.B2B.expert.expert3}</div>
                                    <div className="flex text-left"><img src={"/images/PoSkin/check.webp"} alt={"check"} className="w-2 h-2 sm:w-fit sm:h-fit"/>{dictionnaire.B2B.expert.expert4}</div>
                                    <div className="flex text-left"><img src={"/images/PoSkin/check.webp"} alt={"check"} className="w-2 h-2 sm:w-fit sm:h-fit"/>{dictionnaire.B2B.expert.expert5}</div>
                                    <div className="flex text-left"><img src={"/images/PoSkin/check.webp"} alt={"check"} className="w-2 h-2 sm:w-fit sm:h-fit"/>{dictionnaire.B2B.expert.expert6}</div>
                                    <div className="flex text-left"><img src={"/images/PoSkin/check.webp"} alt={"check"} className="w-2 h-2 sm:w-fit sm:h-fit"/>{dictionnaire.B2B.expert.expert7}</div>
                                    <div className="flex text-left"><img src={"/images/PoSkin/check.webp"} alt={"check"} className="w-2 h-2 sm:w-fit sm:h-fit"/>{dictionnaire.B2B.expert.expert8}</div>        
                                </div>
                            </div>
                            {/* <div className="absolute bottom-0 sm:bottom-6 flex center w-full "><div className="rounded-full px-2 py-[2px] sm:px-4 sm:py-2 bg-blue text-white_coffee font-mt-bold text-[5px] sm:text-[14px]" >{dictionnaire.B2B.expert.expert9.toUpperCase()}</div></div> */}
                        </div>        
                    </div>
                </div>
            </div>
            <div className="flex center mt-[30px]">
                <div className="w-full 3xl:w-3/4 flex">
                    <div className="w-1/2">
                        <img src={"images/PoSkin/B2B/B2B_5.webp"} alt={"B2B5"}/>
                    </div>
                    <div className="w-1/2 flex flex-col text-left text-[8px] sm:text-[16px]">
                        <div className="ml-[5px] sm:ml-0 text-[10px] sm:text-[100px] ">{dictionnaire.TextDivers.presentation.po}</div>
                        <div className="text-[15px] sm:text-[36px] font-mt-bold mt-[-36px] ml-[6px]" >{dictionnaire.TextDivers.presentation.peau}</div>
                        <div className="font-mt-bold mt-[15px] sm:mt-[10px] mt-[18px] ml-[6px]">{dictionnaire.B2B.leader.leader1}</div>
                        <div className="text-justify mt-[18px] sm:mt-[38px] ml-[6px]">{dictionnaire.B2B.leader.leader2}</div>
                        <div className="text-justify mt-[15px] sm:mt-[30px] ml-[6px]">{dictionnaire.B2B.leader.leader3}</div>
                        <div className="text-justify mt-[6px] sm:mt-[12px] ml-[6px]">{dictionnaire.B2B.leader.leader4}</div>
                        {/* <div className="mt-[12px] sm:mt-[24px] rounded-full px-2 py-2 sm:px-4 sm:py-4 bg-blue text-white_coffee font-mt-bold text-[7px] sm:text-[14px] w-fit" >{dictionnaire.TextDivers.apropos.en_savoir_plus.toUpperCase()}</div> */}
                        
                    </div>
                </div>
            </div>
            <div className="flex center pb-[200px]">
                <div className="w-full 3xl:w-3/4 flex center">
                    <div>
                        <p className="mt-[10px] sm:mt-[40px] text-[10px] sm:text-[20px]  font-mt-extra-bold">{dictionnaire.Valeur.key0}</p>
                        <div className="w-[100%] mt-[15px] sm:mt-[40px] grid grid-cols-3     ">
                        <div className="col-start-1 flex flex-col items-center">
                            <p className="text-[6px] sm:text-[16px] w-[90%] sm:w-[60%]">{dictionnaire.Valeur.key1}</p>
                            <p className="text-[6px] sm:text-[16px] w-[90%] sm:w-[60%] text-justify mt-4">{dictionnaire.Valeur.key1_text}</p>
                        </div>
                        <div className="col-start-2 flex flex-col items-center">
                            <p className="text-[6px] sm:text-[16px] w-[90%] sm:w-[60%]">{dictionnaire.Valeur.key2}</p>
                            <p className="text-[6px] sm:text-[16px] w-[90%] sm:w-[60%] text-justify mt-4">{dictionnaire.Valeur.key2_text}</p>
                        </div>
                        <div className="col-start-3 flex flex-col items-center">
                            <p className="text-[6px] sm:text-[16px] w-[90%] sm:w-[60%]">{dictionnaire.Valeur.key3}</p>
                            <p className="text-[6px] sm:text-[16px] w-[90%] sm:w-[60%] text-justify mt-4">{dictionnaire.Valeur.key3_text}</p>
                        </div>
      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
}
export default B2B;