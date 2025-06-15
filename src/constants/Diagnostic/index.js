import { useContext } from "react"
import { LanguageContext } from "../../languages"
import { FR_Diagnostic } from "./FR_Diagnostic"
import { EN_Diagnostic } from "./EN_Diagnostic"

export const Diagnostic = () =>{
    const {userLanguage} = useContext(LanguageContext);
    switch (userLanguage){
        case 'fr':
            return FR_Diagnostic;
        case 'en':
            return EN_Diagnostic;
        default:
            return FR_Diagnostic;
    }
}