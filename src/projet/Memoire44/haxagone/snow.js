import { setDefaultModelSchema, getDefaultModelSchema } from "serializr";
import { CaseGenerique, test2, test3, test6 } from "../divers/Generique";

export class SnowCountry extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/h_wintervide.webp`,1,false,true,false,true,false,false,false," ", undefined, `new SnowCountry(`);
    }
}
setDefaultModelSchema(SnowCountry, getDefaultModelSchema(CaseGenerique));

export class SnowTrainRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrail",orientation),3,false,false,false,false,false,false,false," ", undefined, `new SnowTrainRight(`);
    }
}
setDefaultModelSchema(SnowTrainRight, getDefaultModelSchema(CaseGenerique));

export class SnowTrainCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailcurve",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowTrainCurve(`);
    }
}
setDefaultModelSchema(SnowTrainCurve, getDefaultModelSchema(CaseGenerique));

export class SnowTrainBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailFL",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowTrainBranchLeft(`);
    }
}
setDefaultModelSchema(SnowTrainBranchLeft, getDefaultModelSchema(CaseGenerique));

export class SnowTrainBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowrailFR",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowTrainBranchRight(`);
    }
}
setDefaultModelSchema(SnowTrainBranchRight, getDefaultModelSchema(CaseGenerique));

export class SnowStation extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowstation",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowStation(`);
    }
}
setDefaultModelSchema(SnowStation, getDefaultModelSchema(CaseGenerique));

export class SnowForest extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/h_wforest.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowForest(`);
    }
}
setDefaultModelSchema(SnowForest, getDefaultModelSchema(CaseGenerique));

export class SnowHill extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/h_whill.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowHill(`);
    }
}
setDefaultModelSchema(SnowHill, getDefaultModelSchema(CaseGenerique));

export class SnowVillage extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/h_wvillage.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowVillage(`);
    }
}
setDefaultModelSchema(SnowVillage, getDefaultModelSchema(CaseGenerique));

export class SnowRiversRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowriver",orientation),3,false,false,false,false,false,false,false,"", undefined, `new SnowRiversRight(`);
    }
}
setDefaultModelSchema(SnowRiversRight, getDefaultModelSchema(CaseGenerique));

export class SnowRiversCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowcurved",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowRiversCurve(`);
    }
}
setDefaultModelSchema(SnowRiversCurve, getDefaultModelSchema(CaseGenerique));

export class SnowRiverBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowriverFL",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowRiverBranchLeft(`);
    }
}
setDefaultModelSchema(SnowRiverBranchLeft, getDefaultModelSchema(CaseGenerique));

export class SnowRiverBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowriverFR",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowRiverBranchRight(`);
    }
}
setDefaultModelSchema(SnowRiverBranchRight, getDefaultModelSchema(CaseGenerique));

export class SnowFactory extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/h_wfactory.webp`,1,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowFactory(`);
    }
}
setDefaultModelSchema(SnowFactory, getDefaultModelSchema(CaseGenerique));

export class SnowAirField extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_wairfield",orientation),3,false,false,false,false,false,false,false,"", undefined, `new SnowAirField(`);
    }
}
setDefaultModelSchema(SnowAirField, getDefaultModelSchema(CaseGenerique));

export class SnowAirFieldX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_wairfieldX",orientation),3,false,false,false,false,false,false,false,"", undefined, `new SnowAirFieldX(`);
    }
}
setDefaultModelSchema(SnowAirFieldX, getDefaultModelSchema(CaseGenerique));

export class SnowRoadRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowroad",orientation),3,false,false,false,false,false,false,false," ", undefined, `new SnowRoadRight(`);
    }
}
setDefaultModelSchema(SnowRoadRight, getDefaultModelSchema(CaseGenerique));

export class SnowRoadCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadcurve",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowRoadCurve(`);
    }
}
setDefaultModelSchema(SnowRoadCurve, getDefaultModelSchema(CaseGenerique));

