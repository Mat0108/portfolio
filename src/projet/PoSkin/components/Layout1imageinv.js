const Layout1imageinv =({props})=>{
    return (
        <div className="relative w-full h-fit grid grid-cols-1 sm:grid-cols-2 mt-[40px] mb-[40px]">
            
            <div className="sm:col-start-1 flex center "> <img src={props.image1.url} alt={props.image1.alt}/></div>
            <div className="sm:col-start-2 w flex center justify-start">
                <div className="mx-auto relative w-[95%] sm:w-[80%]">
                    {props.col1}
                </div>
            </div>
        </div>
        
    )
}
export default Layout1imageinv