import { useContext, useMemo, useState } from "react";

import { toast } from "react-toastify";
// import { saveDiagnostic } from "../services/Diagnostic";
import { useNavigate } from "react-router";
// import { useCookies } from "react-cookie";
import { LanguageContext } from "../../languages";
import { Diagnostic } from "../../constants/Diagnostic";
import { getW } from "../../tailwindUtils";
import Navbar from "./navbar";
const DiagnosticStart = (props)=>{
    const DiagnosticData = Diagnostic();
    const { dictionnaire, userLanguage } = useContext(LanguageContext);
    // const [cookies] = useCookies(["user"]);
    const [selected,setSelected] = useState(DiagnosticData.map(()=>{return []}))
    const [i,setI] = useState(0);
    const [section,setSection] =useState({name:DiagnosticData[0].section,index:1,indexSection:1})
    const [mail, setMail] = useState("")
    const navigate = useNavigate();
    const isMobile = window.screen.width < 600
    let total=[]
    DiagnosticData.map((item,pos)=>{
        if(total[item.section]){
            total[item.section] = total[item.section]+1
        }else{
            total[item.section] = 1    
        }  
    })
    total.totalSection = Object.keys(total).length
    
    function UpdateArray(pos){
        if(DiagnosticData[i].type === "multi"){
            if(selected[i].includes(pos)){
                selected[i] = selected[i].filter(function(e) { return e !== pos })
            }else{
                selected[i].push(pos)
            }
            
        }else{
            if(pos !== selected[i][0]){
                selected[i] = [pos]
            }else{
                if(selected[i].length !== 0){
                    selected[i] = []
                }else{
                    selected[i] = [pos]
                }
            }
            
        }
        setSelected(selected => [...selected]);
    }
    function Button(text,pos,data){
        return <div  key={`diagnostic-${pos}`} className={`flex center ${(selected[i].includes(pos)) ? "border-cyan_medium bg-cyan_medium text-white bg:bg-cyan_medium  ":" bg-white_smoke text-blue hover:bg-blue  hover:text-white_smoke border-[#264C4D]" } border-[4px] px-[16px] py-[8px]  text-[14px] sm:text-[20px] border-2   ${data.rounded !== "" ? data.rounded : isMobile ? "rounded-lg":"rounded-2xl"}`} onClick={()=>{UpdateArray(pos)}}>
                <div>{text}</div>
            </div>
    }
    function retour(){
        
        if(i !== 0){
            setI(i-1)        
        }
        if(section.index === 1){
            setSection({name:DiagnosticData[i].section,index:total[DiagnosticData[i-1].section]-1,indexSection:section.indexSection-1})
        }else{
            setSection({name:DiagnosticData[i].section,index:section.index-1,indexSection:section.indexSection})
        }
    }
    function valider(){
        if(i < DiagnosticData.length-1){
            if(Object.keys(selected[i]).length){
                setI(i+1)
                if(section.index === total[DiagnosticData[i].section]){
                    setSection({name:DiagnosticData[i+1].section,index:1,indexSection:section.indexSection+1})
                }else{
                    setSection({name:DiagnosticData[i+1].section,index:section.index+1,indexSection:section.indexSection})
                }
        
            }else{
                toast.info(dictionnaire.Toast.required_answer);
            }
        }
        
    }
    async function Envoyer(){
        let sendData = {}
        toast.info("simulation d'engistrement d'un diagnostic")
        // selected.map((item,pos)=>{
        //     sendData = {...sendData,[`${DiagnosticData[pos].id}`]:item}
        // })
        // console.log(sendData)
        // let response = await saveDiagnostic({...sendData, mail:typeof cookies.user === "object" ? cookies.user.email :mail,language:userLanguage})
        // if(response.status === 200){
        //     if(typeof cookies.user === "object"){
        //         toast.success(dictionnaire.Toast.save_diagnostic);
        //     }else{
        //         toast.success(dictionnaire.Toast.send_mail);
        //     }
        // }else{
        //     toast.error(dictionnaire.Toast.error_api);
        // }
    } 
    

    /* eslint-disable no-unused-expressions */
    const Element = useMemo(() =>{        
        return <div className="flex flex-col h-full  sm:h-full text-true_white ">
            
            <div className="w-full h-full flex flex-row">
                <div className="invisible sm:visible w-0 sm:w-1/3 h-full relative">
                    <img src={"/images/PoSkin/Diagnostic/diagnostic5.webp"} alt={"diagnostic"} className="w-full h-full"/>
                </div>
                <div className="w-full sm:w-2/3 h-full bg-[#EEE8E4] relative">
                    <div className="w-full h-3 bg-gray">
                        <div className={`${getW(parseInt(100*(section.indexSection)/total.totalSection),true)} h-full bg-blue rounded-r-2xl`}></div>
                    </div>
                    <div className="w-full h-3 bg-gray">
                        <div className={`${getW(parseInt(100*(section.index)/total[section.name]+1),true)} h-full bg-cyan_medium rounded-r-2xl`}></div>
                    </div>
                    <div className="ml-[2%] sm:ml-[5%] flex flex-col ">
                        <div className={`flex flex-col sm:flex-row w-[90%] mt-[10px] sm:mt-[40px]  text-[16px] sm:text-[28px] text-[#264C4D] text-left h-fit mb-[10px] gap-2 ${i===DiagnosticData.length-1 ? "font-mt-demi":""}`}>
                            <div className="font-mt-bold">{i === DiagnosticData.length -1  ? `${dictionnaire.DiagnosticStart.trace}` : `${DiagnosticData[i].section} ${DiagnosticData[i].section ? ":": ""} `}</div>
                            <div>{ DiagnosticData[i].titre} </div>
                        </div>
                        <div><h2 className={`w-[90%] mb-[10px] text-[10px] sm:text-[20px] text-[#264C4D] text-left h-fit mb-[10px] ${i===DiagnosticData.length-1 ? "font-mt-demi":""}`}>{i === DiagnosticData.length-1 ? "": `${DiagnosticData[i].question }`} </h2></div>
                    
                        <div className="w-full h-full flex flex-col">
                        {i === DiagnosticData.length-1 ? "" :<div className={`w-[96%] sm:w-[90%] h-[calc(100%-100px)] gap-4 mb-[20px] relative grid ${DiagnosticData[i].format === "2" ? "grid-cols-2":"grid-cols-1"} grid-rows-5 grid-flow-row auto-cols-max `}>
                            {Object.keys(DiagnosticData[i].reponses).length ? DiagnosticData[i].reponses.map((item,pos)=>{return Button(item,pos,DiagnosticData[i])}):""}
                        </div>}

                        <div>
                            {i === DiagnosticData.length-1 ?<div className={`grid grid-cols-1 grid-rows-5 mb-[20px]`}>
                                {true ? <>
                                <div className="text-[14px] sm:text-[20px] text-[#264C4D] text-left mt-[10px]">{dictionnaire.DiagnosticStart.copie}</div>
                                <div className="w-[90%] flex flex-row">
                                <input
                                    className="rounded-lg w-[98%] sm-w-2/3 bg-gray-700 mt-2 py-2 px-4 border-[#264C4D] border-2 focus:bg-black-800 focus:outline-none form-control"
                                    type="text"
                                        onChange={(e)=>{setMail(e.target.value)}}
                                    value={mail}
                                    placeholder="Fake email*"
                                    required
                                />
                                <div className="flex flex-col w-1/3 center ml-[10px] "> <div className="w-fit bg-[#264C4D] rounded-full text-[12px] sm:text-[24px] px-16 py-2 text-white hover:cursor-pointer" >{dictionnaire.send}</div> </div>
                                
                                </div>
                                 <div className="row-span-2 text-[12px] sm:text-[20px] font-mt-demi w-[70%] text-justify mt-[20px] ">{dictionnaire.DiagnosticStart.connect}</div>
                                <div className="flex flex-col w-full mt-[30px] "> <div className="w-fit bg-[#264C4D] rounded-full text-[12px] sm:text-[24px] px-16 py-2 text-white hover:cursor-pointer" >{dictionnaire.connect}</div> </div>
                                
                                </> : <><div className="flex flex-col w-full mt-[30px] "> <div className="w-fit bg-[#83C5BE] rounded-full text-[12px] sm:text-[24px] px-16 py-2 text-[#264C4D] hover:cursor-pointer" onClick={()=>{Envoyer()}}>{dictionnaire.DiagnosticStart.save}</div> </div>
                                <div className="flex flex-col w-full mt-[30px]  "> <div className="w-fit bg-[#264C4D] rounded-full text-[12px] sm:text-[24px] px-16 py-2 text-white hover:cursor-pointer" onClick={()=>{navigate("/PriseDeRdv")}}>{dictionnaire.DiagnosticStart.rdv}</div> </div>
                                </>
                                }
                                
                            </div>:""}
                            </div>
                        <div className="w-[90%] h-fit flex flex-row justify-between  mb-[10px]  ">
                            <div className={`bg-[#83C5BE] rounded-full  text-[12px] sm:text-[24px] px-8 py-2 hover:cursor-pointer`} onClick={()=>{retour()}}>
                                {dictionnaire.previous}
                            </div>
                            {i === DiagnosticData.length-1 ? "" : <div className={`bg-[#264C4D] rounded-full text-[12px] sm:text-[24px] px-10 py-2 ${i === DiagnosticData.length-1 ? "text-[#264C4D]":"text-white"}  hover:cursor-pointer`} onClick={()=>{valider()}}>
                                {dictionnaire.next}
                            </div>}
                        </div>
                       
                    </div>
                    </div>
                    
                </div>
            </div>

    </div>}, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i,mail,DiagnosticData,selected,,dictionnaire,props])
    return (<div className="relative bg-white_coffee ">
      <div className='w-full flex gap-4 center '>
            <Navbar />
        </div>
        {Element}
        </div>
    )
}
export default DiagnosticStart;