
const Layout2col =({props})=>{
    
    return (
        <div className="relative w-full h-fit grid grid-row-2 mt-[10px] mt-[50px]">
            <div className="w-full">{props.titre}</div>
            <div className="mx-auto w-fit row-start-2 grid grid-cols-1 sm:grid-cols-2 sm:gap-[160px]">
                <div className="sm:col-start-1 w flex justify-start">
                    <div className="flex flex-col ">
                        <img src={props.image1.url} alt={props.image1.alt} className={props.image1.className} />      
                        {props.col1}
                    </div>
                </div>
                <div className="sm:col-start-2 w flex justify-start">
                    <div className="flex flex-col ">
                         <img src={props.image2.url} alt={props.image2.alt}  className={props.image2.className}/>        
                        {props.col2}
                    </div>
                </div>
            </div>

        </div>
        
    )
}
export default Layout2col