export class SnowRiverY extends CaseGenerique {
    constructor(orientation){
        super(test2("snow","h_snowriverY",orientation),2,false,false,false,false,false,false,false,"  ", undefined, `new SnowRiverY(`);
    }
}
setDefaultModelSchema(SnowRiverY, getDefaultModelSchema(CaseGenerique));

export class SnowTrainX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrailX",orientation),3,false,false,false,false,false,false,false," ", undefined, `new SnowTrainX(`);
    }
}
setDefaultModelSchema(SnowTrainX, getDefaultModelSchema(CaseGenerique));

export class SnowTrainXRoad extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowrailroad",orientation),3,false,false,false,false,false,false,false," ", undefined, `new SnowTrainXRoad(`);
    }
}
setDefaultModelSchema(SnowTrainXRoad, getDefaultModelSchema(CaseGenerique));

export class SnowRoadX extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowroadX",orientation),3,false,false,false,false,false,false,false,"", undefined, `new SnowRoadX(`);
    }
}
setDefaultModelSchema(SnowRoadX, getDefaultModelSchema(CaseGenerique));

export class SnowRoadY extends CaseGenerique{
    constructor(orientation){
        super(test2("snow","h_snowroadY",orientation),2,false,false,false,false,false,false,false,"", undefined, `new SnowRoadY(`);
    }
}
setDefaultModelSchema(SnowRoadY, getDefaultModelSchema(CaseGenerique));

export class SnowRoadBranchLeft extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadFL",orientation),6,false,false,false,false,false,false,false,"", undefined, `new SnowRoadBranchLeft(`);
    }
}
setDefaultModelSchema(SnowRoadBranchLeft, getDefaultModelSchema(CaseGenerique));

export class SnowRoadBranchRight extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowroadFR",orientation),6,false,false,false,false,false,false,false,"", undefined, `new SnowRoadBranchRight(`);
    }
}
setDefaultModelSchema(SnowRoadBranchRight, getDefaultModelSchema(CaseGenerique));

export class SnowMountain extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/h_snowmountain.webp`,null,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowMountain(`);
    }
}
setDefaultModelSchema(SnowMountain, getDefaultModelSchema(CaseGenerique));

export class SnowHedgerow extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/h_snowhedgerow.webp`,null,{Soldat:-2,Tank:-2},true,false,true,false,false,false," ", undefined, `new SnowHedgerow(`);
    }
}
setDefaultModelSchema(SnowHedgerow, getDefaultModelSchema(CaseGenerique));

export class SnowRoadHillRight extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","h_snowhillroad",orientation),3,false,false,false,false,false,false,false,"", undefined, `new SnowRoadHillRight(`);
    }
}
setDefaultModelSchema(SnowRoadHillRight, getDefaultModelSchema(CaseGenerique));

export class SnowRoadHillCurve extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","h_snowhillcurve",orientation),6,false,false,false,false,false,false,false,"", undefined, `new SnowRoadHillCurve(`);
    }
}
setDefaultModelSchema(SnowRoadHillCurve, getDefaultModelSchema(CaseGenerique));

export class SnowFortress extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowfortress.webp`,1,false,false,false,false,false,false,false," ", undefined, `new SnowFortress(`);
    }
}
setDefaultModelSchema(SnowFortress, getDefaultModelSchema(CaseGenerique));

export class SnowLightHouse extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowlighthouse.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowLightHouse(`);
    }
}
setDefaultModelSchema(SnowLightHouse, getDefaultModelSchema(CaseGenerique));

export class SnowMarshes extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowmarshes.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowMarshes(`);
    }
}
setDefaultModelSchema(SnowMarshes, getDefaultModelSchema(CaseGenerique));

export class SnowChurch extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowchurch.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowChurch(`);
    }
}
setDefaultModelSchema(SnowChurch, getDefaultModelSchema(CaseGenerique));

export class SnowBarracks extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowbarracks.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowBarracks(`);
    }
}
setDefaultModelSchema(SnowBarracks, getDefaultModelSchema(CaseGenerique));

