import { CaseGenerique, test2, test3, test6 } from "../divers/Generique";

export class SnowCountry extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/h_wintervide.webp`,1,false,true,false,true,false,false,false," ", undefined, `new SnowCountry(`);
    }
}
export class SnowTrainRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrail",orientation),3,false,false,false,false,false,false,false," ", undefined, `new SnowTrainRight(`);
    }
}
export class SnowTrainCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailcurve",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowTrainCurve(`);
    }
}
export class SnowTrainBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailFL",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowTrainBranchLeft(`);
    }
}
export class SnowTrainBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailFR",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowTrainBranchRight(`);
    }
}
export class SnowStation extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowstation",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowStation(`);
    }
}
export class SnowForest extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_wforest.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowForest(`);
    }
}
export class SnowHill extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_whill.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowHill(`);
    }
}
export class SnowVillage extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_wvillage.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowVillage(`);
    }
}
export class SnowRiversRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowriver",orientation),3,false,false,false,false,false,false,false,"", undefined, `new SnowRiversRight(`);
    }
}
export class SnowRiversCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowcurved",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowRiversCurve(`);
    }
}
export class SnowRiverBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowriverFL",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowRiverBranchLeft(`);
    }
}
export class SnowRiverBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowriverFR",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowRiverBranchRight(`);
    }
}
export class SnowFactory extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_wfactory.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowFactory(`);
    }
}
export class SnowAirField extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_wairfield",orientation),3,false,false,false,false,false,false,false,"", undefined, `new SnowAirField(`);
    }
}
export class SnowAirFieldX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_wairfieldX",orientation),3,false,false,false,false,false,false,false,"", undefined, `new SnowAirFieldX(`);
    }
}
export class SnowRoadRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowroad",orientation),3,false,false,false,false,false,false,false," ", undefined, `new SnowRoadRight(`);
    }
}
export class SnowRoadCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadcurve",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowRoadCurve(`);
    }
}
export class SnowRiverY extends CaseGenerique {
    constructor(orientation){
        super(test2("snow","h_snowriverY",orientation),2,false,false,false,false,false,false,false,"  ", undefined, `new SnowRiverY(`);
    }
}
export class SnowTrainX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrailX",orientation),3,false,false,false,false,false,false,false," ", undefined, `new SnowTrainX(`);
    }
}
export class SnowTrainXRoad extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrailroad",orientation),3,false,false,false,false,false,false,false," ", undefined, `new SnowTrainXRoad(`);
    }
}
export class SnowRoadX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowroadX",orientation),3,false,false,false,false,false,false,false,"", undefined, `new SnowRoadX(`);
    }
}
export class SnowRoadY extends CaseGenerique{
    constructor(orientation){
        super(test2("snow","h_snowroadY",orientation),2,false,false,false,false,false,false,false,"", undefined, `new SnowRoadY(`);
    }
}
export class SnowRoadBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadFL",orientation),6,false,false,false,false,false,false,false,"", undefined, `new SnowRoadBranchLeft(`);
    }
}
export class SnowRoadBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadFR",orientation),6,false,false,false,false,false,false,false,"", undefined, `new SnowRoadBranchRight(`);
    }
}
export class SnowMountain extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_snowmountain.webp`,null,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowMountain(`);
    }
}
export class SnowHedgerow extends CaseGenerique{
    constructor(orientation){
        super(`images/Memoire44/snow/h_snowhedgerow.webp`,null,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowHedgerow(`);
    }
}
export class SnowRoadHillRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowhillroad",orientation),3,false,false,false,false,false,false,false,"", undefined, `new SnowRoadHillRight(`);
    }
}
export class SnowRoadHillCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowhillcurve",orientation),6,false,false,false,false,false,false,false,"", undefined, `new SnowRoadHillCurve(`);
    }
}
export class SnowFortress extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowfortress.webp`,1,false,false,false,false,false,false,false," ", undefined, `new SnowFortress(`);
    }
}
export class SnowLightHouse extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowlighthouse.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowLightHouse(`);
    }
}
export class SnowMarshes extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowmarshes.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowMarshes(`);
    }
}
export class SnowChurch extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowchurch.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowChurch(`);
    }
}
export class SnowBarracks extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowbarracks.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowBarracks(`);
    }
}
export class SnowCamp extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowcamp.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowCamp(`);
    }
}
export class SnowCemetery extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowcemetery.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowCemetery(`);
    }
}
export class SnowDepot extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowdepot.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowDepot(`);
    }
}
export class SnowDam extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowdam",orientation),1,false,false,false,false,false,false,false,"", undefined, `new SnowDam(`);
    }
}
export class SnowLakeA extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowlakeA",orientation),6,false,false,false,false,false,false,false,"", undefined, `new SnowLakeA(`);
    }
}
export class SnowLakeB extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowlakeB",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowLakeB(`);
    }
}
export class SnowLakeC extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowlakeC",orientation),6,false,false,false,false,false,false,false,"", undefined, `new SnowLakeC(`);
    }
}
export class SnowPond extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowpond",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowPond(`);
    }
}
export class SnowBunker extends CaseGenerique{
    constructor (orientation){
        super(test2("snow","o_wbunker",orientation),2,{Soldat:-1,Tank:-2},true,true,true, undefined, undefined, `new SnowBunker(`);
    }
}
export class SnowDragonTeeth extends CaseGenerique{
    constructor (orientation){
        super(test3("snow","o_dragonteeth",orientation),3,null,true,true,true, undefined, undefined, `new SnowDragonTeeth(`);
    }
}
export class SnowLoco extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","o_wloco",orientation),6,null,true,true,true, undefined, undefined, `new SnowLoco(`);
    }
}
export class SnowWagon extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","w_wagon",orientation),3,null,true,true,true, undefined, undefined, `new SnowWagon(`);
    }
}
export class SnowCasemate extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/w_casemate.webp`,1,null,true,true,true, undefined, undefined, `new SnowCasemate(`);
    }
}
export class SnowBridge extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","w_bridge",orientation),1,null,true,true,true, undefined, undefined, `new SnowBridge(`);
    }
}
export class SnowRoadBlock extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","w_roadblock",orientation),6,null,true,true,true, undefined, undefined, `new SnowRoadBlock(`);
    }
}


//how edit snow image
// saturation -16 87 0
// baguette magique tolerance 31