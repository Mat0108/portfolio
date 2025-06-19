import react ,{useMemo, useContext, useEffect,useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import MoreInfo from "./MoreInfo";
import moment from "moment";
import { Months, Weekday } from "../../composant/dateUtils";
import { BG, getGrid } from "../../tailwindUtils";
import ExpertsData from './Data/experts.json';
import RdvData from './Data/rdvs.json';
import { LanguageContext } from "../../languages";
import Navbar from "./navbar";
const PriseDeRdv = ()=>{
    const isMobile = window.screen.width < 600
    const { dictionnaire } = useContext(LanguageContext);
    const [experts,setExperts] = useState(ExpertsData);
    const [listRdv,setListRdv] = useState(RdvData);
    const [listRdvLibre, setListRdvLibre] = useState([]);
    const [suiviRdv,setSuiviRdv] = useState([]);
    const [suiviRdvLibre,setSuiviRdvLibre] = useState([]);
    const [newRdv,setNewRdv] = useState({
        DateDebut:"",
        Confirmation:false,
        Type:"null",
        CompteClient:"",
        CompteExpert:"",
        listExpert:""
    });
    const [global,setGlobal] = useState(0);
    const [selectDate,setSelectDate] = useState("")
    const [month,setMonth] = useState(moment());
    const [rdvId,setRdvId] = useState("")
    const firstDay = useMemo(()=>{return moment(month).startOf('month')},[month])
    const lastDay = useMemo(()=>{return moment(month).endOf('month')},[month])
    const dateplus = useMemo(()=>{return lastDay},[lastDay])

    var weekday = Weekday()
    var months = Months()
    
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){

            // setExperts(data.data.users)
          }
          fetchData()
    }, [])

    useEffect(() => {
        let listRdvAll = []
        let suiviRdvAll = []
        for(let i=1;i<=lastDay.date();i++){
            let datei = firstDay.date(i)
            if(datei.day() !== 0 && datei.day() !== 6){
                suiviRdvAll[datei.format('DD/MM/YYYY')] = [];       
                listRdvAll[datei.format('DD/MM/YYYY')] = [];
                for(let j=9;j<=16;j++){
                    if(j!==12){
                        for(let k = 0;k<3;k++){
                            datei.hour(j).minute(20*k)
                            let rdv = listRdv.filter(rdv =>{
                                let datedebut = moment(rdv.DateDebut);
                                datedebut.hour(moment(rdv.DateDebut).hour()-1)
                                return datedebut.isSame(datei)
                            })
                            
                            let expert = experts.filter(expert=>{
                                let cond = true;
                                rdv.map(rdvvar=>{
                                    if(rdvvar.CompteExpert._id === expert._id){
                                        cond = false;
                                    }
                                })
                                return cond;
                            })
                            if (Object.keys(expert).length > 0 ){  
                                listRdvAll[datei.format('DD/MM/YYYY')][datei.toJSON()] = expert;
                                suiviRdvAll[datei.format('DD/MM/YYYY')][datei.toJSON()] = expert;
                            }
                            // if(Object.keys(suiviRdv).length){
                            //     let filter = suiviRdv.filter(item=>moment(item.DateDebut).isSame(datei))
                            //     if(!Object.keys(filter).length){
                            //         suiviRdvAll[datei.format('DD/MM/YYYY')][datei.toJSON()] = [suiviRdv[0].expert] ;
                            //     }
                            // }
                        }
                    }
                }
            }
        }
        // console.log('listRdvAll : ', suiviRdvAll)        
        console.log('suiviRdvAll : ', suiviRdvAll)
        setSuiviRdvLibre(suiviRdvAll);
        setListRdvLibre(listRdvAll);
    }, [listRdv,firstDay,lastDay,suiviRdv,experts])
    function NextMonth(){
        setMonth(month.clone().month(month.month()+1));
    }
    function PreviousMonth(){
        setMonth(month.clone().month(month.month()-1));
    }
    async function CreateNewRdv(){
        // const res = await CreateRdv({
        //     DateDebut:newRdv.DateDebut,
        //     Confirmation:false,
        //     Type:newRdv.Type,
        //     CompteClient: typeof cookies.user === "object"  ? cookies.user.email : null,
        //     CompteExpert:newRdv.CompteExpert})
        // if(res.status === 200){
        //     toast.success(dictionnaire.Toast.created_rdv);
        //     setRdvId(res.data.summary.id);
        //     if(newRdv.Type === true){
        //         setGlobal(global + 2);
        //     }else{
        //         setGlobal(global+1)
        //     }
        //     }
    }
    useEffect(()=>{
console.log('selectDate : ', selectDate)

    },[selectDate])
    const element = useMemo(() => {
        if(Object.keys(listRdvLibre).length){
            switch(global){
                default:
                    break;
                case 0:
                    return <div className="relative w-full h-full flex p-4 flex flex-col gap-6 sm:gap-8">
                        <div className="w-full text-[14px] sm:text-[28px] text-center font-mt-extra-bold mt-[5px] sm:mt-[10px]">{dictionnaire.Rdv.motif}</div>
                        <div className="w-full flex center">
                            <div className={`${newRdv.Type === true ? BG("light-blue","blue") : BG("blue","light-blue")}  px-4 sm:px-10 py-3 rounded-xl sm:rounded-full text-[12px] sm:text-[24px] w-fit sm:w-[600px] text-center text-white font-mt-demi hover:cursor-pointer `} onClick={()=>{setNewRdv({...newRdv,Type:true})}}> {dictionnaire.Rdv.suivi}</div>
                        </div>
                        <div className="w-full flex center">
                            <div className={`${newRdv.Type === false ? BG("light-blue","blue") : BG("blue","light-blue")} px-4 sm:px-10 py-3 rounded-xl sm:rounded-full text-[12px] sm:text-[24px] w-fit sm:w-[600px] text-center text-white font-mt-demi hover:cursor-pointer  `} onClick={()=>{setNewRdv({...newRdv,Type:false})}}>{dictionnaire.Rdv.first_suivi}</div>
                        </div>
                        <div className="w-full flex center">
                            <div className= {`${BG("cyan","light-blue")} border-cyan px-8 py-2 rounded-full text-[12px] sm:text-[24px] text-center text-black font-mt-demi mt-[15px] sm:mt-[30px] hover:cursor-pointer`} onClick={()=>{newRdv.Type === "null" ? toast.info(dictionnaire.Toast.selected_motif):setGlobal(newRdv.Type ? global+2:global+1)}}> {dictionnaire.next}</div>
                        </div>
                    </div>  
                case 1:
                    
                    return <MoreInfo back={()=>{setGlobal(global - 1)}} next={()=>{setGlobal(global + 1)}}/>
                case 2:

                    const firstDayOfMonth = firstDay.clone().startOf('month');
                    let datebefore = [];
                    while (firstDayOfMonth.day() !== 1) { // .day() returns the day of the week (0 for Sunday, 1 for Monday, etc.)
                        firstDayOfMonth.subtract(1, 'days');
                        datebefore.unshift(firstDayOfMonth.clone()  ); // Add the day at the beginning of the array
                    }
                    const lastDayOfMonth = lastDay.clone().endOf('month');
                    
                    let dateafter = [];
                    
                    if(lastDayOfMonth.day() !== 6 && lastDayOfMonth.day() !== 0){
                        while (lastDayOfMonth.day() < 5) { // Loop until Friday
                            lastDayOfMonth.add(1, 'days');
                            dateafter.push(lastDayOfMonth.clone()); // Add the day at the end of the array
                        }        
                    }
                    let x = 0;
                    let y = 1;
                    let dateclass = "w-full h-fit px-1 py-1 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-[14px] xl:text-[18px] 3xl:text-[24px] text-center text-white font-mt-demi hover:cursor-pointer flex flex-col rounded-[15px] sm:rounded-full"
                    return <div className="relative w-full h-full flex p-4 flex flex-col gap-6">
                        <div className="absolute top-3 left-3 ">
                         <div className={`${BG("cyan","light-blue")} w-[25px] sm:w-[50px] h-[25px] sm:h-[50px] rounded-full text-[12px] sm:text-[24px] text-center text-black font-mt-demi hover:cursor-pointer`} onClick={()=>{setGlobal(newRdv.Type === true ? global-2: global-1)}}><img src={"/images/fleche.webp"} alt={"fleche"} className={"scale-[-0.7] p-[-1px] sm:p-0 scale-[-0.75] w-fit"}/></div>
                       
                        </div>
  
                        <div className="w-full text-[14px] sm:text-[28px] text-center font-mt-extra-bold mt-[10px]" key={"title"}> {dictionnaire.Rdv.date}</div>
                        <div className="w-full h-fit flex flex-row">
                            <div className="w-1/3 flex ">
                                <div className={`${BG("cyan","light-blue")} px-4 sm:px-8 py-1 rounded-2xl sm:rounded-full text-[12px] sm:text-[24px] text-center text-black font-mt-demi `} onClick={()=>{PreviousMonth()}} key={"backmonth"}> {dictionnaire.Rdv.mois_precedent}</div>
                            </div>
                            <div className="w-1/3 flex ">
                                <div className="w-full text-[14px] sm:text-[28px] text-center text-black font-mt-extra-bold flex center" > <div>{months[firstDay.month()]}</div></div>
                            </div>
                            <div className="w-1/3 flex justify-end">
                                <div className={`${BG("cyan","light-blue")} px-4 sm:px-8 py-1 rounded-2xl sm:rounded-full text-[12px] sm:text-[24px] text-center text-black font-mt-demi `} onClick={()=>{NextMonth()}} key={"nextmonth"}> {dictionnaire.Rdv.mois_suivant}</div>
                            </div>
                        </div>
                        <div className="h-[340px] sm:h-[450px] overflow-hidden hover:overflow-auto">
                            <div className="w-full h-fit grid grid-cols-5 center gap-2 ">
                            {/* affichage du mois précedant */}
                            {datebefore && datebefore.map((item,pos)=>{
                                x++;
                                if(x===6){y++;x=1;}
                                return <div key={`datebefore-${pos}`} className={`bg-grey px-2 ${dateclass} ${getGrid(x,true)} `} ><div>{isMobile ? "":weekday[item.day()]} {item.format('DD/MM')}</div></div>
                            })}
                            {/* affichage des creanaux  */}
                            {selectDate !== "" && (newRdv.Type === false ? Object.entries(listRdvLibre) : Object.entries(suiviRdvLibre)).map((posrdv,rdv)=>{
                                if(posrdv[0] === selectDate){
                                    
                                    return <div className={`w-full h-fit ${getGrid(parseInt((rdv+datebefore.length)/5+2),false)} col-span-5 grid grid-cols-5 sm:grid-cols-8 gap-2 sm:gap-4`}>
                                        {Object.entries(posrdv[1]).map((poshours,pos2)=>{
                                            let date = moment(poshours[0]) 
                                            if(date.isAfter(moment())){
                                                return <div onClick={()=> {
                                                    newRdv.Type === true ? setNewRdv({...newRdv,DateDebut:moment(date).toJSON(),CompteExpert:poshours[1][0],listExpert:poshours[1]}):setNewRdv({...newRdv,DateDebut:moment(date).toJSON(),listExpert:poshours[1]})
                                                }} key={`hours-${poshours}`} className={`w-full h-fit ${newRdv.DateDebut !== "" && moment(newRdv.DateDebut).isSame(moment(poshours[0])) ?  BG("light-blue","blue") : newRdv.Type === true ? BG("green","blue") : Object.keys(poshours[1]).length ? Object.keys(poshours[1]).length === Object.keys(experts).length ?  BG("green","blue") :  BG("vivid_tangerine","blue") :"bg-red"} px-1 sm:px-2 py-1 sm:py-2 rounded-full text-[10px] sm:text-[20px] text-center text-white font-mt-demi hover:cursor-pointer flex flex-col`} ><div>{moment(poshours[0]).format('HH:mm')}</div><div className="text-[8px] sm:text-[14px]">{!isMobile && newRdv.Type === true ? "":`${Object.keys(poshours[1]).length} experts`}</div></div>
                                
                                            }
                                        })}
                                    </div>
                                }
                            })}
                            {/* affichage des dates */}
                            {(newRdv.Type === false ? Object.entries(listRdvLibre) : Object.entries(suiviRdvLibre)).map((rdv,pos)=>{
                                let today = moment();
                                x++;
                                if(x===6){y++;x=1;}
                                return <div key={`rdv-${rdv}`} className={`${dateclass} ${getGrid(x,true)} ${moment(rdv[0],'DD/MM/YYYY').isBefore(today) ? "bg-grey" :selectDate !== "" && selectDate === rdv[0] ? BG("light-blue","blue") :BG("blue","light-blue") }`}  onClick={()=>{setSelectDate(selectDate === rdv[0] ? "":rdv[0])}} ><div>{isMobile ? "":weekday[moment(rdv[0],'DD/MM/YYYY').day()]} {moment(rdv[0],'DD/MM/YYYY').format('DD/MM')}</div></div>
                            })}
                            {/* affichage des premeirs jours  */}
                            {dateafter && dateafter.map((item,pos)=>{
                                x++;
                                if(x===6){y++;x=1;}
                                return <div key={`datebefore-${pos}`} className={`${dateclass} ${getGrid(x,true)} bg-grey `} ><div>{isMobile ? "":weekday[moment(item).day()]} {moment(item).format('DD/MM')}</div></div>
                            })}
                        </div>
                        </div>
                        
                        
                        <div className="w-full h-[60px] flex center">
                            <div className={`${BG("cyan","light-blue")} px-8 py-2 rounded-full text-[14px] xl:text-[18px] 3xl:text-[24px] text-center text-black font-mt-demi my-[30px] `} onClick={()=>{selectDate === "" ? toast.info(dictionnaire.Toast.selected_date): newRdv.DateDebut === "" ? toast.info(dictionnaire.Toast.selected_rdv)  : setGlobal(global+1)}}>{dictionnaire.next}</div>
                        </div>
                    </div>  
            case 3:
                return <div className="relative w-full h-full flex p-4 flex flex-col gap-8">
                    <div className="absolute top-3 left-3 ">
                         <div className={`${BG("cyan","light-blue")} w-[25px] sm:w-[50px] h-[25px] sm:h-[50px] rounded-full text-[12px] sm:text-[24px] text-center text-black font-mt-demi hover:cursor-pointer`} onClick={()=>{setGlobal(newRdv.Type === true ? global-2: global-1)}}><img src={"/images/fleche.webp"} alt={"fleche"} className={"scale-[-0.7] p-[-1px] sm:p-0 scale-[-0.75] w-fit"}/></div>
                       
                        </div>
                        <div className="w-full text-[14px] sm:text-[28px] text-center font-mt-extra-bold mt-[10px]"> {dictionnaire.Rdv.choose_expert}</div>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-3 place-content-start gap-4">
                            {newRdv.listExpert.map(expert=>{
                                return <div className="w-full flex center ">
                                        <div className={`p-2 sm:p-4 w-fit hover:cursor-pointer ${newRdv.CompteExpert !== "" && newRdv.CompteExpert === expert.email ? BG("light-blue","blue"):BG("white_coffee","blue")} flex flex-col  rounded-3xl`} onClick={()=>{newRdv.CompteExpert !== "" ? setNewRdv({...newRdv,CompteExpert:""}) : setNewRdv({...newRdv,CompteExpert:expert.email})}}>
                                            <div className="w-full flex center"><img src={expert.imageBase64} alt={`${expert.firstname}-${expert.lastname}-image`} className={`${newRdv.CompteExpert !== "" && newRdv.CompteExpert === expert.email ? "bg-light-blue":"bg-white_coffee"} rounded-lg`}/></div>
                                            <div className="pt-4 text-[12px] sm:text-[16px] text-center font-mt-demi">{`${expert.firstname} ${expert.lastname}`}</div>
                                    </div>
                                </div>
                            })}
                            
                        </div>
                        <div className="w-full h-[60px] flex center">
                            <div className={`${BG("cyan","light-blue")} px-8 py-2 rounded-full text-[12px] 3xl:text-[20px] text-center text-black font-mt-demi my-[30px] hover:cursor-pointer`} onClick={()=>{newRdv.CompteExpert === "" ? toast.info(dictionnaire.Toast.selected_expert):setGlobal(global+1)}}> Suivant</div>
                        </div>
                    </div>  
            case 4:
                return <div className="relative w-full h-full flex p-4 flex flex-col center">
                        <h1 className="text-[16px] sm:text-[38px] font-mt-extra-bold mb-[30px]">{dictionnaire.Rdv.confirm1} </h1>
                        <h2 className="text-[10px] sm:text-[20px] w-[90%] sm:w-[50%]">{dictionnaire.Rdv.confirm2}</h2>

                        <h2 className="text-[10px] sm:text-[20px] w-[90%] sm:w-[50%] text-justify mt-2 sm:mt-0">{dictionnaire.Rdv.confirm3}  </h2>    
                        
                            <button className={`${BG("cyan","light-blue")} px-4 py-2 rounded-full text-[8px] sm:text-[14px]  3xl:text-[20px] text-center text-black font-mt-demi my-[30px] `} >{dictionnaire.RdvConfirm.payement}</button>
                            
                        
                </div>
                
            }
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listRdvLibre, global, newRdv, firstDay, lastDay, months, selectDate, suiviRdvLibre, rdvId, PreviousMonth, NextMonth, isMobile, weekday, experts, CreateNewRdv])
    useEffect(() => {
        // console.log('selectDate : ', selectDate)
    }, [selectDate])
    
    return (
   <div className="relative bg-true_white text-black">
      <div className='w-full flex gap-4 center '>
            <Navbar />
        </div>
    <div className="w-full h-fit sm:h-[870px] flex flex-col sm:flex-row ">
                    <div className="w-full sm:w-[25%] h-fit sm:h-full relative flex center">
                        <img src={isMobile ? "/images/PoSkin/Blog/serum/serum1.webp":"/images/PoSkin/Diagnostic/diagnostic1.webp"} alt={"prise de rdv"} className="h-full"/>
                        <div className="absolute top-0 left-0 w-full h-full flex center"><div className={`text-grey sm:text-white text-[12px] sm:text-[24px] sm:text-[48px] font-mt-extra-bold`}>{dictionnaire.Rdv.rdv.toUpperCase()}</div></div>
                    </div>
                    <div className="w-full sm:w-[75%] h-fit sm:h-[800px] p-[30px] ">
                        <div className="bg-white rounded-3xl w-full h-full  flex flex-col">
                            {element}
                        </div>
                
                    </div>
                </div>

            </div>
    )
}
export default PriseDeRdv;