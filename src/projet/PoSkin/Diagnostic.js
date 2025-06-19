import { Link } from "react-router-dom";
import { LanguageContext } from "../../languages";
import { useContext } from "react";
import Navbar from "./navbar";

const Diagnostic = ()=>{
    
    const isMobile = window.screen.width < 600
    const { dictionnaire } = useContext(LanguageContext);
    return (<div className="relative bg-true_white ">
      <div className='w-full flex gap-4 center '>
            <Navbar />
        </div>
        <div className="bg-[#EEE8E4] text-[#000000] relative h-screen overflow-y-auto overflow-x-hidden custom-scrollbar" id={"Scrollref"}>
        <div className="">
            <div className="w-full h-fit sm:h-[870px] flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 h-full relative">
                    <img src={isMobile ? "/images/Blog/serum/serum2.webp":"/images/PoSkin/visage/visage21.webp"} alt={"visage21"} className="w-full h-full"/>
                </div>
                <div className="w-full sm:w-2/3 h-full bg-[#264C4D]">
                    <div><p className="mt-[20px] sm:mt-[160px] text-white text-[30px] sm:text-[50px] font-mt-extra-bold text-center">{dictionnaire.Diagnostic.Diagnostic.toUpperCase()}</p></div>
                    <div className="w-full flex center mt-[20px] sm:mt-[120px]">
                        <Link Link to={"/PoSkin/Diagnostic/start/"} className="bg-[#EEE8E4] hover:bg-[#264C4D] text-center border-2 border-[#EEE8E4] w-[330px] rounded-full text-[16px] sm:text-[40px] text-[#264C4D] hover:text-[#EEE8E4]">{dictionnaire.Diagnostic.Go}</Link>
                        <p></p>
                    </div>
                    <div className="w-full flex center mt-[30px] mb-[10px]">
                        <div className="w-[60%] text-sm sm:text-xl text-white mb-[10px]">
                            {dictionnaire.Diagnostic.Info1}
                            {dictionnaire.Diagnostic.Info2}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="w-full ">
                <div className="flex flex-col center mt-[80px] ">
                    <div><p className="text-[16px] sm:text-[50px] text-[#264C4D]">{dictionnaire.Diagnostic.Po}</p></div>
                    <div className="w-[90%] sm:w-[800px] mt-[30px] text-[12px] sm:text-lg"><p>{dictionnaire.Diagnostic.Info3}</p></div>
                    <div className="w-[90%] sm:w-[800px] mt-[30px] mb-[80px] text-[12px] sm:text-lg"><p>{dictionnaire.Diagnostic.Info4}</p></div>
                </div>
            </div>
</div>
</div>
    )
}
export default Diagnostic;