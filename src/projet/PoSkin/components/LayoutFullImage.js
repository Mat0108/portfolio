
const LayoutFullImage =({props})=>{
    return (<>
        <div className="relative w-full h-fit bg-[#DEE4E4]">
            <div className='w-full flex center'><img src={props.image1.url} alt={props.image1.alt} className="w-full"/></div>
            <div className={`absolute z-[100] ${props.text1 || props.button ? "top-[40%] sm:top-[24%]":"top-[40%] sm:top-[44%]"} sm:top-[20%] w-full h-[30px] text-white_coffee font-mt-extra-bold text-[18px] sm:text-[70px] flex center`}><p className="">{props.titre}</p></div>
            {props.button && props.button}
            {props.text1 && <div className="absolute sm:top-[680px] w-full h-[60px] text-white_coffee text-[15px] flex center"><p className="w-[70%]">{props.text1}</p> </div>}
        
        </div>
  
    </>
    )
}
export default LayoutFullImage