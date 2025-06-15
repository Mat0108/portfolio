import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { LanguageContext } from "../../languages";
import Navbar from "./navbar";

const Compte = (props) =>{
  
    const isMobile = window.screen.width < 600
    const { dictionnaire, userLanguage } = useContext(LanguageContext);;
    const [edit,setEdit] = useState(false);
    const navigate = useNavigate();
    const handleChangePassword = async (event) => {
      event.preventDefault();
      toast.success(dictionnaire.Toast.reset_password);
    };
    const onClick = async (event) => {
        event.preventDefault();
        toast.success(dictionnaire.Toast.info_modif);
      };
    const element = useMemo(() => {
        return <><div className="w-[80%] sm:w-1/2 flex flex-col gap-3 text-[10px] sm:text-[20px] text-black">
                <div className="flex flex-col">
                  <label className="text-left font-mt-demi text-[10px] sm:text-[20px]">{dictionnaire.Compte.Nom.toUpperCase()}</label>
                  <input
                  className="text-[10px] sm:text-[20px] rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                  type="text"
                  value={'Matthieu'}
                  placeholder={dictionnaire.Compte.VNom}
                  id="firstname"
                  />  
                </div>
                <div className="flex flex-col">
                  <label className="text-left font-mt-demi">{dictionnaire.Compte.Prenom.toUpperCase()}</label>
                  <input
                  className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                  type="text"
                  value={'Barnabé'}
                  placeholder={dictionnaire.Compte.VPrenom}
                  id="lastname"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-left font-mt-demi">{dictionnaire.Compte.Email.toUpperCase()}</label>
                  <input
                  className="rounded-xl bg-gray-700 mt-2 py-2 px-4 border-[#A29F9F] border-2 bg-[#F3F3F3]"
                  type="text"
                  value={'matthieubarnab@gmail.com'}
                  placeholder={dictionnaire.Compte.VEmail}
                  id="email"
                  />
                </div>  
                
           </div>
           
            </>
    }, [edit])
    return <div className="relative bg-true_white">
      <div className='w-full flex gap-4 center '>
            <Navbar />
        </div>
    <div className="w-full h-fit sm:h-[870px] flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 h-full relative">
            <img src={isMobile ? "images/PoSkin/Blog/bienfaitsmasques/bienfaitsmasques1.png":"/images/PoSkin/Compte/Compte1.jpg"} alt={"ImageCompte"} className="w-fit h-full"/>
            <div className="absolute top-0 left-0 w-full h-full flex center"><div className="text-white text-center text-[24px] sm:text-[48px] font-mt-bold ">{dictionnaire.Compte.Compte}</div></div>
        </div>
        <div className="w-full sm:w-2/3 h-[97%] p-[15px] sm:p-[30px] text-black">
            <div className="bg-white rounded-3xl w-full h-full flex flex-col ">
                <div className="font-mt-extra-bold text-[20px] sm:text-[40px] mt-[40px]  text-center">{`BIENVENUE MATTHIEU`}</div>
                <div className="text-[10px] sm:text-[20px] mt-[10px] text-center">{`Po. vous remercie pour votre confiance`}</div>
                <div className="flex center mt-[35px] gap-8 px-4"> 
                    <div className="bg-[#83C5BE] px-2 sm:px-8 py-2 w-[220px] sm:w-[270px] h-fit rounded-full text-[12px] sm:text-[24px] font-mt-demi hover:cursor-pointer" onClick={()=>{navigate("/MesRdv")}}>{dictionnaire.Compte.Suivi}</div>
                    <div className="bg-[#83C5BE] px-2 sm:px-8 py-2 w-[220px] sm:w-[270px] h-fit rounded-full text-[12px] sm:text-[24px] font-mt-demi hover:cursor-pointer" onClick={()=>{navigate("/MesDiagnostics")}}>{dictionnaire.Compte.Diagnostics}</div>
                </div>
                <div className="text-[16px] sm:text-[32px] mt-[20px] sm:mt-[40px] font-mt-demi text-center">{`MES INFORMATIONS `}</div>
                <div className="w-full flex flex-row center"> 
                    {element}
                    
                </div>
                <div className="flex center mt-[30px]"> <div className="bg-[#264C4D] px-8 py-2 w-fit h-fit rounded-full text-[12px] sm:text-[24px] font-mt-demi text-white hover:cursor-pointer" >{dictionnaire.Compte.Info}</div></div>
                <div className="flex center mt-[20px] mb-[20px]"> <div className="bg-[#264C4D] px-8 py-2 w-fit h-fit rounded-full text-[12px] sm:text-[24px] font-mt-demi text-white hover:cursor-pointer" onClick={handleChangePassword}>{dictionnaire.Compte.Motdepasse}</div></div>
            </div>

        </div>
    </div>

</div>
}
export default Compte;
