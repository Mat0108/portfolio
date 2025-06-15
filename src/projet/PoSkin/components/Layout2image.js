
const Layout2image =({props})=>{
    return (
        <>
        <div className="relative w-full h-0.5 bg-[#10264C4D]"></div>
        <div className="relative w-full h-fit grid grid-cols-2 mt-[20px] gap-4 p-4">
            <div className="relative ml-[20px] col-start-1 flex justify-start">
                <div className="w-full flex flex-col relative">
                    <div className="w-fit mx-auto relative ">{props.col1}</div>
                    <div className="w-fit mx-auto mt-[60px]"> <img src={props.image1.url} alt={props.image1.alt}  /></div>        
                </div>
            </div>
            <div className="relative col-start-2 flex justify-start">
                <div className="w-full flex flex-col relative">
                    <div className="mx-auto w-fit mt-[10px]"> <img src={props.image2.url} alt={props.image2.alt}  /></div>        
                    <div className="w-fit mx-auto relative ">{props.col2}</div>
                </div>
            </div>
        </div>
        <div className="relative w-full h-0.5 mt-[50px] bg-[#10264C4D]"></div>
        </>
        
    )
}
export default Layout2image