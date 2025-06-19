import { useContext } from "react"
import { LanguageContext } from "../../languages";


const Valeurs =()=>{
    const { dictionnaire } = useContext(LanguageContext);
    const isMobile = window.screen.width < 600
    return (<>
        <div className="relative w-full h-fit p-[10px] grid grid-cols-3 sm:grid-cols-4 bg-blue_poskin">
            {!isMobile && <div className="invisible sm:visible col-start-1">
                <div className="p-2 sm:p-[40px] w-full h-full flex center"> <div><img src={"./images/PoSkin/visage/visage6.webp"} alt={"visage"} /></div></div>  
            </div>}
            <div className="sm:col-start-2 col-span-3">
                <p className="mt-[10px] sm:mt-[40px] text-[10px] sm:text-[20px] text-white font-mt-extra-bold">{dictionnaire.Valeur.key0}</p>
                <div className="w-[100%] mt-[15px] sm:mt-[80px] grid grid-cols-3 ">
                    <div className="col-start-1 flex flex-col items-center">
                        <p className="text-white text-[6px] sm:text-[16px] w-[90%] sm:w-[60%]">{dictionnaire.Valeur.key1}</p>
                        <p className="text-white text-[6px] sm:text-[16px] w-[90%] sm:w-[60%] text-justify mt-4">{dictionnaire.Valeur.key1_text}</p>
                    </div>
                    <div className="col-start-2 flex flex-col items-center">
                        <p className="text-white text-[6px] sm:text-[16px] w-[90%] sm:w-[60%]">{dictionnaire.Valeur.key2}</p>
                        <p className="text-white text-[6px] sm:text-[16px] w-[90%] sm:w-[60%] text-justify mt-4">{dictionnaire.Valeur.key2_text}</p>
                    </div>
                    <div className="col-start-3 flex flex-col items-center">
                        <p className="text-white text-[6px] sm:text-[16px] w-[90%] sm:w-[60%]">{dictionnaire.Valeur.key3}</p>
                        <p className="text-white text-[6px] sm:text-[16px] w-[90%] sm:w-[60%] text-justify mt-4">{dictionnaire.Valeur.key3_text}</p>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Valeurs