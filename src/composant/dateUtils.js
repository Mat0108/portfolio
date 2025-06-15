import moment from "moment";
import { useContext } from "react";
import { LanguageContext } from "../languages";
import { weekday } from './dateUtils';

export const Weekday = ()=>{
    const { dictionnaire } = useContext(LanguageContext);
    return [dictionnaire.Week.sunday, dictionnaire.Week.monday, dictionnaire.Week.tuesday, dictionnaire.Week.wednesday,
    dictionnaire.Week.thursday, dictionnaire.Week.friday, dictionnaire.Week.saturday];

}
export const Months = ()=>{
    const { dictionnaire } = useContext(LanguageContext);
    return [dictionnaire.Month.january,dictionnaire.Month.february,dictionnaire.Month.march,
    dictionnaire.Month.april,dictionnaire.Month.may,dictionnaire.Month.june,dictionnaire.Month.july,
    dictionnaire.Month.august,dictionnaire.Month.september,dictionnaire.Month.october,dictionnaire.Month.november,dictionnaire.Month.december
    ];
}


export function DateFormat(date,showMinutes){
    let local = moment(date)
    let weekday = Weekday();
    let months = Months();
    return `${weekday[local.day()]} ${local.date()} ${months[local.month()]} ${local.year()} ${showMinutes ? `à ${local.hour()}h${local.minute()<10?"0":""}${local.minute()}`:""}`
}
export function Heure(date){
    let local = new Date(date);
    return `${local.getHours()}h${local.getMinutes()<10?"0":""}${local.getMinutes()}`
}