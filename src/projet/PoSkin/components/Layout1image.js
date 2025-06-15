const Layout1image =({props})=>{
    return (
        <div className="relative w-full h-fit grid grid-cols-1 sm:grid-cols-2 my-[30px] ">
            <div className="sm:col-start-1 w flex center justify-start">
                <div className="flex flex-col relative w-full">
                    <div className="mx-auto relative w-[95%] sm:w-[80%] ">{props.col1}</div>
                </div>
            </div>
            <div className="sm:col-start-2 flex center"> <img src={props.image1.url} alt={props.image1.alt}/></div>
        </div>
        
    )
}
export default Layout1image