export class SnowCamp extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowcamp.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowCamp(`);
    }
}
setDefaultModelSchema(SnowCamp, getDefaultModelSchema(CaseGenerique));

export class SnowCemetery extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowcemetery.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowCemetery(`);
    }
}
setDefaultModelSchema(SnowCemetery, getDefaultModelSchema(CaseGenerique));

export class SnowDepot extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/snow/h_snowdepot.webp`,1,false,false,false,false,false,false,false,"", undefined, `new SnowDepot(`);
    }
}
setDefaultModelSchema(SnowDepot, getDefaultModelSchema(CaseGenerique));

export class SnowDam extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowdam",orientation),1,false,false,false,false,false,false,false,"", undefined, `new SnowDam(`);
    }
}
setDefaultModelSchema(SnowDam, getDefaultModelSchema(CaseGenerique));

export class SnowLakeA extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowlakeA",orientation),6,false,false,false,false,false,false,false,"", undefined, `new SnowLakeA(`);
    }
}
setDefaultModelSchema(SnowLakeA, getDefaultModelSchema(CaseGenerique));

export class SnowLakeB extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowlakeB",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowLakeB(`);
    }
}
setDefaultModelSchema(SnowLakeB, getDefaultModelSchema(CaseGenerique));

export class SnowLakeC extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowlakeC",orientation),6,false,false,false,false,false,false,false,"", undefined, `new SnowLakeC(`);
    }
}
setDefaultModelSchema(SnowLakeC, getDefaultModelSchema(CaseGenerique));

export class SnowPond extends CaseGenerique {
    constructor(orientation){
        super(test6('snow',"h_snowpond",orientation),6,false,false,false,false,false,false,false," ", undefined, `new SnowPond(`);
    }
}
setDefaultModelSchema(SnowPond, getDefaultModelSchema(CaseGenerique));

export class SnowBunker extends CaseGenerique{
    constructor (orientation){
        super(test2("snow","o_wbunker",orientation),2,{Soldat:-1,Tank:-2},true,true,true, undefined, undefined, `new SnowBunker(`);
    }
}
setDefaultModelSchema(SnowBunker, getDefaultModelSchema(CaseGenerique));

export class SnowDragonTeeth extends CaseGenerique{
    constructor (orientation){
        super(test3("snow","o_dragonteeth",orientation),3,null,true,true,true, undefined, undefined, `new SnowDragonTeeth(`);
    }
}
setDefaultModelSchema(SnowDragonTeeth, getDefaultModelSchema(CaseGenerique));

export class SnowLoco extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","o_wloco",orientation),6,null,true,true,true, undefined, undefined, `new SnowLoco(`);
    }
}
setDefaultModelSchema(SnowLoco, getDefaultModelSchema(CaseGenerique));

export class SnowWagon extends CaseGenerique{
    constructor(orientation){
        super(test3("snow","w_wagon",orientation),3,null,true,true,true, undefined, undefined, `new SnowWagon(`);
    }
}
setDefaultModelSchema(SnowWagon, getDefaultModelSchema(CaseGenerique));

export class SnowCasemate extends CaseGenerique{
    constructor(){
        super(`images/Memoire44/snow/w_casemate.webp`,1,null,true,true,true, undefined, undefined, `new SnowCasemate(`);
    }
}
setDefaultModelSchema(SnowCasemate, getDefaultModelSchema(CaseGenerique));

export class SnowBridge extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","w_bridge",orientation),1,null,true,true,true, undefined, undefined, `new SnowBridge(`);
    }
}
setDefaultModelSchema(SnowBridge, getDefaultModelSchema(CaseGenerique));

export class SnowRoadBlock extends CaseGenerique{
    constructor(orientation){
        super(test6("snow","w_roadblock",orientation),6,null,true,true,true, undefined, undefined, `new SnowRoadBlock(`);
    }
}
setDefaultModelSchema(SnowRoadBlock, getDefaultModelSchema(CaseGenerique));


//how edit snow image
// saturation -16 87 0
// baguette magique tolerance 31