type onoffprops = {
    active: boolean;
    setActive: ()=> void;
}
const ButtonOnOff = ({active,setActive}:onoffprops)=>{
    return <div className="w-8 h-8 rounded-full bg-white">test</div>
}
export default ButtonOnOff;