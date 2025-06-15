import React, { useState } from "react";
import { Link } from "react-router-dom";

type MenuSelectorProps = {
  title:string,
  options:Array<React.JSX.Element> 
}
const MenuSelector = ({title,options}:MenuSelectorProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isButtonHovering, setIsButtonHovered] = useState(false);
  const [isMenuHovering, setIsMenuHovered] = useState(false);
  const isMobile = window.screen.width < 600;
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const onMouseEnterButton = () => {
    
    setShowOptions(true);
    setIsButtonHovered(true);
  };
  const onMouseEnterMenu = () => {
    setShowOptions(true);
    setIsMenuHovered(true);
  };
  const onMouseLeaveButton = () => {
    setIsButtonHovered(false);
    if (!isMenuHovering) setShowOptions(false);
  };
  const onMouseLeaveMenu = () => {
    setIsMenuHovered(false);
    if (!isButtonHovering) setShowOptions(false);
  };
  
  const cmhover =
    "text-black hover:bg-[#264C4D] hover:text-white px-4 py-1 sm:py-2 hover:cursor-pointer rounded-full ";
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={onMouseEnterButton}
        onMouseLeave={onMouseLeaveButton}
        className={`flex flex-row w-fit ${showOptions ? "bg-[#264C4D] text-white cursor-pointer":""} ${cmhover}`}
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
         <div className="flex center p-0.5">
        
        <div className="font-mt-bold">
            {title ?? <img src={"/images/menu.png"} alt={"menu"} className="w-6"/>}
        </div>
        </div>
      </button>

      {/* Dropdown options */}
      {showOptions && (
        <div
          onMouseEnter={onMouseEnterMenu}
          onMouseLeave={onMouseLeaveMenu}
          className="absolute right-0 rounded-2xl bg-black_grey text-white z-[1000] p-2 drop-shadow-2xl h-fit overflow-auto"
          aria-labelledby="menu-button"
          tabIndex={-1}>
          <div className="py-1 space-y-[5%] " role="none">
            {options.map((option,key)=>
            <div key={key}
                  className={`cursor-pointer inline text-xs sm:text-md font-semibold hover:bg-[#264C4D] hover:text-white flex rounded-2xl`}
                  tabIndex={key}
                  onClick={handleClick}>{option}</div>
                )
            }
            </div></div>)}
      </div>
      )
};
export default MenuSelector;