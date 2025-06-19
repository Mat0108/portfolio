import React, { useState, useMemo, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LanguageContext } from "../../languages";
import MenuSelector from "../../composant/MenuSelector.tsx";
import LanguageSelector from './../../LanguageSelector';


const Navbar = (props) => {
  const { dictionnaire, userLanguage } = useContext(LanguageContext);
  const [login, setLogin] = useState(false);
  const [takeRdv, setTakeRdv] = useState(false);
  const [display, setDisplay] = useState(true);
  const isMobile = window.screen.width < 600
  const cmhover =
    "text-black hover:bg-[#264C4D] hover:text-white px-4 py-2 hover:cursor-pointer rounded-full ";

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(location.pathname.includes('PanelExpert')){
      setDisplay(false);
    }else{
      setDisplay(true)
    }
    }, [location,navigate]);


  function BoutonMemo(action,setAction, link,name,width){
    return useMemo(()=>{
      let html = (
      <div className={`flex flex-row ${width} ${cmhover}`}>
        <div className="flex center w-fit mr-[10px] ">
          
          {action ?   <img src={"/images/pointwhite.webp"} alt={"pw"} /> : <img src={"/images/pointhidden.webp"} alt={"pw"} />}
        </div>
        <div>
          {name}
        </div>
      </div>) 
        if(link){
            return (
              <Link to={link}>{html}</Link>
            )
          }else{
            return (
              <div onClick={setAction}>{html}</div>
            );
          }
      

    },[action,setAction,link,name,width])
  } 
  
  const Login = useMemo(()=>{
    const classname = "text-xs font-mt-demi px-4 py-1 w-[170px] text-right"
    function NavBar(){
      return [
          <Link to="/PoSkin/Compte" key="Compte" className={classname}>{dictionnaire.Navbar.account}</Link>,
          <Link to="/PoSkin/MesRdv" key="MesRdv" className={classname}>{dictionnaire.Navbar.rdv}</Link>,
          <Link to="/PoSkin/PriseDeRdv" key="PriseDeRdv" className={classname}>{dictionnaire.Navbar.take_rdv}</Link>,
          <Link to="/PoSkin/Diagnostic" key="Diagnostic" className={classname}>{dictionnaire.Navbar.take_diagnostic}</Link>,
          <Link to="/PoSkin/Expertise" key="Expertise" className={classname}>{dictionnaire.Navbar.expertise}</Link>,
          <Link to="/PoSkin/APropos" key="APropos" className={classname}>{dictionnaire.Navbar.qsm}</Link>,
          <Link to="/PoSkin/B2B" key="B2B" className={classname}>{dictionnaire.Navbar.b2b}</Link>
      ];
    }
     return <div className="flex justify-end">
      <MenuSelector title={dictionnaire.Navbar.account} options={NavBar()}/>  
      </div>  
  },[props,dictionnaire,isMobile])

  const TakeRdv = BoutonMemo(takeRdv,null,"/PoSKin/PriseDeRdv",dictionnaire.Navbar.take_rdv,userLanguage === "en" ? "w-[260px]" : "w-[260px]") 
  


  return (
     <>
      {display &&
      <div className="w-full h-[40px] sm:h-[80px] border-b-2 border-white grid grid-cols-2 sm:grid-cols-5 bg-[#EEE8E4] p-2">
        <div className="col-start-1 ml-[20px] sm:ml-[35px] mt-[4px] sm:mt-[12px] p-x-2 flex items-start ">
          <a className="w-fit h-full">
            <img
              src={"/images/PoSkin/PoSkin_logo.webp"}
              alt="logo"
              className="h-10 "
              onClick={() => {
                navigate("/PoSkin/Home");
              }}
            />
          </a>
        </div>
        <div className="col-start-2 sm:col-start-4 sm:col-span-2 flex ">
          <div className="w-full h-fit sm:h-full flex flex-row font-mt-bold text-[12px] sm:text-lg space-x-2 mr-[100px] center justify-end ">
          <LanguageSelector />
          
           
            {props.LoginCond  ? (
              <>
              {!isMobile ? 
                <div
                  onMouseEnter={() => {
                    setTakeRdv(true);
                  }}
                  onMouseLeave={() => {
                    setTakeRdv(false);
                  }}
                >
                  {TakeRdv}
                </div>:""}
              </>
            ) : (
              ""
            )}
            <div
              onMouseEnter={() => {
                setLogin(true);
              }}
              onMouseLeave={() => {
                setLogin(false);
              }}
            >
              {Login}
            </div>
          </div>
        </div>
      </div>}
    </>
            );
};
export default Navbar;
