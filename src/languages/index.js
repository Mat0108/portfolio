import * as fr from "./fr.json";
import * as en from "./en.json";
import { createContext, useEffect, useState } from 'react';

export const dictionnaire = fr;

const dictionaryList = {
    fr,
    en,
};
  
export const languageOptions = {
  fr: "Français",
  en: "English",
}
export const LanguageContext = createContext({
    userLanguage: "fr",
    dictionnaire: dictionaryList.fr,
  });
// it provides the language context to app
export const LanguageProvider = ({ children }) => {
    const defaultLanguage = window.localStorage.getItem("rcml-lang");
    // console.log(
    //   navigator.languages.find((element) =>
    //     Object.keys(languageOptions).includes(element)
    //   )
    // );
    const [userLanguage, setUserLanguage] = useState(
      defaultLanguage ||
        (Object.keys(languageOptions).includes(navigator.language) &&
          navigator.language) ||
        navigator.languages.find((element) =>
          Object.keys(languageOptions).includes(element)
        ) ||
        "fr"
    );
    const provider = {
      userLanguage,
      dictionnaire: dictionaryList[userLanguage],
      userLanguageChange: (selected) => {
        const newLanguage = languageOptions[selected] ? selected : "fr";
        setUserLanguage(newLanguage);
        window.localStorage.setItem("rcml-lang", newLanguage);
      },
    };
    return (
        <LanguageContext.Provider value={provider} >
          {children}
        </LanguageContext.Provider>
      );
}