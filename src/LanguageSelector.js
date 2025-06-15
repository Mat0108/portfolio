import { useContext, useState } from "react";
import Flag from "react-world-flags";
import { LanguageContext, languageOptions } from "./languages";
const LanguageSelector = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isButtonHovering, setIsButtonHovered] = useState(false);
  const [isMenuHovering, setIsMenuHovered] = useState(false);
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  const changeLanguage = (lang) => {
    userLanguageChange(lang);
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
  const getCountryFlag = (userLanguage) => {
    const FlagDictonary = {
      en: "gb",
      hi: "in",
      zh: "cn",
      sv: "se",
      uk: "ua",
      el: "gr",
      kk: "kz",
    };
    return FlagDictonary[userLanguage] || userLanguage;
  };
  
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={onMouseEnterButton}
        onMouseLeave={onMouseLeaveButton}
        className={`flex rounded-xl w-[100px] px-4 py-2 text-[8px] sm:text-[16px] font-medium ${
          showOptions
            ? "bg-blue dark:bg-green text-white"
            : "text-dark-blue dark:text-white"
        }`}
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <div className="flex gap-x-2.5">

          <Flag
            code={getCountryFlag(userLanguage)}
            alt="Language"
            width={window.screen.width < 600 ? 16: 32}
            height={window.screen.width < 600 ? 16: 32}
          />
          <div className="title-header uppercase">{userLanguage}</div>
          {/* <Image
            src="/images/General/Arrow-down.svg"
            className="dark:menu-item"
            alt="Language"
            width="12"
            height="8"
          /> */}
        </div>
      </button>

      {/* Dropdown options */}
      {showOptions && (
        <div
          onMouseEnter={onMouseEnterMenu}
          onMouseLeave={onMouseLeaveMenu}
          className="absolute rounded-2xl bg-white dark:bg-gray-dark text-gray-normal z-[1000] p-2 drop-shadow-2xl h-fit overflow-auto"
          style={{
            fontfamily: "AvenirNextCyr",
            boxshadow: "20px 20px 20px black",
          }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1 space-y-[5%]" role="none">
            {Object.entries(languageOptions).map(([id, name], key) => {
              return (
                <div
                  key={key}
                  className={`cursor-pointer inline text-md font-semibold hover:bg-hover-menu hover:text-white ${
                    id === userLanguage ? "bg-blue_dark" : ""
                  } flex rounded-2xl`}
                  onClick={() => changeLanguage(id)}
                  tabIndex="-1"
                  id={`language-choice-${id}`}
                >
                  <div className="flex h-12 w-32 px-2 align-middle">
                    <Flag
                      code={getCountryFlag(id)}
                      alt="Language"
                      width="27"
                      height="27"
                    />
                  </div>

                  <p
                    className={`self-center absolute title-header ml-10 ${
                      id === userLanguage ? "text-white" : ""
                    }`}
                  >
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
